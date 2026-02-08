import { create } from "zustand";
import type { ComposeDraft } from "@/types/database";

interface ComposeState extends ComposeDraft {
  setDraft: (draft: Partial<ComposeDraft>) => void;
  reset: () => void;
}

const initialState: ComposeDraft = {
  preset: undefined,
  deliverMode: undefined,
  deliverAt: undefined,
  birthdayDay: undefined,
  birthdayMonth: undefined,
  timezone: undefined,
  messageType: undefined,
  guidedMode: true,
  selectedPromptIds: [],
  textContent: undefined,
  mediaBlob: null,
  mediaPath: null,
  songTitle: null,
  songArtist: null,
  songUrl: null,
  editMessageId: null,
};

export const useComposeStore = create<ComposeState>((set) => ({
  ...initialState,
  setDraft: (draft) => set((state) => ({ ...state, ...draft })),
  reset: () => set(initialState),
}));
