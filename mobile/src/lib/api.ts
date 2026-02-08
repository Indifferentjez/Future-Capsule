const APP_URL = process.env.EXPO_PUBLIC_APP_URL ?? "";

export async function getOpenToken(messageId: string, accessToken: string): Promise<string> {
  const res = await fetch(`${APP_URL}/api/messages/${messageId}/open-token`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error((body as { error?: string }).error ?? "Failed to get open token");
  }
  const data = (await res.json()) as { token: string };
  return data.token;
}

export type OpenMessagePayload = {
  message: {
    id: string;
    type: string;
    text_content: string | null;
    song_title: string | null;
    song_artist: string | null;
    song_url: string | null;
    status: string;
  };
  signedMediaUrl: string | null;
};

export async function getOpenMessage(
  messageId: string,
  token: string
): Promise<OpenMessagePayload> {
  const res = await fetch(
    `${APP_URL}/api/messages/open?messageId=${encodeURIComponent(messageId)}&token=${encodeURIComponent(token)}`
  );
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error((body as { error?: string }).error ?? "Failed to load message");
  }
  return res.json();
}
