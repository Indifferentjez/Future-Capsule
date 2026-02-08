import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
};

export type MainStackParamList = {
  Inbox: undefined;
  Delivery: undefined;
  MessageType: undefined;
  GuidedToggle: undefined;
  PromptSelect: undefined;
  TextCompose: undefined;
  Review: undefined;
  VideoRecord: undefined;
  AudioRecord: undefined;
  MediaPreview: { uri: string; type: "audio" | "video"; durationSeconds: number };
  OpenMessage: { messageId: string; token: string };
};

export type AuthStackProps<T extends keyof AuthStackParamList> = NativeStackScreenProps<
  AuthStackParamList,
  T
>;
export type MainStackProps<T extends keyof MainStackParamList> = NativeStackScreenProps<
  MainStackParamList,
  T
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, MainStackParamList {}
  }
}
