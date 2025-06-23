import React from 'react'

const Profile: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm flex-1 h-full flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Avatar with world background */}
        <div className="relative mb-6">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center mb-4">
            <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          </div>
          {/* Doctor image overlay */}
          <div className="absolute inset-0 w-32 h-32 rounded-full bg-white flex items-center justify-center">
            <svg className="w-24 h-24 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        </div>
        
        {/* Doctor name */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Dr. Sarah Johnson</h2>
        <p className="text-gray-600 text-lg mb-6">Cardiologist</p>
        
        {/* Buttons */}
        <div className="flex gap-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
            View Profile
          </button>
          <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-2 rounded-lg transition-colors">
            Resume
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile