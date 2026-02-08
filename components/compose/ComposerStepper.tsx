"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useComposeStore } from "@/lib/store/composeStore";
import { createClient } from "@/lib/supabase/client";
import { StepDelivery } from "./steps/StepDelivery";
import { StepMessageType } from "./steps/StepMessageType";
import { StepGuidedToggle } from "./steps/StepGuidedToggle";
import { StepPrompts } from "./steps/StepPrompts";
import { StepRecordOrWrite } from "./steps/StepRecordOrWrite";
import { StepSong } from "./steps/StepSong";
import { StepReview } from "./steps/StepReview";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const STEPS = [
  { id: "delivery", title: "When to deliver" },
  { id: "type", title: "Message type" },
  { id: "guided", title: "Guided mode" },
  { id: "prompts", title: "Prompts" },
  { id: "content", title: "Your message" },
  { id: "song", title: "Nostalgia song" },
  { id: "review", title: "Review" },
];

export function ComposerStepper() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [stepIndex, setStepIndex] = useState(0);
  const setDraft = useComposeStore((s) => s.setDraft);

  useEffect(() => {
    const presetParam = searchParams.get("preset");
    if (presetParam && ["1y", "5y", "10y", "custom", "birthday"].includes(presetParam)) {
      setDraft({ preset: presetParam as "1y" | "5y" | "10y" | "custom" | "birthday" });
    }
    const editId = searchParams.get("edit");
    if (editId) {
      setDraft({ editMessageId: editId });
      createClient()
        .from("messages")
        .select("*")
        .eq("id", editId)
        .single()
        .then(({ data }) => {
          if (data) {
            setDraft({
              deliverMode: data.deliver_mode,
              deliverAt: data.deliver_at,
              birthdayDay: data.birthday_day,
              birthdayMonth: data.birthday_month,
              timezone: data.timezone ?? undefined,
              messageType: data.type,
              guidedMode: data.guided_mode,
              selectedPromptIds: (data.selected_prompts ?? []).map((p: { id: string }) => p.id),
              textContent: data.text_content ?? undefined,
              mediaPath: data.media_path ?? null,
              songTitle: data.song_title ?? null,
              songArtist: data.song_artist ?? null,
              songUrl: data.song_url ?? null,
            });
          }
        });
    }
  }, [searchParams, setDraft]);

  const step = STEPS[stepIndex];
  const canNext = stepIndex < STEPS.length - 1;
  const canPrev = stepIndex > 0;

  const goNext = () => {
    if (canNext) setStepIndex((i) => i + 1);
  };
  const goPrev = () => {
    if (canPrev) setStepIndex((i) => i - 1);
  };

  const onReviewSuccess = useCallback(() => {
    router.push("/inbox");
  }, [router]);

  return (
    <div className="container max-w-2xl py-8 px-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Step {stepIndex + 1}: {step.title}</CardTitle>
          <div className="flex gap-1 mt-2">
            {STEPS.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setStepIndex(i)}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  i <= stepIndex ? "bg-foreground" : "bg-muted"
                }`}
                aria-label={`Go to step ${i + 1}`}
              />
            ))}
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {step.id === "delivery" && <StepDelivery onNext={goNext} />}
          {step.id === "type" && <StepMessageType onNext={goNext} />}
          {step.id === "guided" && <StepGuidedToggle onNext={goNext} />}
          {step.id === "prompts" && <StepPrompts onNext={goNext} />}
          {step.id === "content" && <StepRecordOrWrite onNext={goNext} />}
          {step.id === "song" && <StepSong onNext={goNext} />}
          {step.id === "review" && <StepReview onSuccess={onReviewSuccess} />}
          <div className="flex justify-between pt-4">
            <Button type="button" variant="outline" onClick={goPrev} disabled={!canPrev}>
              Back
            </Button>
            {step.id !== "review" && (
              <Button type="button" onClick={goNext} disabled={!canNext}>
                Next
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
