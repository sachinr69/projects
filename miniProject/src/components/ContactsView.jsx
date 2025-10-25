// ============================================
// FILE: src/components/ContactsView.jsx
// ============================================

import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { Phone } from "lucide-react";

const ContactsView = ({ darkMode, contacts = [] }) => {
  if (!Array.isArray(contacts)) contacts = [];

  return (
    <div className="p-6">
      <h2
        className={`text-3xl font-bold mb-6 ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        Contacts
      </h2>

      {contacts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className={`${
                darkMode ? "bg-gray-800" : "bg-white"
              } p-6 rounded-xl shadow-md hover:shadow-lg transition`}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-2xl">
                    {contact.avatar || contact.name?.[0] || "?"}
                  </div>
                  {contact.status === "Online" && (
                    <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                  )}
                </div>

                <div>
                  <h3
                    className={`font-semibold ${
                      darkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {contact.name || "Unnamed Contact"}
                  </h3>
                  <p
                    className={`text-sm ${
                      contact.status === "Online"
                        ? "text-green-500"
                        : "text-gray-500"
                    }`}
                  >
                    {contact.status || "Offline"}
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-2">
                <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition">
                  Message
                </button>
                <button
                  className={`px-4 py-2 rounded-lg ${
                    darkMode
                      ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  } transition`}
                >
                  <Phone size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p
          className={`text-center mt-8 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          No contacts available.
        </p>
      )}
    </div>
  );
};

export default ContactsView;
