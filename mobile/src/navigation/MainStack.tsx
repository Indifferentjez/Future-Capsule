import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { InboxScreen } from "@/screens/InboxScreen";
import { DeliveryScreen } from "@/screens/composer/DeliveryScreen";
import { MessageTypeScreen } from "@/screens/composer/MessageTypeScreen";
import { GuidedToggleScreen } from "@/screens/composer/GuidedToggleScreen";
import { PromptSelectScreen } from "@/screens/composer/PromptSelectScreen";
import { TextComposeScreen } from "@/screens/composer/TextComposeScreen";
import { ReviewScreen } from "@/screens/composer/ReviewScreen";
import { VideoRecordScreen } from "@/screens/record/VideoRecordScreen";
import { AudioRecordScreen } from "@/screens/record/AudioRecordScreen";
import { MediaPreviewScreen } from "@/screens/record/MediaPreviewScreen";
import { OpenMessageScreen } from "@/screens/OpenMessageScreen";
import type { MainStackParamList } from "./types";

const Stack = createNativeStackNavigator<MainStackParamList>();

export function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Inbox" component={InboxScreen} options={{ title: "Time Capsules" }} />
      <Stack.Screen name="Delivery" component={DeliveryScreen} options={{ title: "When to deliver" }} />
      <Stack.Screen name="MessageType" component={MessageTypeScreen} options={{ title: "Message type" }} />
      <Stack.Screen name="GuidedToggle" component={GuidedToggleScreen} options={{ title: "Guided mode" }} />
      <Stack.Screen name="PromptSelect" component={PromptSelectScreen} options={{ title: "Prompts" }} />
      <Stack.Screen name="TextCompose" component={TextComposeScreen} options={{ title: "Your message" }} />
      <Stack.Screen name="Review" component={ReviewScreen} options={{ title: "Review" }} />
      <Stack.Screen name="VideoRecord" component={VideoRecordScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AudioRecord" component={AudioRecordScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MediaPreview" component={MediaPreviewScreen} options={{ title: "Preview" }} />
      <Stack.Screen name="OpenMessage" component={OpenMessageScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
