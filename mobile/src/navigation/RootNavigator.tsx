import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import * as Linking from "expo-linking";
import { supabase } from "@/lib/supabase";
import type { Session } from "@supabase/supabase-js";
import { AuthStack } from "./AuthStack";
import { MainStack } from "./MainStack";

const Stack = createNativeStackNavigator();

function handleAuthUrl(url: string) {
  const parsed = Linking.parse(url);
  const path = parsed.path ?? "";
  if (!path.includes("auth-callback")) return;
  const hash = (parsed.url && parsed.url.split("#")[1]) || "";
  const params = new URLSearchParams(hash || "");
  const accessToken = params.get("access_token");
  const refreshToken = params.get("refresh_token");
  if (accessToken && refreshToken) {
    supabase.auth.setSession({ access_token: accessToken, refresh_token: refreshToken });
  }
}

export function RootNavigator() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s);
      setLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, s) => setSession(s));

    Linking.getInitialURL().then((url) => {
      if (url) handleAuthUrl(url);
    });
    const sub = Linking.addEventListener("url", ({ url }) => handleAuthUrl(url));

    return () => {
      subscription.unsubscribe();
      sub.remove();
    };
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {session ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
