"use client";

import { useEffect, useState } from "react";
import { useComposeStore } from "@/lib/store/composeStore";
import { createClient } from "@/lib/supabase/client";
import type { Prompt } from "@/types/database";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const MIN_SELECT = 3;
const MAX_SELECT = 6;

export function StepPrompts({ onNext }: { onNext: () => void }) {
  const guidedMode = useComposeStore((s) => s.guidedMode);
  const selectedPromptIds = useComposeStore((s) => s.selectedPromptIds) ?? [];
  const setDraft = useComposeStore((s) => s.setDraft);
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    supabase.from("prompts").select("id, category, time_horizon, intensity, text").then(({ data }) => {
      setPrompts(data ?? []);
      setLoading(false);
    });
  }, [supabase]);

  const toggle = (id: string) => {
    const next = selectedPromptIds.includes(id)
      ? selectedPromptIds.filter((p) => p !== id)
      : selectedPromptIds.length < MAX_SELECT
        ? [...selectedPromptIds, id]
        : selectedPromptIds;
    setDraft({ selectedPromptIds: next });
  };

  if (!guidedMode) {
    return (
      <div className="space-y-4">
        <p className="text-muted-foreground">Guided mode is off. Skip to your message.</p>
        <Button type="button" onClick={onNext}>Next</Button>
      </div>
    );
  }

  if (loading) return <p className="text-muted-foreground">Loading prompts…</p>;

  const byCategory = prompts.reduce<Record<string, Prompt[]>>((acc, p) => {
    (acc[p.category] = acc[p.category] ?? []).push(p);
    return acc;
  }, {});

  const canNext = selectedPromptIds.length >= MIN_SELECT && selectedPromptIds.length <= MAX_SELECT;
  const estMinutes = Math.ceil((selectedPromptIds.length * 15) / 60);

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        Pick 3–6 prompts. We’ll show them like a teleprompter while you record. (~{estMinutes} min total)
      </p>
      <div className="space-y-4">
        {Object.entries(byCategory).map(([category, list]) => (
          <div key={category}>
            <h4 className="text-sm font-medium text-foreground mb-2">{category}</h4>
            <div className="flex flex-wrap gap-2">
              {list.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => toggle(p.id)}
                  className={cn(
                    "rounded-md border px-3 py-2 text-left text-sm transition-colors",
                    selectedPromptIds.includes(p.id)
                      ? "border-foreground bg-foreground text-background"
                      : "border-border hover:border-foreground/50"
                  )}
                >
                  {p.text}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        Selected: {selectedPromptIds.length} / {MAX_SELECT}
      </p>
      <Button type="button" onClick={onNext} disabled={!canNext}>
        Next
      </Button>
    </div>
  );
}
