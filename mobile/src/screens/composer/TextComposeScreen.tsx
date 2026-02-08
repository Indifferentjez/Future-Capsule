import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useComposeStore } from "@/store/composeStore";

type Props = NativeStackScreenProps<import("@/navigation/types").MainStackParamList, "TextCompose">;

export function TextComposeScreen({ navigation }: Props) {
  const { messageType, textContent, mediaUri, set } = useComposeStore();

  const goRecord = () => {
    if (messageType === "audio") navigation.navigate("AudioRecord");
    else if (messageType === "video") navigation.navigate("VideoRecord");
  };

  const goReview = () => {
    navigation.navigate("Review");
  };

  const hasContent =
    messageType === "text"
      ? (textContent?.trim().length ?? 0) > 0
      : !!mediaUri;

  return (
    <View style={styles.container}>
      {messageType === "text" && (
        <TextInput
          style={styles.input}
          placeholder="Write your message to your future self…"
          placeholderTextColor="#888"
          value={textContent}
          onChangeText={(t) => set({ textContent: t })}
          multiline
          numberOfLines={6}
          textAlignVertical="top"
        />
      )}
      {(messageType === "audio" || messageType === "video") && (
        <View style={styles.recordBlock}>
          {mediaUri ? (
            <Text style={styles.recorded}>Recording saved. Tap Review or Re-record from Preview.</Text>
          ) : (
            <TouchableOpacity style={styles.recordButton} onPress={goRecord}>
              <Text style={styles.recordButtonText}>
                {messageType === "video" ? "Record video (max 1:30)" : "Record audio (max 2:00)"}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
      <TouchableOpacity
        style={[styles.next, !hasContent && styles.nextDisabled]}
        onPress={goReview}
        disabled={!hasContent}
      >
        <Text style={styles.nextText}>Review</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#fff" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    minHeight: 160,
  },
  recordBlock: { marginBottom: 24 },
  recorded: { color: "#666" },
  recordButton: { backgroundColor: "#e74c3c", padding: 20, borderRadius: 8, alignItems: "center" },
  recordButtonText: { color: "#fff", fontWeight: "600" },
  next: { marginTop: 24, backgroundColor: "#1a1a2e", padding: 16, borderRadius: 8, alignItems: "center" },
  nextDisabled: { opacity: 0.5 },
  nextText: { color: "#fff", fontWeight: "600" },
});
