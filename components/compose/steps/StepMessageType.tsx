"use client";

import { useComposeStore } from "@/lib/store/composeStore";
import { Button } from "@/components/ui/button";
import { Type, Mic, Video } from "lucide-react";
import type { MessageType } from "@/types/database";

export function StepMessageType({ onNext }: { onNext: () => void }) {
  const messageType = useComposeStore((s) => s.messageType);
  const setDraft = useComposeStore((s) => s.setDraft);

  const types: { id: MessageType; label: string; icon: typeof Type }[] = [
    { id: "text", label: "Text", icon: Type },
    { id: "audio", label: "Audio (max 2:00)", icon: Mic },
    { id: "video", label: "Video (max 1:30)", icon: Video },
  ];

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">How do you want to send your message?</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {types.map(({ id, label, icon: Icon }) => (
          <Button
            key={id}
            type="button"
            variant={messageType === id ? "default" : "outline"}
            className="h-auto flex flex-col gap-2 py-6"
            onClick={() => setDraft({ messageType: id })}
          >
            <Icon className="h-8 w-8" />
            <span>{label}</span>
          </Button>
        ))}
      </div>
      <Button type="button" onClick={onNext} disabled={!messageType}>Next</Button>
    </div>
  );
}
