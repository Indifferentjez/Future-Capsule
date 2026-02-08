"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useComposeStore } from "@/lib/store/composeStore";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Cake, CalendarRange } from "lucide-react";

const presets = [
  { id: "1y" as const, label: "1 year", sublabel: "Next year, same day" },
  { id: "5y" as const, label: "5 years", sublabel: "Half a decade from now" },
  { id: "10y" as const, label: "10 years", sublabel: "A decade ahead" },
  { id: "custom" as const, label: "Custom date", sublabel: "Pick any day", icon: CalendarRange },
  { id: "birthday" as const, label: "Birthday wish", sublabel: "Future birthday", icon: Cake },
];

export function QuickPicks() {
  const setDraft = useComposeStore((s) => s.setDraft);

  const handlePick = (preset: (typeof presets)[number]["id"]) => {
    const now = new Date();
    let deliverAt: Date | undefined;
    if (preset === "1y") {
      deliverAt = new Date(now);
      deliverAt.setFullYear(deliverAt.getFullYear() + 1);
    } else if (preset === "5y") {
      deliverAt = new Date(now);
      deliverAt.setFullYear(deliverAt.getFullYear() + 5);
    } else if (preset === "10y") {
      deliverAt = new Date(now);
      deliverAt.setFullYear(deliverAt.getFullYear() + 10);
    }
    setDraft({
      preset,
      deliverAt: deliverAt?.toISOString(),
      deliverMode: preset === "birthday" ? "birthday" : "date",
    });
  };

  return (
    <section className="py-16 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-medium text-center text-foreground mb-2">
          When should we deliver it?
        </h2>
        <p className="text-muted-foreground text-center text-sm mb-8">
          Choose a preset or set your own date in the composer
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {presets.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link href="/compose" onClick={() => handlePick(item.id)}>
                <Card className="h-full transition-colors hover:border-foreground/30 hover:bg-muted/50 cursor-pointer">
                  <CardContent className="p-5 flex flex-col gap-1">
                    <span className="flex items-center gap-2">
                      {item.icon ? (
                        <item.icon className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span className="font-medium text-foreground">
                        {item.label}
                      </span>
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {item.sublabel}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
