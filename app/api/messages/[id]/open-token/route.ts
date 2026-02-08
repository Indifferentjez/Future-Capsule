import { createClient } from "@supabase/supabase-js";
import { getSupabaseUrl, getSupabaseKey } from "@/lib/supabase/env";
import { signOpenToken } from "@/lib/delivery/token";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: messageId } = await params;
    if (!messageId) {
      return NextResponse.json({ error: "Missing message id" }, { status: 400 });
    }
    const authHeader = req.headers.get("authorization");
    const accessToken = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : null;
    if (!accessToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const supabase = createClient(getSupabaseUrl(), getSupabaseKey());
    const { data: { user }, error: userError } = await supabase.auth.getUser(accessToken);
    if (userError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { data: row } = await supabase
      .from("messages")
      .select("id")
      .eq("id", messageId)
      .eq("user_id", user.id)
      .single();
    if (!row) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    const token = await signOpenToken(messageId, user.id);
    return NextResponse.json({ token });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
