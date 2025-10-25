import React, { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";        
import LeftSidebar from "./components/LeftSidebar";
import ChatListPanel from "./components/ChatListPanel";
import ChatWindow from "./components/ChatWindow";
import ContactList from "./components/ContactList";
import ProfilePage from "./components/ProfilePage";
import SettingsPage from "./components/SettingsPage";
import CreateGroupModal from "./components/CreateGroupModal";

import ChatItem from "./components/ChatItem";
import ContactCard from "./components/ContactCard";
import MessageBubble from "./components/MessageBubble";
import SettingsItem from "./components/SettingsItem";

export default function App() {
  const [activeView, setActiveView] = useState("chats");
  const [selectedChat, setSelectedChat] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [showGroupModal, setShowGroupModal] = useState(false);
  const [showContactDropdown, setShowContactDropdown] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  if (!isAuthenticated) {
    return (
      <LoginForm
        setIsAuthenticated={setIsAuthenticated}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    );
  }

  const currentUser = {
    id: 1,
    name: "Sachin",
    email: "sachin@example.com",
    avatar: "SN",
    status: "online",
  };

  const chats = [
    { id: 1, name: "Alice", lastMessage: "Hey there!", time: "10:30 AM", unread: 2, status: "online" },
    { id: 2, name: "Bob", lastMessage: "See you soon.", time: "Yesterday", unread: 0, status: "offline" },
  ];

  const contacts = [
    { id: 1, name: "Alice", avatar: "A", status: "online" },
    { id: 2, name: "Bob", avatar: "B", status: "offline" },
    { id: 3, name: "Charlie", avatar: "C", status: "online" },
  ];

  const messages = [
    { id: 1, text: "Hey, how are you?", isMine: false, time: "10:31 AM" },
    { id: 2, text: "I'm good! You?", isMine: true, time: "10:32 AM" },
    { id: 3, text: "All good here.", isMine: false, time: "10:33 AM" },
  ];

  return (
    <div
      className={`flex h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Left Sidebar */}
      <LeftSidebar
        activeView={activeView}
        setActiveView={setActiveView}
        onViewChange={setActiveView}
        onCreateGroup={() => setShowGroupModal(true)}
        darkMode={darkMode}
        currentUser={currentUser}
        contacts={contacts}
        showContactDropdown={showContactDropdown}
        setShowContactDropdown={setShowContactDropdown}
        onSelectContact={(contact) => {
          setSelectedChat(contact);
          setActiveView("chats");
        }}
      />

      {/*Conditional Main Views */}
      {activeView === "chats" && (
        <>
          <ChatListPanel
            chats={chats}
            selectedChat={selectedChat}
            onSelectChat={setSelectedChat}
            darkMode={darkMode}
          />

          {selectedChat ? (
            <ChatWindow
              selectedChat={selectedChat}
              messages={messages}
              MessageBubble={MessageBubble}
              darkMode={darkMode}
            />
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400 text-lg">
              Select a chat to start messaging
            </div>
          )}
        </>
      )}

      {activeView === "contacts" && (
        <ContactList contacts={contacts} darkMode={darkMode} />
      )}

      {activeView === "profile" && (
        <ProfilePage currentUser={currentUser} darkMode={darkMode} />
      )}

      {activeView === "settings" && (
        <SettingsPage
          darkMode={darkMode}
          onToggleDarkMode={() => setDarkMode(!darkMode)} 
        />
      )}

      {/* Group Creation Modal */}
      {showGroupModal && (
        <CreateGroupModal
          contacts={contacts}
          darkMode={darkMode}
          onClose={() => setShowGroupModal(false)}
        />
      )}
    </div>
  );
}
