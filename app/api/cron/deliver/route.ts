import { NextResponse } from "next/server";
import { deliverDueCapsules } from "@/lib/delivery/deliver";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function GET(req: Request) {
  try {
    const auth = req.headers.get("authorization");
    const secret = process.env.CRON_SECRET;
    if (secret && auth !== `Bearer ${secret}`) {
      return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }
    const { delivered } = await deliverDueCapsules();
    return NextResponse.json({ ok: true, delivered });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Delivery failed";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
