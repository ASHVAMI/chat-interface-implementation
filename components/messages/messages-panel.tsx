"use client";

import { Search, MessageSquare, UserPlus } from "lucide-react";
import { MessagesList } from "./messages-list";
import { Button } from "@/components/ui/button";

export function MessagesPanel() {
  return (
    <div className="w-80 border-r flex flex-col bg-white dark:bg-gray-900">
      <div className="p-4 border-b space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-blue-500" />
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              BlueChat
            </h2>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="text-blue-500 hover:text-blue-600">
              <UserPlus className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-blue-500 hover:text-blue-600">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white">
            Messages
          </Button>
          <Button variant="ghost" className="flex-1 text-gray-600 hover:text-blue-500">
            Segments
          </Button>
        </div>
      </div>
      <MessagesList />
    </div>
  );
}