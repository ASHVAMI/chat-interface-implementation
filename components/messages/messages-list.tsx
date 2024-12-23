"use client";

import { useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatListItem } from "./chat-list-item";

const chatList = [
  {
    id: '1',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    name: 'Oğuz Yağız Kara',
    message: 'I keep getting "error while creating a new pop up"',
    time: '5m',
    isOnline: true,
    isRead: true
  },
  {
    id: '2',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    name: 'George Klein',
    message: 'Wow, this is really epic man! Thank...',
    time: '54m',
    isOnline: true,
    isRead: true
  },
  {
    id: '3',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    name: 'Erpağ Başbağ',
    message: 'There will be changes to next week\'s...',
    time: '2h',
    isOnline: false,
    isRead: true
  }
];

export function MessagesList() {
  const [activeChat, setActiveChat] = useState(chatList[0].id);

  return (
    <ScrollArea className="flex-1">
      <div className="p-2 space-y-1">
        {chatList.map((chat) => (
          <ChatListItem
            key={chat.id}
            {...chat}
            isActive={activeChat === chat.id}
            onClick={() => setActiveChat(chat.id)}
          />
        ))}
      </div>
    </ScrollArea>
  );
}