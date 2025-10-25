import React from "react";

export default function ContactCard({ contact, onSelect, darkMode }) {
  return (
    <div
      onClick={() => onSelect(contact)}
      className={`flex items-center gap-3 px-4 py-3 cursor-pointer border-b ${
        darkMode ? "hover:bg-gray-700 border-gray-700" : "hover:bg-gray-50 border-gray-200"
      }`}
    >
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
          {contact.avatar || contact.name.charAt(0)}
        </div>
        {contact.status === "online" && (
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        )}
      </div>

      <div>
        <h3 className={`font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>
          {contact.name}
        </h3>
        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          {contact.status === "online" ? "Online" : "Offline"}
        </p>
      </div>
    </div>
  );
}
