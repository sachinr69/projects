import React from "react";

// const SettingsView = ({ darkMode }) => (
//   <div className="p-6">
//     <h2
//       className={`text-3xl font-bold mb-6 ${
//         darkMode ? "text-white" : "text-gray-800"
//       }`}
//     >
//       Settings
//     </h2>
//     <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
//       Configure your app preferences here.
//     </p>
    
//   </div>
// );

const SettingsView = ({ setCurrentPage, darkMode }) => (
  <div className={`h-screen flex flex-col ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
    
      <h1 className={`text-xl font-bold ml-10 mt-7 text-[28px] ${darkMode ? 'text-white' : ''}`}>Settings</h1>
    
    
    <div className="flex-1 overflow-y-auto p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl overflow-hidden`}>
          {[{
            label: 'Notifications',
            desc: 'Manage notification preferences',
            // icon: <Bell ... />
          }, {
            label: 'Privacy & Security',
            desc: 'Control your privacy settings',
            // icon: <Lock ... />
          }, {
            label: 'Appearance',
            desc: 'Customize chat appearance',
            // icon: <Palette ... />
          }, {
            label: 'Account',
            desc: 'Manage your account settings',
            // icon: <User ... />
          }].map((item, idx, arr) => (
            <div
              key={item.label}
              className={`p-4 hover:${darkMode ? 'bg-gray-700' : 'bg-gray-50'} flex items-center justify-between cursor-pointer ${idx !== arr.length - 1 ? (darkMode ? 'border-b border-gray-700' : 'border-b') : ''}`}
            >
              <div className="flex items-center gap-4">
                {/* {item.icon} */}
                <div>
                  <p className={`font-medium ${darkMode ? 'text-white' : ''}`}>{item.label}</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition">
          Logout
        </button>
      </div>
    </div>
  </div>
);

export default SettingsView;



