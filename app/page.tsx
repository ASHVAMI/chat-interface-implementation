"use client";

import { MessagesPanel } from "@/components/messages/messages-panel";
import { ChatPanel } from "@/components/chat/chat-panel";
import { UserProfile } from "@/components/profile/user-profile";

export default function Home() {
  return (
    <div className="flex h-screen bg-background">
      {/* Left Sidebar - Messages List */}
      <MessagesPanel />
      
      {/* Main Chat Area */}
      <ChatPanel />
      
      {/* Right Sidebar - User Profile */}
      <UserProfile />
    </div>
  );
}