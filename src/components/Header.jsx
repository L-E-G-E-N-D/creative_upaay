import React from 'react'

const Header = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10 md:ml-64">
      <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
      
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
          CU
        </div>
      </div>
    </header>
  )
}

export default Header
