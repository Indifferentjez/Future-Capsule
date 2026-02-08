import { createAdminClient } from "@/lib/supabase/admin";
import { verifyOpenToken } from "@/lib/delivery/token";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const messageId = searchParams.get("messageId");
    const token = searchParams.get("token");
    if (!messageId || !token) {
      return NextResponse.json({ error: "Missing messageId or token" }, { status: 400 });
    }
    const payload = await verifyOpenToken(token);
    if (!payload || payload.messageId !== messageId) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }
    const supabase = createAdminClient();
    const { data: message, error } = await supabase
      .from("messages")
      .select("*")
      .eq("id", messageId)
      .eq("user_id", payload.userId)
      .single();
    if (error || !message) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    let signedMediaUrl: string | null = null;
    if (message.media_path) {
      const { data: signed } = await supabase.storage
        .from("capsule-media")
        .createSignedUrl(message.media_path, 3600);
      signedMediaUrl = signed?.signedUrl ?? null;
    }
    return NextResponse.json({
      message: {
        id: message.id,
        type: message.type,
        text_content: message.text_content,
        song_title: message.song_title,
        song_artist: message.song_artist,
        song_url: message.song_url,
        status: message.status,
      },
      signedMediaUrl,
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Failed";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
