"use client";

import { useComposeStore } from "@/lib/store/composeStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function StepSong({ onNext }: { onNext: () => void }) {
  const songTitle = useComposeStore((s) => s.songTitle);
  const songArtist = useComposeStore((s) => s.songArtist);
  const songUrl = useComposeStore((s) => s.songUrl);
  const setDraft = useComposeStore((s) => s.setDraft);

  const handleUrl = (url: string) => {
    setDraft({ songUrl: url || null });
    if (!url) {
      setDraft({ songTitle: null, songArtist: null });
      return;
    }
    setDraft({ songTitle: null, songArtist: null });
  };

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        Optional: add a song that reminds you of this moment. We’ll store the link only (no playback in-app). Paste a Spotify or Apple Music URL.
      </p>
      <div className="space-y-2">
        <Label htmlFor="songUrl">Song URL</Label>
        <Input
          id="songUrl"
          type="url"
          placeholder="https://open.spotify.com/track/… or https://music.apple.com/…"
          value={songUrl ?? ""}
          onChange={(e) => handleUrl(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="songTitle">Song title (optional)</Label>
          <Input
            id="songTitle"
            value={songTitle ?? ""}
            onChange={(e) => setDraft({ songTitle: e.target.value || null })}
            placeholder="Title"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="songArtist">Artist (optional)</Label>
          <Input
            id="songArtist"
            value={songArtist ?? ""}
            onChange={(e) => setDraft({ songArtist: e.target.value || null })}
            placeholder="Artist"
          />
        </div>
      </div>
      <Button type="button" onClick={onNext}>Next</Button>
    </div>
  );
}
