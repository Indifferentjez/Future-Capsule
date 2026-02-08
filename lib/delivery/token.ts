import * as jose from "jose";

const SECRET = process.env.CAPSULE_OPEN_SECRET ?? process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
const ALG = "HS256";
const EXPIRY = "7d";

export async function signOpenToken(messageId: string, userId: string): Promise<string> {
  const secret = new TextEncoder().encode(SECRET);
  return jose.SignJWT({ messageId, userId })
    .setProtectedHeader({ alg: ALG })
    .setExpirationTime(EXPIRY)
    .sign(secret);
}

export async function verifyOpenToken(token: string): Promise<{ messageId: string; userId: string } | null> {
  try {
    const secret = new TextEncoder().encode(SECRET);
    const { payload } = await jose.jwtVerify(token, secret);
    const messageId = payload.messageId as string;
    const userId = payload.userId as string;
    if (!messageId || !userId) return null;
    return { messageId, userId };
  } catch {
    return null;
  }
}
