"use client";

import { Check } from "lucide-react";

interface MessageStatusProps {
  status: 'sent' | 'delivered' | 'read';
}

export function MessageStatus({ status }: MessageStatusProps) {
  if (status === 'sent') {
    return <Check className="h-4 w-4 text-gray-400" />;
  }

  return (
    <div className="flex -space-x-1">
      <Check className="h-4 w-4 text-blue-500" />
      <Check className="h-4 w-4 text-blue-500" />
    </div>
  );
}