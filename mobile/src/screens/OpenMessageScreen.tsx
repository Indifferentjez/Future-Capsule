import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  useWindowDimensions,
  Linking,
} from "react-native";
import { Video } from "expo-av";
import { Audio } from "expo-av";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { getOpenMessage, type OpenMessagePayload } from "@/lib/api";

type Props = NativeStackScreenProps<import("@/navigation/types").MainStackParamList, "OpenMessage">;

export function OpenMessageScreen({ route, navigation }: Props) {
  const { messageId, token } = route.params;
  const [phase, setPhase] = useState<"loading" | "overlay" | "content">("loading");
  const [data, setData] = useState<OpenMessagePayload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const soundRef = useRef<Audio.Sound | null>(null);
  const { width } = useWindowDimensions();

  useEffect(() => {
    getOpenMessage(messageId, token)
      .then((payload) => {
        setData(payload);
        setPhase("overlay");
      })
      .catch((e) => {
        setError((e as Error).message);
        setPhase("content");
      });
    return () => {
      soundRef.current?.unloadAsync();
    };
  }, [messageId, token]);

  const handleOpen = () => {
    setPhase("content");
  };

  if (phase === "loading" || (phase === "overlay" && !data)) {
    return (
      <View style={styles.ceremony}>
        <ActivityIndicator size="large" color="#c9a227" />
        <Text style={styles.ceremonyText}>Opening your capsule…</Text>
      </View>
    );
  }

  if (phase === "overlay") {
    return (
      <View style={styles.ceremony}>
        <Text style={styles.ceremonyTitle}>Your Future Self</Text>
        <Text style={styles.ceremonySub}>Tap to open</Text>
        <TouchableOpacity style={styles.sealButton} onPress={handleOpen}>
          <Text style={styles.sealText}>Open</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.ceremony}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.link}>Go back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!data) return null;

  const { message, signedMediaUrl } = data;

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      {message.type === "text" && message.text_content && (
        <View style={styles.parchment}>
          <Text style={styles.bodyText}>{message.text_content}</Text>
        </View>
      )}
      {message.type === "audio" && signedMediaUrl && (
        <AudioPlayer uri={signedMediaUrl} soundRef={soundRef} />
      )}
      {message.type === "video" && signedMediaUrl && (
        <View style={styles.videoWrap}>
          <Video
            source={{ uri: signedMediaUrl }}
            style={[styles.video, { width: width - 32 }]}
            useNativeControls
            shouldPlay={false}
            isLooping={false}
            resizeMode="contain"
          />
        </View>
      )}
      {message.song_url && (
        <TouchableOpacity
          style={styles.songLink}
          onPress={() => Linking.openURL(message.song_url!)}
        >
          <Text style={styles.songText}>
            {message.song_title && message.song_artist
              ? `Play "${message.song_title}" by ${message.song_artist}`
              : "Play on Spotify / Apple Music"}
          </Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Back to Inbox</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function AudioPlayer({
  uri,
  soundRef,
}: {
  uri: string;
  soundRef: React.MutableRefObject<Audio.Sound | null>;
}) {
  const [playing, setPlaying] = useState(false);

  const toggle = async () => {
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
  };

  return (
    <View style={styles.audioBlock}>
      <TouchableOpacity style={styles.playButton} onPress={toggle}>
        <Text style={styles.playText}>{playing ? "Pause" : "Play"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ceremony: {
    flex: 1,
    backgroundColor: "#2c2416",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  ceremonyTitle: { fontSize: 24, color: "#c9a227", marginBottom: 8 },
  ceremonySub: { color: "#b8a574", marginBottom: 24 },
  ceremonyText: { color: "#b8a574", marginTop: 16 },
  sealButton: { backgroundColor: "#c9a227", paddingHorizontal: 32, paddingVertical: 16, borderRadius: 8 },
  sealText: { color: "#1a1a0a", fontWeight: "700" },
  errorText: { color: "#e74c3c", textAlign: "center", marginBottom: 16 },
  scroll: { flex: 1, backgroundColor: "#2c2416" },
  content: { padding: 16, paddingBottom: 48 },
  parchment: {
    backgroundColor: "#f4e8c8",
    padding: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#c9a227",
    marginBottom: 24,
  },
  bodyText: { fontSize: 16, lineHeight: 24, color: "#2c2416" },
  audioBlock: { marginBottom: 24, alignItems: "center" },
  playButton: { backgroundColor: "#c9a227", paddingHorizontal: 32, paddingVertical: 16, borderRadius: 8 },
  playText: { color: "#1a1a0a", fontWeight: "600" },
  videoWrap: { marginBottom: 24, borderRadius: 8, overflow: "hidden", alignSelf: "center" },
  video: { aspectRatio: 16 / 9 },
  songLink: { padding: 16, alignItems: "center", marginBottom: 24 },
  songText: { color: "#c9a227", textDecorationLine: "underline" },
  back: { alignItems: "center" },
  link: { color: "#b8a574" },
});
