"use client";

import { useComposeStore } from "@/lib/store/composeStore";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function StepDelivery({ onNext }: { onNext: () => void }) {
  const deliverMode = useComposeStore((s) => s.deliverMode);
  const deliverAt = useComposeStore((s) => s.deliverAt);
  const birthdayDay = useComposeStore((s) => s.birthdayDay);
  const birthdayMonth = useComposeStore((s) => s.birthdayMonth);
  const timezone = useComposeStore((s) => s.timezone) ?? Intl.DateTimeFormat().resolvedOptions().timeZone;
  const setDraft = useComposeStore((s) => s.setDraft);

  const handleMode = (mode: "date" | "birthday") => {
    setDraft({ deliverMode: mode });
    if (mode === "date" && !deliverAt) {
      const d = new Date();
      d.setFullYear(d.getFullYear() + 1);
      setDraft({ deliverAt: d.toISOString().slice(0, 16) });
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Delivery mode</Label>
        <div className="flex gap-2">
          <Button
            type="button"
            variant={deliverMode === "date" ? "default" : "outline"}
            onClick={() => handleMode("date")}
          >
            Specific date
          </Button>
          <Button
            type="button"
            variant={deliverMode === "birthday" ? "default" : "outline"}
            onClick={() => handleMode("birthday")}
          >
            Birthday
          </Button>
        </div>
      </div>
      {deliverMode === "date" && (
        <div className="space-y-2">
          <Label htmlFor="deliverAt">Delivery date & time</Label>
          <Input
            id="deliverAt"
            type="datetime-local"
            value={deliverAt ? deliverAt.slice(0, 16) : ""}
            onChange={(e) => setDraft({ deliverAt: e.target.value ? new Date(e.target.value).toISOString() : undefined })}
            min={new Date().toISOString().slice(0, 16)}
          />
        </div>
      )}
      {deliverMode === "birthday" && (
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="bday-month">Month</Label>
            <Select
              id="bday-month"
              value={birthdayMonth ?? ""}
              onChange={(e) => setDraft({ birthdayMonth: e.target.value ? Number(e.target.value) : undefined })}
            >
              <option value="">Select</option>
              {MONTHS.map((m, i) => (
                <option key={m} value={i + 1}>{m}</option>
              ))}
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="bday-day">Day</Label>
            <Input
              id="bday-day"
              type="number"
              min={1}
              max={31}
              placeholder="1–31"
              value={birthdayDay ?? ""}
              onChange={(e) => setDraft({ birthdayDay: e.target.value ? Number(e.target.value) : undefined })}
            />
          </div>
        </div>
      )}
      <div className="space-y-2">
        <Label htmlFor="timezone">Timezone</Label>
        <Input
          id="timezone"
          value={timezone}
          onChange={(e) => setDraft({ timezone: e.target.value })}
          readOnly
          className="bg-muted"
        />
      </div>
      <Button type="button" onClick={onNext}>Next</Button>
    </div>
  );
}
