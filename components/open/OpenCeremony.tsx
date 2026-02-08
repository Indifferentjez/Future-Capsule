"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { markOpened } from "@/app/open/[id]/actions";
import { AntiqueOverlay } from "./AntiqueOverlay";
import { ParchmentLetter } from "./ParchmentLetter";
import { WaxSealPlayButton } from "./WaxSealPlayButton";

type Message = {
  id: string;
  type: string;
  text_content: string | null;
  song_title: string | null;
  song_artist: string | null;
  song_url: string | null;
  status: string;
};

export function OpenCeremony({
  message,
  signedMediaUrl,
}: {
  message: Message;
  signedMediaUrl: string | null;
}) {
  const [phase, setPhase] = useState<"overlay" | "reveal" | "content">("overlay");
  const [opened, setOpened] = useState(false);

  const handleOpen = useCallback(() => {
    setPhase("reveal");
    setTimeout(() => {
      setPhase("content");
      if (!opened) {
        setOpened(true);
        markOpened(message.id);
      }
    }, 1800);
  }, [message.id, opened]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatePresence mode="wait">
        {phase === "overlay" && (
          <AntiqueOverlay onOpen={handleOpen} />
        )}
        {(phase === "reveal" || phase === "content") && (
          <motion.div
            key="antique-scope"
            data-open-theme="antique"
            className="absolute inset-0 opening-ceremony-bg opening-ceremony-vignette"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: phase === "reveal" ? 1 : 0.6 }}
          >
            {phase === "reveal" && (
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
            )}
            {phase === "content" && (
              <motion.div
                key="content"
                className="min-h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="max-w-xl mx-auto py-12 px-6">
              {message.type === "text" && message.text_content && (
                <ParchmentLetter content={message.text_content} />
              )}
              {message.type === "audio" && signedMediaUrl && (
                <WaxSealPlayButton src={signedMediaUrl} />
              )}
              {message.type === "video" && signedMediaUrl && (
                <div className="relative rounded-lg overflow-hidden border-4 border-amber-900/40 shadow-xl">
                  <video
                    src={signedMediaUrl}
                    controls
                    className="w-full aspect-video object-cover"
                    style={{ filter: "sepia(0.2) contrast(1.05)" }}
                  />
                  <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.06%22/%3E%3C/svg%3E')] mix-blend-overlay" />
                </div>
              )}
              {message.song_url && (
                <div className="mt-8 text-center">
                  <a
                    href={message.song_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opening-ceremony-accent inline-flex items-center rounded-lg border-2 px-4 py-2 no-underline hover:opacity-90"
                  >
                    {message.song_title && message.song_artist
                      ? `Play “${message.song_title}” by ${message.song_artist}`
                      : "Play on Spotify / Apple Music"}
                  </a>
                </div>
              )}
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
