export const MOCK_DATE = new Date('2024-01-15T19:28:00');

import { User, Chat } from '../types/chat';

export const users: User[] = [
  {
    id: '1',
    name: 'Oğuz Yağız Kara',
    email: 'oguzyagiz@gmail.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    online: true,
  },
  // ... rest of the users
];

export const chats: Chat[] = [
  {
    id: '1',
    participants: [users[0]],
    lastMessage: {
      id: '1',
      content: 'I keep getting error while creating a new pop up',
      senderId: users[0].id,
      timestamp: MOCK_DATE,
    },
    unreadCount: 2,
  },
  // ... rest of the chats with MOCK_DATE
];