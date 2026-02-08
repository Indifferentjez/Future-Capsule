import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useComposeStore, type MessageType } from "@/store/composeStore";

type Props = NativeStackScreenProps<import("@/navigation/types").MainStackParamList, "MessageType">;

const TYPES: { id: MessageType; label: string }[] = [
  { id: "text", label: "Text" },
  { id: "audio", label: "Audio (max 2:00)" },
  { id: "video", label: "Video (max 1:30)" },
];

export function MessageTypeScreen({ navigation }: Props) {
  const { messageType, set } = useComposeStore();

  return (
    <View style={styles.container}>
      <Text style={styles.hint}>How do you want to send your message?</Text>
      {TYPES.map(({ id, label }) => (
        <TouchableOpacity
          key={id}
          style={[styles.option, messageType === id && styles.optionActive]}
          onPress={() => set({ messageType: id })}
        >
          <Text style={messageType === id ? styles.optionTextActive : styles.optionText}>{label}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={styles.next}
        onPress={() => navigation.navigate("GuidedToggle")}
      >
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#fff" },
  hint: { color: "#666", marginBottom: 16 },
  option: { padding: 16, borderRadius: 8, borderWidth: 1, borderColor: "#ccc", marginBottom: 12 },
  optionActive: { backgroundColor: "#1a1a2e", borderColor: "#1a1a2e" },
  optionText: { color: "#333" },
  optionTextActive: { color: "#fff", fontWeight: "600" },
  next: { marginTop: 24, backgroundColor: "#1a1a2e", padding: 16, borderRadius: 8, alignItems: "center" },
  nextText: { color: "#fff", fontWeight: "600" },
});
