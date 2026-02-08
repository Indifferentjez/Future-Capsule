"use client";

import { useState, useRef } from "react";
import { useComposeStore } from "@/lib/store/composeStore";
import { createClient } from "@/lib/supabase/client";
import { validateTextContent, validateSongUrl } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function StepReview({ onSuccess }: { onSuccess: () => void }) {
  const deliverMode = useComposeStore((s) => s.deliverMode);
  const deliverAt = useComposeStore((s) => s.deliverAt);
  const birthdayDay = useComposeStore((s) => s.birthdayDay);
  const birthdayMonth = useComposeStore((s) => s.birthdayMonth);
  const timezone = useComposeStore((s) => s.timezone);
  const messageType = useComposeStore((s) => s.messageType);
  const textContent = useComposeStore((s) => s.textContent);
  const selectedPromptIds = useComposeStore((s) => s.selectedPromptIds);
  const guidedMode = useComposeStore((s) => s.guidedMode);
  const songTitle = useComposeStore((s) => s.songTitle);
  const songArtist = useComposeStore((s) => s.songArtist);
  const songUrl = useComposeStore((s) => s.songUrl);
  const mediaBlob = useComposeStore((s) => s.mediaBlob);
  const editMessageId = useComposeStore((s) => s.editMessageId);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();

  // #region agent log
  const renders = useRef(0);
  renders.current += 1;
  if (typeof process !== "undefined" && process.env.NODE_ENV === "development" && renders.current > 40) {
    fetch("http://127.0.0.1:7245/ingest/f8e7f2d9-6acb-412e-aa62-ecdc1a46b856", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "StepReview.tsx", message: "runaway renders", data: { count: renders.current, deliverMode, messageType }, timestamp: Date.now(), sessionId: "debug-session", hypothesisId: "H1-primitive", runId: "post-fix" }) }).catch(() => {});
  }
  // #endregion

  const deliverAtDisplay = deliverMode === "birthday"
    ? (birthdayDay != null && birthdayMonth != null
        ? `Your birthday (${birthdayMonth}/${birthdayDay})`
        : "Birthday (set month/day)")
    : deliverAt
      ? new Date(deliverAt).toLocaleString()
      : "—";

  const handleConfirm = async () => {
    setLoading(true);
    setError(null);
    const textErr = messageType === "text" ? validateTextContent(textContent) : null;
    const songErr = validateSongUrl(songUrl);
    if (textErr || songErr) {
      setError(textErr ?? songErr ?? null);
      setLoading(false);
      return;
    }
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setError("Not signed in");
        setLoading(false);
        return;
      }
      let deliverAtDate: string;
      if (deliverMode === "birthday" && birthdayDay != null && birthdayMonth != null) {
        const now = new Date();
        let y = now.getFullYear();
        let d = new Date(y, birthdayMonth - 1, birthdayDay);
        if (d <= now) d = new Date(y + 1, birthdayMonth - 1, birthdayDay);
        deliverAtDate = d.toISOString();
      } else if (deliverAt) {
        deliverAtDate = new Date(deliverAt).toISOString();
      } else {
        setError("Set delivery date");
        setLoading(false);
        return;
      }
      const prompts = (selectedPromptIds ?? []).map((id) => ({ id, text: "" }));
      const payload = {
        type: messageType ?? "text",
        text_content: messageType === "text" ? (textContent ?? null) : null,
        deliver_at: deliverAtDate,
        deliver_mode: deliverMode ?? "date",
        birthday_day: birthdayDay ?? null,
        birthday_month: birthdayMonth ?? null,
        timezone: timezone ?? null,
        guided_mode: guidedMode ?? true,
        selected_prompts: prompts,
        song_title: songTitle ?? null,
        song_artist: songArtist ?? null,
        song_url: songUrl ?? null,
      };
      let messageId: string;
      if (editMessageId) {
        const { error: updateErr } = await supabase
          .from("messages")
          .update(payload)
          .eq("id", editMessageId)
          .eq("user_id", user.id);
        if (updateErr) {
          setError(updateErr.message);
          setLoading(false);
          return;
        }
        messageId = editMessageId;
        if (mediaBlob) {
          const ext = "webm";
          const path = `${user.id}/${messageId}/media.${ext}`;
          const { error: uploadErr } = await supabase.storage
            .from("capsule-media")
            .upload(path, mediaBlob, { upsert: true });
          if (!uploadErr) {
            await supabase.from("messages").update({ media_path: path }).eq("id", messageId);
          }
        }
      } else {
        const { data: msg, error: insertErr } = await supabase
          .from("messages")
          .insert({
            user_id: user.id,
            ...payload,
            media_path: null,
            status: "scheduled",
          })
          .select("id")
          .single();
        if (insertErr) {
          setError(insertErr.message);
          setLoading(false);
          return;
        }
        messageId = msg!.id;
        if (mediaBlob) {
          const ext = "webm";
          const path = `${user.id}/${messageId}/media.${ext}`;
          const { error: uploadErr } = await supabase.storage
            .from("capsule-media")
            .upload(path, mediaBlob, { upsert: true });
          if (uploadErr) {
            setError(uploadErr.message);
            setLoading(false);
            return;
          }
          await supabase.from("messages").update({ media_path: path }).eq("id", messageId);
        }
      }
      useComposeStore.getState().reset();
      onSuccess();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <Card className="bg-muted/50">
        <CardContent className="p-4 space-y-2 text-sm">
          <p><strong>Delivery:</strong> {deliverAtDisplay}</p>
          <p><strong>Type:</strong> {messageType ?? "—"}</p>
          <p><strong>Guided prompts:</strong> {(selectedPromptIds ?? []).length}</p>
          <p><strong>Song link:</strong> {songUrl ? "Yes" : "No"}</p>
        </CardContent>
      </Card>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <Button onClick={handleConfirm} disabled={loading}>
        {loading ? "Saving…" : "Confirm & save"}
      </Button>
    </div>
  );
}
