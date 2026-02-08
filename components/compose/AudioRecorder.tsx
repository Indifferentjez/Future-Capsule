"use client";

import { useRef, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Teleprompter } from "./Teleprompter";

const MAX_SECONDS = 2 * 60; // 2:00

export function AudioRecorder({
  onComplete,
  promptSnapshots,
  guidedMode,
}: {
  onComplete: (blob: Blob) => void;
  promptSnapshots: { id: string; text: string }[];
  guidedMode: boolean;
}) {
  const [recording, setRecording] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(MAX_SECONDS);
  const [blob, setBlob] = useState<Blob | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
    setRecording(false);
    if (mediaRecorder.current?.state === "recording") {
      mediaRecorder.current.stop();
    }
  }, []);

  const start = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      chunks.current = [];
      recorder.ondataavailable = (e) => e.data.size && chunks.current.push(e.data);
      recorder.onstop = () => {
        stream.getTracks().forEach((t) => t.stop());
        const b = new Blob(chunks.current, { type: "audio/webm" });
        setBlob(b);
      };
      mediaRecorder.current = recorder;
      recorder.start();
      setRecording(true);
      setSecondsLeft(MAX_SECONDS);
      timer.current = setInterval(() => {
        setSecondsLeft((s) => {
          if (s <= 1) {
            stop();
            return 0;
          }
          return s - 1;
        });
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  };

  const format = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  if (blob) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">Recording saved. You can go back to re-record or proceed.</p>
        <Button type="button" onClick={() => { setBlob(null); }}>Re-record</Button>
        <Button type="button" onClick={() => onComplete(blob)}>Use this recording</Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {guidedMode && promptSnapshots.length > 0 && (
        <Teleprompter prompts={promptSnapshots} isRecording={recording} />
      )}
      <div className="flex flex-col items-center gap-4">
        <span className="text-2xl font-mono tabular-nums">{format(secondsLeft)}</span>
        {!recording ? (
          <Button type="button" onClick={start}>Start recording (max 2:00)</Button>
        ) : (
          <Button type="button" variant="destructive" onClick={stop}>Stop</Button>
        )}
      </div>
    </div>
  );
}
