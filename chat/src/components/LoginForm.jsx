// src/components/LoginForm.jsx
import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const LoginForm = ({ setIsAuthenticated, darkMode, setDarkMode }) => {
  const [isSignup, setIsSignup] = useState(false); // toggle between login/signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // optional simple validation
    if (!email.trim() || !password.trim()) {
      alert('Please enter email and password');
      return;
    }
    setIsAuthenticated(true); // mock auth success
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      alert('Please enter email and password');
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    alert('Account created! You can now log in.');
    setIsSignup(false); // switch back to sign in
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-orange-400 to-blue-500'
      }`}
    >
      <div
        className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl w-full max-w-md`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            {isSignup ? 'Create Account' : 'Welcome Back'}
          </h2>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            type="button"
          >
            {darkMode ? <Sun className="text-yellow-400" size={24} /> : <Moon className="text-gray-600" size={24} />}
          </button>
        </div>

        {/* Form */}
        <form onSubmit={isSignup ? handleSignup : handleLogin}>
          <div className="mb-4">
            <label className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-3 rounded-lg border ${
                darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300'
              }`}
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-4">
            <label className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-3 rounded-lg border ${
                darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300'
              }`}
              placeholder="••••••••"
            />
          </div>

          {isSignup && (
            <div className="mb-6">
              <label className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`w-full p-3 rounded-lg border ${
                  darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300'
                }`}
                placeholder="••••••••"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg font-semibold transition"
          >
            {isSignup ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        {/* Switch mode */}
        <p className={`text-center mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {isSignup ? (
            <>
              Already have an account?{' '}
              <span className="text-orange-500 cursor-pointer hover:underline" onClick={() => setIsSignup(false)}>
                Sign in
              </span>
            </>
          ) : (
            <>
              Don’t have an account?{' '}
              <span className="text-orange-500 cursor-pointer hover:underline" onClick={() => setIsSignup(true)}>
                Sign up
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
