import { createBrowserClient } from "@supabase/ssr";
import { getSupabaseUrl, getSupabaseKey, logSupabaseEnvCheck } from "./env";

export function createClient() {
  logSupabaseEnvCheck();
  return createBrowserClient(getSupabaseUrl(), getSupabaseKey());
}
