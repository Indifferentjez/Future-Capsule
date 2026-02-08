import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CommonActions } from "@react-navigation/native";
import { supabase } from "@/lib/supabase";
import { useComposeStore } from "@/store/composeStore";
import { uploadMedia } from "@/lib/upload";

type Props = NativeStackScreenProps<import("@/navigation/types").MainStackParamList, "Review">;

export function ReviewScreen({ navigation }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const {
    deliverMode,
    deliverAt,
    birthdayDay,
    birthdayMonth,
    timezone,
    messageType,
    guidedMode,
    selectedPromptIds,
    textContent,
    mediaUri,
    mediaType,
    durationSeconds,
    set,
    reset,
  } = useComposeStore();

  const getDeliverAt = (): string => {
    if (deliverMode === "date" && deliverAt) return new Date(deliverAt).toISOString();
    if (deliverMode === "birthday" && birthdayDay != null && birthdayMonth != null) {
      const d = new Date();
      d.setMonth(birthdayMonth - 1);
      d.setDate(birthdayDay);
      d.setHours(12, 0, 0, 0);
      return d.toISOString();
    }
    return new Date().toISOString();
  };

  const submit = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      Alert.alert("Error", "Not signed in");
      return;
    }
    setSubmitting(true);
    try {
      const deliverAtIso = getDeliverAt();
      const { data: row, error: insertError } = await supabase
        .from("messages")
        .insert({
          user_id: user.id,
          type: messageType,
          text_content: messageType === "text" ? textContent : null,
          media_path: null,
          deliver_at: deliverAtIso,
          deliver_mode: deliverMode,
          birthday_day: deliverMode === "birthday" ? birthdayDay : null,
          birthday_month: deliverMode === "birthday" ? birthdayMonth : null,
          timezone: timezone || "UTC",
          guided_mode: guidedMode,
          selected_prompts: selectedPromptIds,
        })
        .select("id")
        .single();

      if (insertError) throw insertError;
      const messageId = (row as { id: string }).id;

      if (mediaUri && mediaType && (messageType === "audio" || messageType === "video")) {
        const path = await uploadMedia(mediaUri, user.id, messageId, mediaType);
        await supabase
          .from("messages")
          .update({ media_path: path })
          .eq("id", messageId)
          .eq("user_id", user.id);
      }

      reset();
      navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: "Inbox" }] }));
    } catch (e) {
      Alert.alert("Error", (e as Error).message);
    } finally {
      setSubmitting(false);
    }
  };

  const deliverSummary =
    deliverMode === "date" && deliverAt
      ? new Date(deliverAt).toLocaleString()
      : deliverMode === "birthday" && birthdayDay != null && birthdayMonth != null
        ? `Birthday: ${birthdayMonth}/${birthdayDay} (${timezone})`
        : "—";

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Delivery</Text>
      <Text style={styles.value}>{deliverSummary}</Text>

      <Text style={styles.label}>Type</Text>
      <Text style={styles.value}>{messageType}</Text>

      {messageType === "text" && (
        <>
          <Text style={styles.label}>Message</Text>
          <Text style={styles.body} numberOfLines={5}>{textContent}</Text>
        </>
      )}
      {(messageType === "audio" || messageType === "video") && mediaUri && (
        <>
          <Text style={styles.label}>Media</Text>
          <Text style={styles.value}>{mediaType} recorded</Text>
        </>
      )}

      <TouchableOpacity
        style={[styles.submit, submitting && styles.submitDisabled]}
        onPress={submit}
        disabled={submitting}
      >
        {submitting ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.submitText}>Send to future self</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#fff" },
  label: { fontSize: 12, color: "#666", marginTop: 16, marginBottom: 4 },
  value: { fontSize: 16, marginBottom: 4 },
  body: { fontSize: 14, color: "#333", marginBottom: 8 },
  submit: { marginTop: 32, backgroundColor: "#1a1a2e", padding: 16, borderRadius: 8, alignItems: "center" },
  submitDisabled: { opacity: 0.7 },
  submitText: { color: "#fff", fontWeight: "600" },
});
