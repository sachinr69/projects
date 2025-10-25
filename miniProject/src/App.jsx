import React, { useState, useEffect} from "react";
import LoginForm from "./components/loginForm";
import Sidebar from "./components/Sidebar";
import DashboardView from "./components/DashboardView";
// import ChatList from "./components/ChatList";
import ChatsView from "./components/ChatsView";
import ContactsView from "./components/ContactsView";
import AccountView from "./components/AccountView";
import SettingsView from "./components/SettingsView";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState("dashboard");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

   useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  if (!isAuthenticated) {
    return <LoginForm setIsAuthenticated={setIsAuthenticated} darkMode={darkMode} setDarkMode={setDarkMode} />;
  }

  const contacts = [
    { id: 1, name: "Sachin", avatar: "A", status: "Online" },
    { id: 2, name: "Arjun", avatar: "R", status: "Offline" },
    { id: 3, name: "Toorendar", avatar: "T", status: "Online" },
  ];

  const chats = [
    { id: 1, name: "Sachin", lastMessage: "Hey! How are you?" },
    { id: 2, name: "Arjun", lastMessage: "Let’s meet tomorrow." },
  ];

  const user = { name: "Sachin Nayak", email: "sachin@example.com" };

  return (
    <div
      className={`flex min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      
      <Sidebar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        currentView={currentView}
        setCurrentView={setCurrentView}
        setIsAuthenticated={setIsAuthenticated}
      />

      <main className="flex-1 overflow-y-auto">
        {currentView === "dashboard" && <DashboardView darkMode={darkMode} />}
        {currentView === "chats" && <ChatsView darkMode={darkMode} chats={chats} />}
        {currentView === "contacts" && (
          <ContactsView darkMode={darkMode} contacts={contacts} />
        )}
        {currentView === "account" && (
          <AccountView darkMode={darkMode} user={user} />
        )}
        {currentView === "settings" && <SettingsView darkMode={darkMode} />}
      </main>
    </div>
  );
};

export default App;
