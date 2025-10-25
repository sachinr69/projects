import React from 'react';
import { Search } from 'lucide-react';

const ChatList = ({ darkMode, chats, selectedChat, setSelectedChat }) => {
  return (
    <div className={`w-80 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r`}>
      {/* Search Bar */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="relative">
          <Search className={`absolute left-3 top-3 ${darkMode ? 'text-gray-400' : 'text-gray-400'}`} size={20} />
          <input 
            type="text" 
            placeholder="Search chats..." 
            className={`w-full pl-10 pr-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'}`} 
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="overflow-y-auto h-[calc(100vh-180px)]">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => setSelectedChat(chat)}
            className={`p-4 cursor-pointer border-b ${darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'} ${selectedChat?.id === chat.id ? 'bg-orange-50 dark:bg-gray-700' : ''}`}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                  {chat.avatar}
                </div>
                {chat.status === 'Online' && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h4 className={`font-semibold truncate ${darkMode ? 'text-white' : 'text-gray-800'}`}>{chat.name}</h4>
                  <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{chat.time}</span>
                </div>
                <p className={`text-sm truncate ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{chat.lastMessage}</p>
              </div>
              {chat.unread > 0 && (
                <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold">
                  {chat.unread}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;