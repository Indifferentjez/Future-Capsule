"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.15),transparent)]" />
      <motion.div
        className="relative z-10 max-w-2xl mx-auto text-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground">
          A message to your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500">
            future self
          </span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          Write, record, or film a capsule today. We’ll deliver it when the time
          is right—so future you can open it like a letter from the past.
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Button asChild size="lg" className="rounded-full px-8 text-base">
            <Link href="/compose">Create a message to your future self</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
