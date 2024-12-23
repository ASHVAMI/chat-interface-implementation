"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { format } from "date-fns";
import { MessageStatus } from "@/components/messages/message-status";

const messages = [
  {
    id: 1,
    sender: "System",
    content: "This is the very beginning of your direct message history with @Oğuz Yağız Kara",
    timestamp: new Date(),
    isSystem: true,
  },
  {
    id: 2,
    sender: "Oğuz Yağız Kara",
    content: "I keep getting 'error while creating a new pop up' for the first time setup, so I'm not able to create a pop up. My shop name is PinkSweetHeart",
    timestamp: new Date(),
    isSent: true,
    status: 'read' as const,
  },
  {
    id: 3,
    sender: "Support",
    content: "Hey! I saw you were curious about our products. My name is Alex from StoreNano, feel free to save my number and send me a text if you have any questions or concerns.",
    timestamp: new Date(),
    isReceived: true,
  },
];

export function ChatMessages() {
  return (
    <ScrollArea className="flex-1 p-4">
      <div className="space-y-6">
        {messages.map((message) => (
          <div key={message.id} className={`flex items-start gap-3 ${message.isSent ? 'justify-end' : ''}`}>
            {message.isReceived && (
              <Avatar className="w-8 h-8">
                <div className="w-full h-full rounded-full gradient-bg" />
              </Avatar>
            )}
            
            <div className={`flex flex-col ${message.isSent ? 'items-end' : 'items-start'}`}>
              {!message.isSystem && (
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium">{message.sender}</span>
                  <span className="text-xs text-muted-foreground">
                    {format(message.timestamp, 'h:mm a')}
                  </span>
                  {message.status && (
                    <MessageStatus status={message.status} />
                  )}
                </div>
              )}
              
              <div className={`message-bubble ${
                message.isSystem ? 'system' :
                message.isSent ? 'sent' : 'received'
              }`}>
                {message.content}
              </div>
            </div>

            {message.isSent && (
              <Avatar className="w-8 h-8">
                <div className="w-full h-full rounded-full gradient-bg" />
              </Avatar>
            )}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}