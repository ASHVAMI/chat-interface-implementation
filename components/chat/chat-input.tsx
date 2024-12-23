"use client";

import { useState } from 'react';
import { Smile, Paperclip, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function ChatInput() {
  const [message, setMessage] = useState('');

  return (
    <div className="border-t p-4 bg-white dark:bg-gray-900">
      <div className="flex items-end space-x-2">
        <div className="flex-1">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="min-h-[80px] resize-none focus:ring-blue-500"
          />
        </div>
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" className="text-blue-500 hover:text-blue-600">
            <Smile className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-blue-500 hover:text-blue-600">
            <Paperclip className="h-5 w-5" />
          </Button>
          <Button className="bg-blue-500 hover:bg-blue-600">
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}