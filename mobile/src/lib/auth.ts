import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import { supabase } from "./supabase";
import { Platform } from "react-native";

WebBrowser.maybeCompleteAuthSession();

const scheme = "nostalgiccapsule";
const redirectUrl = Linking.createURL("auth-callback");

export function getRedirectUrl(): string {
  return redirectUrl;
}

export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: redirectUrl,
      skipBrowserRedirect: true,
    },
  });
  if (error) throw error;
  if (data?.url) {
    const result = await WebBrowser.openAuthSessionAsync(data.url, redirectUrl);
    if (result.type === "success" && result.url) {
      const url = new URL(result.url);
      const params = url.hash?.slice(1) || url.searchParams.toString();
      const accessToken = new URLSearchParams(params).get("access_token");
      const refreshToken = new URLSearchParams(params).get("refresh_token");
      if (accessToken && refreshToken) {
        const { error: sessionError } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });
        if (sessionError) throw sessionError;
      }
    }
  }
}

export async function signInWithApple() {
  if (Platform.OS !== "ios") {
    throw new Error("Apple Sign-In is only available on iOS");
  }
  const AppleAuthentication = await import("expo-apple-authentication");
  const credential = await AppleAuthentication.signInAsync({
    requestedScopes: [
      AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
      AppleAuthentication.AppleAuthenticationScope.EMAIL,
    ],
  });
  if (!credential.identityToken) throw new Error("No identity token from Apple");
  const { error } = await supabase.auth.signInWithIdToken({
    provider: "apple",
    token: credential.identityToken,
  });
  if (error) throw error;
}

export async function signOut() {
  await supabase.auth.signOut();
}
