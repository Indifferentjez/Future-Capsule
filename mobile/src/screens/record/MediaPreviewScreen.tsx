import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from "react-native";
import { Audio, Video } from "expo-av";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { MainStackParamList } from "@/navigation/types";

type Props = NativeStackScreenProps<MainStackParamList, "MediaPreview">;

export function MediaPreviewScreen({ route, navigation }: Props) {
  const { uri, type, durationSeconds } = route.params;
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const soundRef = useRef<Audio.Sound | null>(null);
  const videoRef = useRef<Video>(null);

  useEffect(() => {
    return () => {
      soundRef.current?.unloadAsync();
    };
  }, []);

  const playPause = async () => {
    if (type === "audio") {
      if (soundRef.current) {
        const status = await soundRef.current.getStatusAsync();
        if (status.isLoaded && status.isPlaying) {
          await soundRef.current.pauseAsync();
          setPlaying(false);
        } else {
          await soundRef.current.playAsync();
          setPlaying(true);
        }
        return;
      }
      const { sound } = await Audio.Sound.createAsync({ uri });
      soundRef.current = sound;
      sound.setOnPlaybackStatusUpdate((s) => {
        if (s.isLoaded && s.didJustFinishAndNotReset) setPlaying(false);
      });
      await sound.playAsync();
      setPlaying(true);
    } else {
      if (videoRef.current) {
        const status = await (videoRef.current as any).getStatusAsync?.();
        if (status?.isLoaded && status.isPlaying) {
          await (videoRef.current as any).pauseAsync();
          setPlaying(false);
        } else {
          await (videoRef.current as any).playAsync();
          setPlaying(true);
        }
      }
    }
  };

  const handleReRecord = () => {
    navigation.replace(type === "video" ? "VideoRecord" : "AudioRecord");
  };

  const handleUseThis = () => {
    navigation.navigate("Review");
  };

  return (
    <View style={styles.container}>
      {type === "audio" && (
        <View style={styles.audioBlock}>
          <Text style={styles.duration}>{formatDuration(durationSeconds)}</Text>
          <TouchableOpacity style={styles.playButton} onPress={playPause}>
            <Text style={styles.playText}>{playing ? "Pause" : "Play"}</Text>
          </TouchableOpacity>
        </View>
      )}
      {type === "video" && (
        <View style={styles.videoWrap}>
          <Video
            ref={videoRef}
            source={{ uri }}
            style={styles.video}
            useNativeControls
            shouldPlay={false}
            isLooping={false}
            resizeMode="contain"
            onPlaybackStatusUpdate={(s) => {
              if (s.isLoaded && "isPlaying" in s) setPlaying(s.isPlaying);
            }}
          />
        </View>
      )}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.secondary} onPress={handleReRecord}>
          <Text style={styles.secondaryText}>Re-record</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primary} onPress={handleUseThis} disabled={loading}>
          {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.primaryText}>Use this</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
}

function formatDuration(sec: number) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1a1a2e", padding: 24 },
  audioBlock: { flex: 1, justifyContent: "center", alignItems: "center" },
  duration: { fontSize: 24, color: "#fff", marginBottom: 16 },
  playButton: { backgroundColor: "#3498db", paddingHorizontal: 32, paddingVertical: 16, borderRadius: 8 },
  playText: { color: "#fff", fontWeight: "600" },
  videoWrap: { flex: 1, minHeight: 240, borderRadius: 12, overflow: "hidden", backgroundColor: "#000" },
  video: { flex: 1, width: "100%" },
  actions: { flexDirection: "row", gap: 16, marginTop: 24 },
  secondary: { flex: 1, padding: 16, alignItems: "center", borderWidth: 1, borderColor: "#666", borderRadius: 8 },
  secondaryText: { color: "#ccc" },
  primary: { flex: 1, padding: 16, alignItems: "center", backgroundColor: "#1a1a2e", borderRadius: 8, borderWidth: 1, borderColor: "#3498db" },
  primaryText: { color: "#3498db", fontWeight: "600" },
});
