import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Switch } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useComposeStore } from "@/store/composeStore";

type Props = NativeStackScreenProps<import("@/navigation/types").MainStackParamList, "GuidedToggle">;

export function GuidedToggleScreen({ navigation }: Props) {
  const { guidedMode, set } = useComposeStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guided mode</Text>
      <Text style={styles.hint}>
        When recording audio or video, we’ll show prompts that fade in and out to guide you.
      </Text>
      <View style={styles.row}>
        <Text style={styles.label}>Guided prompts</Text>
        <Switch
          value={guidedMode}
          onValueChange={(v) => set({ guidedMode: v })}
          trackColor={{ false: "#ccc", true: "#1a1a2e" }}
          thumbColor="#fff"
        />
      </View>
      <TouchableOpacity style={styles.next} onPress={() => navigation.navigate("PromptSelect")}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#fff" },
  title: { fontSize: 18, fontWeight: "600", marginBottom: 8 },
  hint: { color: "#666", marginBottom: 24 },
  row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 24 },
  label: { fontSize: 16 },
  next: { backgroundColor: "#1a1a2e", padding: 16, borderRadius: 8, alignItems: "center" },
  nextText: { color: "#fff", fontWeight: "600" },
});
