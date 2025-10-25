// import React, { useState } from 'react';
// import { Phone, Video, MoreVertical, Paperclip, Smile, Send } from 'lucide-react';

// const ChatWindow = ({ darkMode, selectedChat, messages }) => {
//   const [message, setMessage] = useState('');

//   const handleSendMessage = () => {
//     if (message.trim()) {
//       // Add send message logic here
//       console.log('Sending:', message);
//       setMessage('');
//     }
//   };

//   return (
//     <div className="flex-1 flex flex-col">
//       {/* Chat Header */}
//       <div className={`p-4 border-b ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} flex items-center justify-between`}>
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
//             {selectedChat.avatar}
//           </div>
//           <div>
//             <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{selectedChat.name}</h3>
//             <p className={`text-sm ${selectedChat.status === 'Online' ? 'text-green-500' : 'text-gray-500'}`}>
//               {selectedChat.status}
//             </p>
//           </div>
//         </div>
//         <div className="flex gap-2">
//           <button className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}>
//             <Phone size={20} />
//           </button>
//           <button className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}>
//             <Video size={20} />
//           </button>
//           <button className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}>
//             <MoreVertical size={20} />
//           </button>
//         </div>
//       </div>

//       {/* Messages Area */}
//       <div className={`flex-1 overflow-y-auto p-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
//         {messages.map((msg) => (
//           <div key={msg.id} className={`mb-4 flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
//             <div className={`max-w-xs lg:max-w-md ${msg.sender === 'me' ? 'bg-orange-500 text-white' : darkMode ? 'bg-gray-800 text-white' : 'bg-white'} rounded-2xl p-3 shadow`}>
//               {msg.isFile ? (
//                 <div className="flex items-center gap-2">
//                   <div className={`p-2 rounded ${msg.sender === 'me' ? 'bg-orange-600' : 'bg-gray-200'}`}>📄</div>
//                   <span>{msg.text}</span>
//                 </div>
//               ) : (
//                 <p>{msg.text}</p>
//               )}
//               <span className={`text-xs ${msg.sender === 'me' ? 'text-orange-100' : 'text-gray-500'} mt-1 block`}>
//                 {msg.time}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Message Input */}
//       <div className={`p-4 border-t ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
//         <div className="flex gap-2">
//           <button className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}>
//             <Paperclip size={20} />
//           </button>
//           <input
//             type="text"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//             placeholder="Write a message..."
//             className={`flex-1 px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'}`}
//           />
//           <button className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}>
//             <Smile size={20} />
//           </button>
//           <button 
//             onClick={handleSendMessage}
//             className="p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
//           >
//             <Send size={20} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatWindow;