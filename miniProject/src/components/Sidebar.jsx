import React from 'react';
import { 
  MessageCircle, 
  Users, 
  Settings, 
  User, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  LogOut 
} from 'lucide-react';

const Sidebar = ({ 
  darkMode, 
  setDarkMode, 
  currentView, 
  setCurrentView, 
  sidebarOpen, 
  setSidebarOpen, 
  setIsAuthenticated,
  setSelectedChat 
}) => {

  const navItems = [
    { icon: MessageCircle, label: 'Dashboard', view: 'dashboard' },
    { icon: MessageCircle, label: 'Chats', view: 'chats' },
    { icon: Users, label: 'Contacts', view: 'contacts' },
    { icon: User, label: 'Account', view: 'account' },
    { icon: Settings, label: 'Settings', view: 'settings' }
  ];

  const handleNavClick = (view) => {
    setCurrentView(view);
    if (setSelectedChat) setSelectedChat(null);
  };

  const handleLogout = () => {
    if (setIsAuthenticated) setIsAuthenticated(false);
  };

  return (
    <div
      className={`
        ${sidebarOpen ? 'w-64' : 'w-20'}
        ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}
        border-r transition-all duration-300 flex flex-col
      `}
    >
      {/* Sidebar Header */}
      <div className="p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
        {sidebarOpen && (
          <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            ChatApp
          </h1>
        )}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={`
            p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700
            ${darkMode ? 'text-gray-300' : 'text-gray-600'}
          `}
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      
      <nav className="flex-1 p-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.view}
              onClick={() => handleNavClick(item.view)}
              className={`
                w-full flex items-center gap-3 p-3 rounded-lg mb-2 transition-colors
                ${currentView === item.view
                  ? 'bg-orange-500 text-white'
                  : darkMode
                    ? 'text-gray-300 hover:bg-gray-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }
              `}
            >
              <Icon size={20} />
              {sidebarOpen && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`
            w-full flex items-center gap-3 p-3 rounded-lg mb-2 transition-colors
            ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}
          `}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          {sidebarOpen && <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>}
        </button>

        <button
          onClick={handleLogout}
          className={`
            w-full flex items-center gap-3 p-3 rounded-lg transition-colors
            ${darkMode ? 'text-red-400 hover:bg-gray-700' : 'text-red-600 hover:bg-gray-100'}
          `}
        >
          <LogOut size={20} />
          {sidebarOpen && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
