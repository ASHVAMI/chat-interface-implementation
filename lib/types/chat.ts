export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  online: boolean;
  lastSeen?: Date;
}

export interface ChatMessage {
  id: string;
  content: string;
  senderId: string;
  timestamp: Date;
  isSystem?: boolean;
}

export interface Chat {
  id: string;
  participants: User[];
  lastMessage?: ChatMessage;
  unreadCount: number;
}