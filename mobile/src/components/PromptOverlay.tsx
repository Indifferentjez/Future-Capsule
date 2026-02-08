import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const FADE_IN_MS = 450;
const FADE_OUT_MS = 450;
const VISIBLE_MS = 3000;

interface PromptOverlayProps {
  prompts: { id: string; text: string }[];
  enabled: boolean;
  intervalSeconds?: number;
}

export function PromptOverlay({
  prompts,
  enabled,
  intervalSeconds = 12,
}: PromptOverlayProps) {
  const [index, setIndex] = useState(0);
  const opacity = useSharedValue(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  useEffect(() => {
    if (!enabled || prompts.length === 0) {
      opacity.value = withTiming(0, { duration: FADE_OUT_MS });
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    const cycle = () => {
      const current = prompts[index % prompts.length];
      if (!current) return;

      opacity.value = withTiming(1, { duration: FADE_IN_MS }, () => {
        const stay = setTimeout(() => {
          opacity.value = withTiming(0, { duration: FADE_OUT_MS }, () => {
            setIndex((i) => i + 1);
          });
        }, VISIBLE_MS);
        return () => clearTimeout(stay);
      });
    };

    cycle();
    const intervalMs = intervalSeconds * 1000;
    intervalRef.current = setInterval(cycle, intervalMs);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [enabled, prompts, index, intervalSeconds]);

  if (!enabled || prompts.length === 0) return null;

  const current = prompts[index % prompts.length];
  if (!current) return null;

  return (
    <View style={styles.overlay} pointerEvents="none">
      <Animated.View style={[styles.card, animatedStyle]}>
        <Text style={styles.text} numberOfLines={3}>
          {current.text}
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 120,
    alignItems: "center",
    zIndex: 10,
  },
  card: {
    backgroundColor: "rgba(0,0,0,0.75)",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 12,
    maxWidth: "90%",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});
