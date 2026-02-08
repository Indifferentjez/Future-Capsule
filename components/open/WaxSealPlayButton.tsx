"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export function WaxSealPlayButton({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
    } else {
      el.play();
    }
    setPlaying(!playing);
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center py-8"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <audio ref={audioRef} src={src} onEnded={() => setPlaying(false)} />
      <button
        type="button"
        onClick={toggle}
        className="opening-ceremony-wax-button relative w-24 h-24 rounded-full border-4 shadow-lg flex items-center justify-center hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-[var(--antique-brass)]"
        aria-label={playing ? "Pause" : "Play"}
      >
        {playing ? (
          <span className="flex gap-0.5">
            <span className="w-2 h-6 rounded-sm" style={{ backgroundColor: "var(--antique-ink)" }} />
            <span className="w-2 h-6 rounded-sm" style={{ backgroundColor: "var(--antique-ink)" }} />
          </span>
        ) : (
          <span
            className="w-0 h-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-[var(--antique-ink)] ml-1"
          />
        )}
      </button>
      <p className="opening-ceremony-ink-secondary mt-4 font-medium">
        {playing ? "Playing…" : "Play message"}
      </p>
    </motion.div>
  );
}
