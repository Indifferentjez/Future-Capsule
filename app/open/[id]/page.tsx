import { createAdminClient } from "@/lib/supabase/admin";
import { verifyOpenToken } from "@/lib/delivery/token";
import { notFound } from "next/navigation";
import { OpenCeremony } from "@/components/open/OpenCeremony";

type Props = { params: Promise<{ id: string }>; searchParams: Promise<{ token?: string }> };

export default async function OpenPage({ params, searchParams }: Props) {
  const { id } = await params;
  const { token } = await searchParams;
  if (!token) {
    notFound();
  }
  const payload = await verifyOpenToken(token);
  if (!payload || payload.messageId !== id) {
    notFound();
  }
  const supabase = createAdminClient();
  const { data: message } = await supabase
    .from("messages")
    .select("*")
    .eq("id", id)
    .eq("user_id", payload.userId)
    .single();
  if (!message) notFound();

  let signedMediaUrl: string | null = null;
  if (message.media_path) {
    const { data: signed } = await supabase.storage
      .from("capsule-media")
      .createSignedUrl(message.media_path, 3600);
    signedMediaUrl = signed?.signedUrl ?? null;
  }

  return (
    <OpenCeremony
      message={{
        id: message.id,
        type: message.type,
        text_content: message.text_content,
        song_title: message.song_title,
        song_artist: message.song_artist,
        song_url: message.song_url,
        status: message.status,
      }}
      signedMediaUrl={signedMediaUrl}
    />
  );
}
