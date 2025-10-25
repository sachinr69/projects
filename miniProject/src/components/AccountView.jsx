import React from "react";

const AccountView = ({ darkMode, user }) => (
  <div className="p-6">
    <h2
      className={`text-3xl font-bold mb-6 ${
        darkMode ? "text-white" : "text-gray-800"
      }`}
    >
      Account
    </h2>
    <div  class="flex items-center justify-center" >
      <div
      className={`p-6 rounded-xl shadow-md mb-5 w-150 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}>
        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-4">
              {/* {user?.avatar} */} 
              SN
            </div>
           <h2 className="flex items-center justify-center text-2xl font-bold mb-1 mt-8">{user?.name}</h2>
            <p className="flex items-center justify-center text-gray-600">{user?.email}</p>
            <div class="flex justify-center">
            <button className="flex items-center justify-center mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">   
              Edit Profile
            </button>
          </div>
      </div>
    </div>

    <div class="flex items-center justify-center">
    <div
      className={`p-6 rounded-xl shadow-md w-150 h-70 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <h1 className={`font-bold  mt-1 mb-3 text-[22px] ${darkMode ? 'text-white' : ''}`}>Account Information</h1>
      <p className={`mb-3`}><strong>Name:</strong> {user?.name || "User"}</p>
      <p className={`mb-3`}><strong>Email:</strong> {user?.email || "user@email.com"}</p>
      <p className={`mb-3`}><strong>Phone no.:</strong> {"+1 234 567 8900"}</p>
       <p><strong>Bio:</strong> {"Available to chat"}</p>

    </div>
  </div>
  </div>
);

export default AccountView;
