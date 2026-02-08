import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Audio } from "expo-av";
import { useComposeStore } from "@/store/composeStore";
import { PromptOverlay } from "@/components/PromptOverlay";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { MainStackParamList } from "@/navigation/types";

const MAX_DURATION_SEC = 120;

type Props = NativeStackScreenProps<MainStackParamList, "AudioRecord">;

export function AudioRecordScreen({ navigation }: Props) {
  const [recording, setRecording] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(MAX_DURATION_SEC);
  const [permission, setPermission] = useState<boolean | null>(null);
  const recordingRef = useRef<Audio.Recording | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(0);

  const { guidedMode, selectedPrompts, set } = useComposeStore();

  useEffect(() => {
    (async () => {
      const { status } = await Audio.requestPermissionsAsync();
      setPermission(status === "granted");
    })();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const startRecording = async () => {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
        staysActiveInBackground: false,
        shouldDuckAndroid: true,
        playThroughEarpieceAndroid: false,
      });
      const { recording: rec } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      recordingRef.current = rec;
      startTimeRef.current = Date.now();
      setRecording(true);
      setSecondsLeft(MAX_DURATION_SEC);
      timerRef.current = setInterval(() => {
        setSecondsLeft((s) => {
          if (s <= 1) {
            if (timerRef.current) clearInterval(timerRef.current);
            stopRecording();
            return 0;
          }
          return s - 1;
        });
      }, 1000);
    } catch (e) {
      Alert.alert("Microphone error", (e as Error).message);
    }
  };

  const stopRecording = async () => {
    if (!recordingRef.current) return;
    try {
      const status = await recordingRef.current.getStatusAsync();
      if (status.isRecording) {
        await recordingRef.current.stopAndUnloadAsync();
        const uri = recordingRef.current.getURI();
        if (uri) {
          const elapsed = Math.min(MAX_DURATION_SEC, Math.round((Date.now() - startTimeRef.current) / 1000));
          set({ mediaUri: uri, mediaType: "audio", durationSeconds: elapsed });
          navigation.replace("MediaPreview", { uri, type: "audio", durationSeconds: elapsed });
        }
      }
    } catch (e) {
      Alert.alert("Stop failed", (e as Error).message);
    }
    recordingRef.current = null;
    setRecording(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const onPress = () => {
    if (recording) stopRecording();
    else startRecording();
  };

  const format = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  if (permission === null) {
    return <View style={styles.centered}><Text>Requesting microphone permission…</Text></View>;
  }
  if (!permission) {
    return (
      <View style={styles.centered}>
        <Text style={styles.permText}>Microphone access is required to record audio.</Text>
        <TouchableOpacity style={styles.cancel} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <PromptOverlay prompts={selectedPrompts} enabled={guidedMode && recording} intervalSeconds={12} />
      <Text style={styles.timer}>{format(secondsLeft)}</Text>
      <Text style={styles.hint}>Max {MAX_DURATION_SEC / 60} min</Text>
      <TouchableOpacity
        style={[styles.recordBtn, recording && styles.recordBtnStop]}
        onPress={onPress}
      />
      <TouchableOpacity style={styles.cancel} onPress={() => navigation.goBack()}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1a1a2e", justifyContent: "center", alignItems: "center" },
  centered: { flex: 1, justifyContent: "center", alignItems: "center", padding: 24 },
  permText: { marginBottom: 16, textAlign: "center", color: "#fff" },
  timer: { fontSize: 48, fontWeight: "700", color: "#fff", marginBottom: 8 },
  hint: { color: "#888", marginBottom: 32 },
  recordBtn: { width: 80, height: 80, borderRadius: 40, backgroundColor: "#e74c3c", borderWidth: 4, borderColor: "#fff" },
  recordBtnStop: { borderRadius: 12 },
  cancel: { marginTop: 32 },
  cancelText: { color: "#888" },
});
