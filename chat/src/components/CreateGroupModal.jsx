import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function CreateGroupModal({ contacts = [], onClose, darkMode }) {
  const [groupName, setGroupName] = useState('');
  const [selectedMembers, setSelectedMembers] = useState([]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`rounded-2xl w-full max-w-md max-h-[80vh] flex flex-col ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className={`p-6 border-b flex items-center justify-between ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Create New Group</h2>
          <button onClick={onClose} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-600'}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-4 overflow-y-auto flex-1">
          <div>
            <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Group Name</label>
            <input
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none ${
                darkMode
                  ? 'bg-gray-700 text-white border-gray-600 placeholder-gray-400'
                  : 'bg-white text-gray-800 border-gray-300 placeholder-gray-500'
              }`}
              placeholder="Enter group name"
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Add Members</label>
            <div className="space-y-2">
              {contacts.map(contact => (
                <div key={contact.id} className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${
                  darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {contact.avatar}
                    </div>
                    <div>
                      <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{contact.name}</p>
                      <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{contact.status}</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={selectedMembers.includes(contact.id)}
                    onChange={() => {
                      setSelectedMembers(prev =>
                        prev.includes(contact.id)
                          ? prev.filter(id => id !== contact.id)
                          : [...prev, contact.id]
                      );
                    }}
                    className="w-5 h-5 text-orange-500 rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`p-6 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <button
            onClick={() => {
              onClose();
              setGroupName('');
              setSelectedMembers([]);
            }}
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Create Group ({selectedMembers.length} members)
          </button>
        </div>
      </div>
    </div>
  );
}
