"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Teleprompter } from "./Teleprompter";

const MAX_SECONDS = 90; // 1:30

export function VideoRecorder({
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunks = useRef<Blob[]>([]);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
    setRecording(false);
    if (mediaRecorder.current?.state === "recording") {
      mediaRecorder.current.stop();
    }
    streamRef.current?.getTracks().forEach((t) => t.stop());
  }, []);

  const start = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      streamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;
      const recorder = new MediaRecorder(stream);
      chunks.current = [];
      recorder.ondataavailable = (e) => e.data.size && chunks.current.push(e.data);
      recorder.onstop = () => {
        const b = new Blob(chunks.current, { type: "video/webm" });
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

  useEffect(() => () => { stop(); }, [stop]);

  const format = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  if (blob) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">Recording saved. You can go back to re-record or proceed.</p>
        <Button type="button" onClick={() => setBlob(null)}>Re-record</Button>
        <Button type="button" onClick={() => onComplete(blob)}>Use this recording</Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {guidedMode && promptSnapshots.length > 0 && (
        <Teleprompter prompts={promptSnapshots} isRecording={recording} />
      )}
      <div className="relative rounded-lg overflow-hidden bg-muted aspect-video max-w-lg mx-auto">
        <video ref={videoRef} autoPlay muted playsInline className="w-full h-full object-cover" />
        <div className="absolute bottom-2 left-2 font-mono text-white bg-black/70 px-2 py-1 rounded">
          {format(secondsLeft)}
        </div>
      </div>
      <div className="flex justify-center gap-2">
        {!recording ? (
          <Button type="button" onClick={start}>Start recording (max 1:30)</Button>
        ) : (
          <Button type="button" variant="destructive" onClick={stop}>Stop</Button>
        )}
      </div>
    </div>
  );
}
