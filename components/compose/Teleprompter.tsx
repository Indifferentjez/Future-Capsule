"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const INTERVAL_MIN = 12;
const INTERVAL_MAX = 18;

export function Teleprompter({
  prompts,
  isRecording,
}: {
  prompts: { id: string; text: string }[];
  isRecording: boolean;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!isRecording || prompts.length === 0) return;
    const delay = (INTERVAL_MIN + Math.random() * (INTERVAL_MAX - INTERVAL_MIN)) * 1000;
    const t = setTimeout(() => {
      setIndex((i) => (i + 1) % prompts.length);
    }, delay);
    return () => clearTimeout(t);
  }, [isRecording, index, prompts.length]);

  if (prompts.length === 0) return null;

  return (
    <div className="min-h-[4rem] flex items-center justify-center px-4">
      <AnimatePresence mode="wait">
        <motion.p
          key={prompts[index]?.id ?? index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4 }}
          className="text-center text-lg text-foreground max-w-lg"
        >
          {prompts[index]?.text}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
