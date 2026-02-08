const MAX_TEXT_LENGTH = 50_000;
const ALLOWED_SONG_HOSTS = ["open.spotify.com", "music.apple.com", "spotify.com", "apple.co"];

export function validateTextContent(text: string | null | undefined): string | null {
  if (text == null || text === "") return "Message content is required for text type.";
  if (text.length > MAX_TEXT_LENGTH) return `Text must be under ${MAX_TEXT_LENGTH} characters.`;
  return null;
}

export function validateSongUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    const ok = ALLOWED_SONG_HOSTS.some((h) => u.hostname === h || u.hostname.endsWith(`.${h}`));
    if (!ok) return "Please use a Spotify or Apple Music link.";
  } catch {
    return "Invalid URL.";
  }
  return null;
}
