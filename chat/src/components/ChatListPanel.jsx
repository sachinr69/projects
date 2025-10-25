
import React, { useState } from "react";
import { Search, Plus, Archive } from "lucide-react";
import ChatItem from "./ChatItem";

export default function ChatListPanel({ chats = [], selectedChat, onSelectChat, darkMode = false }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = chats.filter(c =>
    c.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`w-96 border-r ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} flex flex-col`}>
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-3">
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Chats</h2>
          <button className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            <Plus className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          </button>
        </div>

        <div className="relative">
          <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className={`w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500 ${
              darkMode ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600' : 'bg-gray-100 text-gray-800 placeholder-gray-500 border-gray-200'
            }`}
          />
        </div>
      </div>

      <div className={`px-4 py-3 flex items-center gap-3 cursor-pointer ${darkMode ? 'hover:bg-gray-700 border-gray-700' : 'hover:bg-gray-50 border-gray-200'} border-b`}>
        <Archive className={`w-5 h-5 ${darkMode ? 'text-orange-400' : 'text-orange-500'}`} />
        <span className={`font-medium ${darkMode ? 'text-orange-400' : 'text-orange-500'}`}>Archive</span>
      </div>

      <div className="flex-1 overflow-y-auto">
        {filtered.map(chat => (
          <ChatItem
            key={chat.id}
            chat={chat}
            selected={selectedChat?.id === chat.id}
            onClick={() => onSelectChat && onSelectChat(chat)}
            darkMode={darkMode}
          />
        ))}
      </div>
    </div>
  );
}
