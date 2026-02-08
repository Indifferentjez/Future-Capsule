import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  ActivityIndicator,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AuthStackParamList } from "@/navigation/types";
import { supabase } from "@/lib/supabase";
import { signInWithGoogle, signInWithApple } from "@/lib/auth";

type Props = NativeStackScreenProps<AuthStackParamList, "Login">;

export function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState<"google" | "apple" | null>(null);

  const signInEmail = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) Alert.alert("Sign in failed", error.message);
  };

  const onGoogle = async () => {
    setOauthLoading("google");
    try {
      await signInWithGoogle();
    } catch (e) {
      Alert.alert("Google sign-in failed", (e as Error).message);
    }
    setOauthLoading(null);
  };

  const onApple = async () => {
    if (Platform.OS !== "ios") return;
    setOauthLoading("apple");
    try {
      await signInWithApple();
    } catch (e) {
      Alert.alert("Apple sign-in failed", (e as Error).message);
    }
    setOauthLoading(null);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={signInEmail} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Sign in with email</Text>}
      </TouchableOpacity>

      <Text style={styles.or}>or</Text>

      <TouchableOpacity style={[styles.button, styles.google]} onPress={onGoogle} disabled={!!oauthLoading}>
        {oauthLoading === "google" ? <ActivityIndicator color="#333" /> : <Text style={styles.buttonTextDark}>Continue with Google</Text>}
      </TouchableOpacity>

      {Platform.OS === "ios" && (
        <TouchableOpacity style={[styles.button, styles.apple]} onPress={onApple} disabled={!!oauthLoading}>
          {oauthLoading === "apple" ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Continue with Apple</Text>}
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={() => navigation.navigate("Signup")} style={styles.link}>
        <Text style={styles.linkText}>No account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: "center" },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 12, marginBottom: 12 },
  button: { backgroundColor: "#1a1a2e", padding: 14, borderRadius: 8, alignItems: "center", marginTop: 8 },
  buttonText: { color: "#fff", fontWeight: "600" },
  buttonTextDark: { color: "#333", fontWeight: "600" },
  google: { backgroundColor: "#f0f0f0" },
  apple: { backgroundColor: "#000" },
  or: { textAlign: "center", marginVertical: 16, color: "#666" },
  link: { marginTop: 24, alignItems: "center" },
  linkText: { color: "#1a1a2e", fontSize: 14 },
});
