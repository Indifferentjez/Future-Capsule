"use server";

import { createAdminClient } from "@/lib/supabase/admin";
import type { ActionResult } from "@/lib/action-result";
import { ok, fail } from "@/lib/action-result";

export async function markOpened(messageId: string): Promise<ActionResult> {
  try {
    const supabase = createAdminClient();
    const { error } = await supabase.from("messages").update({ status: "opened" }).eq("id", messageId);
    if (error) return fail(error.message, "DB_ERROR");
    return ok(undefined);
  } catch (e) {
    return fail(e instanceof Error ? e.message : "Update failed", "UNKNOWN");
  }
}
