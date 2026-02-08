"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function AntiqueOverlay({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div
      key="overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="max-w-md mx-auto p-8 text-center space-y-6"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-2xl font-medium text-foreground">
          A message from your past self has arrived.
        </h1>
        <p className="text-muted-foreground">
          When you’re ready, open it below.
        </p>
        <Button size="lg" className="rounded-full px-8" onClick={onOpen}>
          Open
        </Button>
      </motion.div>
    </motion.div>
  );
}
