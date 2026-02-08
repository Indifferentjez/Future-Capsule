import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { CapsuleTable } from "@/components/inbox/CapsuleTable";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function InboxPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/");

  const { data: messages } = await supabase
    .from("messages")
    .select("id, type, deliver_at, status, created_at")
    .eq("user_id", user.id)
    .order("deliver_at", { ascending: true });

  return (
    <div className="container max-w-4xl py-8 px-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Your time capsules</h1>
        <Button asChild>
          <Link href="/compose">New message</Link>
        </Button>
      </div>
      <CapsuleTable messages={messages ?? []} />
    </div>
  );
}
