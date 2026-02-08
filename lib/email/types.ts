export interface EmailProvider {
  sendCapsuleDelivered(to: string, openUrl: string): Promise<void>;
}
