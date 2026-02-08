import * as FileSystem from "expo-file-system";
import { supabase } from "./supabase";

const BUCKET = "capsule-media";

function base64ToUint8Array(base64: string): Uint8Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

export async function uploadMedia(
  fileUri: string,
  userId: string,
  messageId: string,
  type: "audio" | "video"
): Promise<string> {
  const ext = type === "audio" ? "m4a" : "mp4";
  const mime = type === "audio" ? "audio/mp4" : "video/mp4";
  const timestamp = Date.now();
  const fileName = `${type}-${timestamp}.${ext}`;
  const path = `${userId}/${messageId}/${fileName}`;

  const base64 = await FileSystem.readAsStringAsync(fileUri, {
    encoding: FileSystem.EncodingType.Base64,
  });
  const body = base64ToUint8Array(base64);

  const { error } = await supabase.storage.from(BUCKET).upload(path, body, {
    contentType: mime,
    upsert: true,
  });
  if (error) throw error;
  return path;
}
