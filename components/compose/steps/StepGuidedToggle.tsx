"use client";

import { useComposeStore } from "@/lib/store/composeStore";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export function StepGuidedToggle({ onNext }: { onNext: () => void }) {
  const guidedMode = useComposeStore((s) => s.guidedMode);
  const setDraft = useComposeStore((s) => s.setDraft);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between rounded-lg border border-border p-4">
        <div>
          <Label htmlFor="guided" className="text-base font-medium">Guided mode</Label>
          <p className="text-sm text-muted-foreground mt-1">
            Show prompts while recording so you know what to talk about.
          </p>
        </div>
        <Switch
          id="guided"
          checked={guidedMode ?? true}
          onCheckedChange={(v) => setDraft({ guidedMode: v })}
        />
      </div>
      <Button type="button" onClick={onNext}>Next</Button>
    </div>
  );
}
