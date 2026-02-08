import { Resend } from "resend";
import type { EmailProvider } from "./types";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

async function getEmailForUser(userId: string): Promise<string | null> {
  try {
    const { createAdminClient } = await import("@/lib/supabase/admin");
    const supabase = createAdminClient();
    const { data } = await supabase.auth.admin.getUserById(userId);
    return data?.user?.email ?? null;
  } catch {
    return null;
  }
}

export const sendCapsuleDelivered: EmailProvider["sendCapsuleDelivered"] = async (userIdOrEmail: string, openUrl: string) => {
  const to = userIdOrEmail.includes("@") ? userIdOrEmail : await getEmailForUser(userIdOrEmail);
  if (!to) return;
  if (!resend) {
    console.warn("Resend not configured. Would send to", to, "link:", openUrl);
    return;
  }
  await resend.emails.send({
    from: process.env.RESEND_FROM ?? "Time Capsule <onboarding@resend.dev>",
    to: [to],
    subject: "A message from your past self has arrived",
    html: `
      <p>Your future self time capsule is ready to open.</p>
      <p><a href="${openUrl}">Open your message</a></p>
      <p>This link expires in 7 days.</p>
    `,
  });
};
