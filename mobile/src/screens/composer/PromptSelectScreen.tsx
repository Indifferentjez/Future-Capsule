import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { supabase } from "@/lib/supabase";
import { useComposeStore } from "@/store/composeStore";

const MIN_SELECT = 3;
const MAX_SELECT = 6;

type PromptRow = { id: string; category: string; text: string };

type Props = NativeStackScreenProps<import("@/navigation/types").MainStackParamList, "PromptSelect">;

export function PromptSelectScreen({ navigation }: Props) {
  const { guidedMode, selectedPromptIds, selectedPrompts, set } = useComposeStore();
  const [prompts, setPrompts] = useState<PromptRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.from("prompts").select("id, category, text").then(({ data }) => {
      setPrompts((data as PromptRow[]) ?? []);
      setLoading(false);
    });
  }, []);

  const toggle = (id: string, text: string) => {
    const nextIds = selectedPromptIds.includes(id)
      ? selectedPromptIds.filter((p) => p !== id)
      : selectedPromptIds.length < MAX_SELECT
        ? [...selectedPromptIds, id]
        : selectedPromptIds;
    const nextPrompts = nextIds.map((pid) => {
      const p = prompts.find((x) => x.id === pid);
      return p ? { id: p.id, text: p.text } : { id: pid, text };
    }).filter((p) => p.text);
    set({ selectedPromptIds: nextIds, selectedPrompts: nextPrompts });
  };

  const canNext =
    !guidedMode || (selectedPromptIds.length >= MIN_SELECT && selectedPromptIds.length <= MAX_SELECT);

  if (!guidedMode) {
    return (
      <View style={styles.container}>
        <Text style={styles.hint}>Guided mode is off. Skip to your message.</Text>
        <TouchableOpacity style={styles.next} onPress={() => navigation.navigate("TextCompose")}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const byCategory = prompts.reduce<Record<string, PromptRow[]>>((acc, p) => {
    (acc[p.category] = acc[p.category] ?? []).push(p);
    return acc;
  }, {});

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.hint}>Pick 3–6 prompts. We’ll show them while you record.</Text>
      {Object.entries(byCategory).map(([category, list]) => (
        <View key={category} style={styles.section}>
          <Text style={styles.category}>{category}</Text>
          {list.map((p) => (
            <TouchableOpacity
              key={p.id}
              style={[styles.chip, selectedPromptIds.includes(p.id) && styles.chipActive]}
              onPress={() => toggle(p.id, p.text)}
            >
              <Text style={selectedPromptIds.includes(p.id) ? styles.chipTextActive : styles.chipText}>
                {p.text}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
      <TouchableOpacity
        style={[styles.next, !canNext && styles.nextDisabled]}
        onPress={() => navigation.navigate("TextCompose")}
        disabled={!canNext}
      >
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  content: { padding: 24, paddingBottom: 48 },
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
  hint: { color: "#666", marginBottom: 16 },
  section: { marginBottom: 20 },
  category: { fontSize: 14, fontWeight: "600", marginBottom: 8, color: "#333" },
  chip: { padding: 12, borderRadius: 8, borderWidth: 1, borderColor: "#ccc", marginBottom: 8 },
  chipActive: { backgroundColor: "#1a1a2e", borderColor: "#1a1a2e" },
  chipText: { color: "#333" },
  chipTextActive: { color: "#fff" },
  next: { marginTop: 24, backgroundColor: "#1a1a2e", padding: 16, borderRadius: 8, alignItems: "center" },
  nextDisabled: { opacity: 0.5 },
  nextText: { color: "#fff", fontWeight: "600" },
});
