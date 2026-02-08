import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useComposeStore } from "@/store/composeStore";
import { PromptOverlay } from "@/components/PromptOverlay";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { MainStackParamList } from "@/navigation/types";

const MAX_DURATION_SEC = 90;

type Props = NativeStackScreenProps<MainStackParamList, "VideoRecord">;

export function VideoRecordScreen({ navigation }: Props) {
  const [permission, requestPermission] = useCameraPermissions();
  const [recording, setRecording] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(MAX_DURATION_SEC);
  const cameraRef = useRef<CameraView>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const recordingStartRef = useRef<number>(0);

  const { guidedMode, selectedPrompts, set } = useComposeStore();

  useEffect(() => {
    if (!permission?.granted) requestPermission();
  }, [permission]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const stopAndNavigate = (uri: string, durationSeconds: number) => {
    set({ mediaUri: uri, mediaType: "video", durationSeconds });
    navigation.replace("MediaPreview", { uri, type: "video", durationSeconds });
    setRecording(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const onRecordPress = async () => {
    if (!cameraRef.current || !permission?.granted) return;
    if (recording) {
      try {
        cameraRef.current.stopRecording();
      } catch (_) {}
      return;
    }
    setRecording(true);
    setSecondsLeft(MAX_DURATION_SEC);
    recordingStartRef.current = Date.now();
    const promise = cameraRef.current.recordAsync({
      maxDuration: MAX_DURATION_SEC,
      quality: "high",
    });
    promise
      .then((video) => {
        if (video?.uri) {
          const elapsed = Math.round((Date.now() - recordingStartRef.current) / 1000);
          stopAndNavigate(video.uri, Math.min(elapsed, MAX_DURATION_SEC));
        }
      })
      .catch((e) => {
        Alert.alert("Recording failed", (e as Error).message);
        setRecording(false);
      });
    timerRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          try {
            cameraRef.current?.stopRecording();
          } catch (_) {}
          return 0;
        }
        return s - 1;
      });
    }, 1000);
  };

  const format = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  if (!permission) {
    return <View style={styles.centered}><Text>Requesting camera permission…</Text></View>;
  }
  if (!permission.granted) {
    return (
      <View style={styles.centered}>
        <Text style={styles.permText}>Camera access is required to record video.</Text>
        <TouchableOpacity style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttonText}>Grant permission</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancel} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={StyleSheet.absoluteFill}>
      <CameraView style={StyleSheet.absoluteFill} ref={cameraRef} facing="back" />
      <PromptOverlay prompts={selectedPrompts} enabled={guidedMode && recording} intervalSeconds={12} />
      <View style={styles.controls}>
        <Text style={styles.timer}>{format(secondsLeft)}</Text>
        <TouchableOpacity
          style={[styles.recordBtn, recording && styles.recordBtnStop]}
          onPress={onRecordPress}
        />
        <TouchableOpacity style={styles.cancel} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: "center", alignItems: "center", padding: 24 },
  permText: { marginBottom: 16, textAlign: "center" },
  button: { backgroundColor: "#1a1a2e", padding: 14, borderRadius: 8 },
  buttonText: { color: "#fff", fontWeight: "600" },
  cancel: { marginTop: 16 },
  cancelText: { color: "#666" },
  controls: { position: "absolute", bottom: 48, left: 0, right: 0, alignItems: "center" },
  timer: { fontSize: 32, fontWeight: "700", color: "#fff", marginBottom: 24, textShadowColor: "#000", textShadowRadius: 4 },
  recordBtn: { width: 72, height: 72, borderRadius: 36, backgroundColor: "#e74c3c", borderWidth: 4, borderColor: "#fff" },
  recordBtnStop: { borderRadius: 8 },
});
