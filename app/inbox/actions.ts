"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import type { ActionResult } from "@/lib/action-result";
import { ok, fail } from "@/lib/action-result";

export async function deleteCapsule(id: string): Promise<ActionResult> {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return fail("Not signed in", "UNAUTHORIZED");
    const { error } = await supabase.from("messages").delete().eq("id", id).eq("user_id", user.id);
    if (error) return fail(error.message, "DB_ERROR");
    revalidatePath("/inbox");
    return ok(undefined);
  } catch (e) {
    return fail(e instanceof Error ? e.message : "Delete failed", "UNKNOWN");
  }
}
