"use client";

import { format } from "date-fns";

export function formatMessageTime(date: Date): string {
  return format(date, 'HH:mm');
}

export function formatLastSeen(date: Date): string {
  return format(date, "d MMM, yyyy");
}