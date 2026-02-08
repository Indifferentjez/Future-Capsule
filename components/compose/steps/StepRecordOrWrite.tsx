"use client";

import { useEffect, useState } from "react";
import { useComposeStore } from "@/lib/store/composeStore";
import { createClient } from "@/lib/supabase/client";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { AudioRecorder } from "../AudioRecorder";
import { VideoRecorder } from "../VideoRecorder";

export function StepRecordOrWrite({ onNext }: { onNext: () => void }) {
  const messageType = useComposeStore((s) => s.messageType);
  const textContent = useComposeStore((s) => s.textContent);
  const guidedMode = useComposeStore((s) => s.guidedMode);
  const selectedPromptIds = useComposeStore((s) => s.selectedPromptIds) ?? [];
  const setDraft = useComposeStore((s) => s.setDraft);

  const [snapshots, setSnapshots] = useState<{ id: string; text: string }[]>([]);
  useEffect(() => {
    if (selectedPromptIds.length === 0) {
      setSnapshots([]);
      return;
    }
    const supabase = createClient();
    supabase
      .from("prompts")
      .select("id, text")
      .in("id", selectedPromptIds)
      .then(({ data }) => {
        setSnapshots((data ?? []).map((p) => ({ id: p.id, text: p.text })));
      });
  }, [selectedPromptIds]);

  if (messageType === "text") {
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="textContent">Your message</Label>
          <textarea
            id="textContent"
            className="flex min-h-[200px] w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="Write anything you want your future self to read…"
            value={textContent ?? ""}
            onChange={(e) => setDraft({ textContent: e.target.value })}
          />
        </div>
        {textContent && (
          <Card className="bg-muted/50">
            <CardContent className="p-4">
              <p className="text-sm whitespace-pre-wrap">{textContent}</p>
            </CardContent>
          </Card>
        )}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 bg-foreground text-background hover:bg-foreground/90"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    );
  }

  if (messageType === "audio") {
    return (
      <div className="space-y-6">
        <AudioRecorder
          promptSnapshots={snapshots}
          guidedMode={guidedMode ?? true}
          onComplete={(blob) => {
            setDraft({ mediaBlob: blob });
            onNext();
          }}
        />
      </div>
    );
  }

  if (messageType === "video") {
    return (
      <div className="space-y-6">
        <VideoRecorder
          promptSnapshots={snapshots}
          guidedMode={guidedMode ?? true}
          onComplete={(blob) => {
            setDraft({ mediaBlob: blob });
            onNext();
          }}
        />
      </div>
    );
  }

  return (
    <p className="text-muted-foreground">Select a message type in the previous step.</p>
  );
}
