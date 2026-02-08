"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { deleteCapsule } from "@/app/inbox/actions";
import type { MessageStatus } from "@/types/database";
import { Pencil, Trash2, Mail, MailOpen, Clock } from "lucide-react";

type Row = {
  id: string;
  type: string;
  deliver_at: string;
  status: MessageStatus;
  created_at: string;
};

export function CapsuleTable({ messages }: { messages: Row[] }) {
  const router = useRouter();
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    setDeleteError(null);
    const res = await deleteCapsule(id);
    if (res.ok) router.refresh();
    else setDeleteError(res.error.message);
  };
  if (messages.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center text-muted-foreground">
          <p>No time capsules yet.</p>
          <Button asChild className="mt-4">
            <Link href="/compose">Create your first message</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  const statusIcon = (status: MessageStatus) => {
    if (status === "scheduled") return <Clock className="h-4 w-4" />;
    if (status === "delivered") return <Mail className="h-4 w-4" />;
    return <MailOpen className="h-4 w-4" />;
  };

  return (
    <div className="space-y-3">
      {deleteError && (
        <p className="text-sm text-red-600 bg-red-50 dark:bg-red-950/30 px-3 py-2 rounded">
          {deleteError}
        </p>
      )}
      {messages.map((m) => (
        <Card key={m.id}>
          <CardContent className="p-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground">
                {statusIcon(m.status)}
              </span>
              <div>
                <p className="font-medium capitalize">{m.type}</p>
                <p className="text-sm text-muted-foreground">
                  Deliver: {new Date(m.deliver_at).toLocaleDateString()} · Created: {new Date(m.created_at).toLocaleDateString()}
                </p>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full bg-muted capitalize">
                {m.status}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {m.status === "scheduled" && (
                <Button asChild variant="outline" size="sm">
                  <Link href={`/compose?edit=${m.id}`}>
                    <Pencil className="h-4 w-4 mr-1" /> Edit
                  </Link>
                </Button>
              )}
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-red-600 hover:text-red-700"
                onClick={() => handleDelete(m.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
