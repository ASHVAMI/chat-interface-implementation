"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Check } from "lucide-react";

interface ChatListItemProps {
  avatar: string;
  name: string;
  message: string;
  time: string;
  isOnline?: boolean;
  isRead?: boolean;
  isActive?: boolean;
  onClick: () => void;
}

export function ChatListItem({
  avatar,
  name,
  message,
  time,
  isOnline,
  isRead,
  isActive,
  onClick
}: ChatListItemProps) {
  return (
    <div
      onClick={onClick}
      className={`flex items-start space-x-3 p-3 rounded-lg cursor-pointer transition-colors
        ${isActive ? 'bg-blue-50 dark:bg-blue-900/20' : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'}`}
    >
      <div className="relative">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        {isOnline && (
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <p className="font-medium text-sm">{name}</p>
          <span className="text-xs text-muted-foreground">{time}</span>
        </div>
        
        <div className="flex items-center justify-between mt-1">
          <p className="text-sm text-muted-foreground truncate pr-2">{message}</p>
          {isRead && (
            <div className="flex -space-x-1">
              <Check className="h-3 w-3 text-blue-500" />
              <Check className="h-3 w-3 text-blue-500" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}