"use client";

import { motion } from "framer-motion";

export function ParchmentLetter({ content }: { content: string }) {
  return (
    <motion.article
      className="opening-ceremony-card relative rounded-lg shadow-xl p-8 md:p-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1), inset 0 0 60px rgba(139,90,43,0.05)",
      }}
    >
      <div className="prose max-w-none">
        <p className="opening-ceremony-ink text-lg leading-relaxed whitespace-pre-wrap">
          {content}
        </p>
      </div>
    </motion.article>
  );
}
