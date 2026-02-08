export type MessageType = "text" | "audio" | "video";
export type DeliverMode = "date" | "birthday";
export type MessageStatus = "scheduled" | "delivered" | "opened";

export interface Prompt {
  id: string;
  category: string;
  time_horizon: "short" | "mid" | "long";
  intensity: "light" | "deep";
  text: string;
}

export interface SelectedPromptSnapshot {
  id: string;
  text: string;
}

export interface Message {
  id: string;
  user_id: string;
  type: MessageType;
  text_content: string | null;
  media_path: string | null;
  deliver_at: string;
  deliver_mode: DeliverMode;
  birthday_day: number | null;
  birthday_month: number | null;
  timezone: string | null;
  guided_mode: boolean;
  selected_prompts: SelectedPromptSnapshot[];
  song_title: string | null;
  song_artist: string | null;
  song_url: string | null;
  status: MessageStatus;
  created_at: string;
}

export interface ComposeDraft {
  preset?: "1y" | "5y" | "10y" | "custom" | "birthday";
  deliverMode?: DeliverMode;
  deliverAt?: string;
  birthdayDay?: number;
  birthdayMonth?: number;
  timezone?: string;
  messageType?: MessageType;
  guidedMode?: boolean;
  selectedPromptIds?: string[];
  textContent?: string;
  mediaBlob?: Blob | null;
  mediaPath?: string | null;
  songTitle?: string | null;
  songArtist?: string | null;
  songUrl?: string | null;
  editMessageId?: string | null;
}
