import React from "react";

const ChatsView = ({ darkMode, chats = [] }) => (
  <div className="p-6">
    <h2
      className={`text-3xl font-bold mb-4 ${
        darkMode ? "text-white" : "text-gray-800"
      }`}
    >
      Chats
    </h2>
    {chats.length > 0 ? (
      <ul>
        {chats.map((chat) => (
          <li
            key={chat.id}
            className={`p-4 rounded-lg mb-2 ${
              darkMode
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-800"
            } shadow-sm hover:shadow-md transition`}
          >
            <strong>{chat.name}</strong>: {chat.lastMessage}
            
          </li>   
        ))}
      </ul>
      
    ) : (
      <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
        No chats yet.
      </p>
    )}
    <div className="footer">
        <input type="text" />
        
    </div>
  </div>
  
);

export default ChatsView;
