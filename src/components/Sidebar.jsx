import React from 'react'

const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-screen border-r border-gray-200 flex flex-col hidden md:flex fixed left-0 top-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary-blue">TaskFlow</h1>
      </div>
      <nav className="flex-1 px-4 space-y-2 mt-4">
        <a href="#" className="flex items-center space-x-3 text-primary-blue bg-blue-50 px-4 py-3 rounded-lg font-medium">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          <span>Dashboard</span>
        </a>
      </nav>
    </div>
  )
}

export default Sidebar
