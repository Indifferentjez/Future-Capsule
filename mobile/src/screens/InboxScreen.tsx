import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "@/lib/supabase";
import { useComposeStore } from "@/store/composeStore";
import { getOpenToken } from "@/lib/api";
import type { MainStackParamList } from "@/navigation/types";

type MessageRow = {
  id: string;
  type: string;
  deliver_at: string;
  status: string;
  created_at: string;
};

export function InboxScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList, "Inbox">>();
  const [list, setList] = useState<MessageRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [openingId, setOpeningId] = useState<string | null>(null);
  const reset = useComposeStore((s) => s.reset);

  useEffect(() => {
    const fetchList = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data, error } = await supabase
        .from("messages")
        .select("id, type, deliver_at, status, created_at")
        .order("created_at", { ascending: false });
      if (error) {
        setList([]);
        return;
      }
      setList((data as MessageRow[]) ?? []);
    };
    fetchList().finally(() => setLoading(false));
    const sub = supabase
      .channel("inbox")
      .on("postgres_changes", { event: "*", schema: "public", table: "messages" }, () => {
        fetchList();
      })
      .subscribe();
    return () => {
      sub.unsubscribe();
    };
  }, []);

  const openMessage = async (id: string) => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.access_token) return;
    setOpeningId(id);
    try {
      const token = await getOpenToken(id, session.access_token);
      navigation.navigate("OpenMessage", { messageId: id, token });
    } catch (e) {
      Alert.alert("Error", (e as Error).message);
    } finally {
      setOpeningId(null);
    }
  };

  const startNew = () => {
    reset();
    navigation.navigate("Delivery");
  };

  const statusLabel = (s: string) => (s === "scheduled" ? "Scheduled" : s === "delivered" ? "Delivered" : "Opened");
  const formatDate = (d: string) => new Date(d).toLocaleDateString(undefined, { dateStyle: "medium" });

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.newButton} onPress={startNew}>
        <Text style={styles.newButtonText}>New message</Text>
      </TouchableOpacity>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.empty}>No capsules yet.</Text>}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.row}
            onPress={() => openMessage(item.id)}
            disabled={openingId === item.id}
          >
            <View style={styles.rowLeft}>
              <Text style={styles.rowType}>{item.type}</Text>
              <Text style={styles.rowDate}>{formatDate(item.deliver_at)}</Text>
            </View>
            <Text style={styles.rowStatus}>{statusLabel(item.status)}</Text>
            {openingId === item.id && <ActivityIndicator size="small" style={styles.rowLoader} />}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
  newButton: { backgroundColor: "#1a1a2e", padding: 16, borderRadius: 8, marginBottom: 16 },
  newButtonText: { color: "#fff", fontWeight: "600", textAlign: "center" },
  empty: { padding: 24, color: "#666", textAlign: "center" },
  row: { flexDirection: "row", alignItems: "center", paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: "#eee" },
  rowLeft: { flex: 1 },
  rowType: { fontWeight: "600", textTransform: "capitalize" },
  rowDate: { color: "#666", marginTop: 2 },
  rowStatus: { color: "#666", marginRight: 8 },
  rowLoader: { marginLeft: 8 },
});
