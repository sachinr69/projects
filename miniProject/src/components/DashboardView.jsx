import React from 'react';
import { MessageCircle, Users } from 'lucide-react';

const Dashboard = ({ darkMode, chats = [], contacts = [], setCurrentView, setSelectedChat }) => {
  const totalUnread = chats.filter(c => c.unread > 0).reduce((a, b) => a + b.unread, 0);

  const handleChatClick = (chat) => {
    setCurrentView('chats');
    setSelectedChat(chat);
  };

  return (
    <div className="p-6">
      <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg`}>
          <MessageCircle className="text-orange-500 mb-4" size={40} />
          <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{chats.length}</h3>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Chats</p>
        </div>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg`}>
          <Users className="text-blue-500 mb-4" size={40} />
          <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{contacts.length}</h3>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Contacts</p>
        </div>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg`}>
          <MessageCircle className="text-green-500 mb-4" size={40} />
          <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{totalUnread}</h3>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Unread Messages</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
