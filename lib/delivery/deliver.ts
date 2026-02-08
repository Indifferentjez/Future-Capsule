import { createAdminClient } from "@/lib/supabase/admin";
import { signOpenToken } from "./token";
import { sendCapsuleDelivered } from "@/lib/email";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export async function deliverDueCapsules(): Promise<{ delivered: number }> {
  const supabase = createAdminClient();
  const { data: due } = await supabase
    .from("messages")
    .select("id, user_id")
    .eq("status", "scheduled")
    .lte("deliver_at", new Date().toISOString());

  let delivered = 0;
  for (const msg of due ?? []) {
    await supabase.from("messages").update({ status: "delivered" }).eq("id", msg.id);
    const token = await signOpenToken(msg.id, msg.user_id);
    const openUrl = `${BASE_URL}/open/${msg.id}?token=${token}`;
    await sendCapsuleDelivered(msg.user_id, openUrl);
    delivered++;
  }
  return { delivered };
}
