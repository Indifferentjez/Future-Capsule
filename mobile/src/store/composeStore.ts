import { create } from "zustand";

export type DeliverMode = "date" | "birthday";
export type MessageType = "text" | "audio" | "video";

export interface ComposeState {
  deliverMode: DeliverMode;
  deliverAt: string | null;
  birthdayDay: number | null;
  birthdayMonth: number | null;
  timezone: string;
  messageType: MessageType;
  guidedMode: boolean;
  selectedPromptIds: string[];
  selectedPrompts: { id: string; text: string }[];
  textContent: string;
  mediaUri: string | null;
  mediaType: "audio" | "video" | null;
  durationSeconds: number;
  songUrl: string | null;
  songTitle: string | null;
  songArtist: string | null;
  editMessageId: string | null;
  set: (patch: Partial<ComposeState>) => void;
  reset: () => void;
}

const defaultState = {
  deliverMode: "date" as DeliverMode,
  deliverAt: null as string | null,
  birthdayDay: null as number | null,
  birthdayMonth: null as number | null,
  timezone: "UTC",
  messageType: "text" as MessageType,
  guidedMode: true,
  selectedPromptIds: [] as string[],
  selectedPrompts: [] as { id: string; text: string }[],
  textContent: "",
  mediaUri: null as string | null,
  mediaType: null as "audio" | "video" | null,
  durationSeconds: 0,
  songUrl: null as string | null,
  songTitle: null as string | null,
  songArtist: null as string | null,
  editMessageId: null as string | null,
};

export const useComposeStore = create<ComposeState>((set) => ({
  ...defaultState,
  set: (patch) => set((s) => ({ ...s, ...patch })),
  reset: () => set(defaultState),
}));
