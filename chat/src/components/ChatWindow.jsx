import React, { useState } from 'react';
import { Video, Phone, Search, MoreVertical, Paperclip, Smile, Send, MessageCircle, Download } from 'lucide-react';
import MessageBubble from './MessageBubble';

export default function ChatWindow({ selectedChat, darkMode }) {
  const [message, setMessage] = useState('');
  const messages = [
    { id: 1, sender: 'Elvira Lang', text: 'Hi 👋, How are ya ?', time: '10:25 AM', isMine: false },
    { id: 2, sender: 'Me', text: 'Hi 👋 Panda, not bad, u ?', time: 'Today', isMine: true },
    { id: 3, sender: 'Me', text: 'Can you send me an abstract image?', time: 'Today', isMine: true },
    { id: 4, sender: 'Elvira Lang', text: 'Ya sure, sending you a pic', time: '10:30 AM', isMine: false },
    { id: 5, sender: 'Elvira Lang', text: 'Here You Go', time: '10:31 AM', isMine: false, image: true },
    { id: 6, sender: 'Me', text: 'Can you please send this in file format?', time: 'Today', isMine: true },
    { id: 7, sender: 'Elvira Lang', text: '', time: '10:32 AM', isMine: false, file: 'Abstract.png' },
  ];

  const handleSend = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  if (!selectedChat) {
    return (
      <div className={`flex-1 flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="text-center">
          <div className={`w-32 h-32 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full flex items-center justify-center mx-auto mb-4`}>
            <MessageCircle className={`w-16 h-16 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
          </div>
          <h2 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Select a chat</h2>
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Choose a conversation to start messaging</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex-1 flex flex-col ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className={`px-6 py-4 border-b flex items-center justify-between ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">{selectedChat.avatar}</div>
            {selectedChat.status === 'online' && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>}
          </div>
          <div>
            <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{selectedChat.name}</h3>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Online</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'}`}><Video className="w-5 h-5" /></button>
          <button className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'}`}><Phone className="w-5 h-5" /></button>
          <button className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'}`}><Search className="w-5 h-5" /></button>
          <button className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'}`}><MoreVertical className="w-5 h-5" /></button>
        </div>
      </div>

      <div className={`flex-1 overflow-y-auto p-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.map((msg, index) => (
            <MessageBubble key={msg.id} message={msg} darkMode={darkMode} showDate={index === 1} />
          ))}
        </div>
      </div>

      <div className={`px-6 py-4 border-t ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <button className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'}`}><Paperclip className="w-5 h-5" /></button>

          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Write a message..."
            className={`flex-1 px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-500 ${
              darkMode
                ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600'
                : 'bg-white text-gray-800 placeholder-gray-500 border-gray-300'
            }`}
          />

          <button className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'}`}><Smile className="w-5 h-5" /></button>

          <button
            onClick={handleSend}
            className="p-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
