import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen relative">
        <Header />
        
        <main className="p-6 md:ml-64 flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Projects</h1>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 h-[calc(100vh-140px)]">
            {/* Columns will go here */}
            <div className="bg-gray-100 rounded-xl p-4 min-w-[320px] w-[320px] flex flex-col">
              <h2 className="font-semibold text-gray-700 mb-4 flex items-center justify-between">
                <span>To Do</span>
                <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">0</span>
              </h2>
            </div>
            
            <div className="bg-gray-100 rounded-xl p-4 min-w-[320px] w-[320px] flex flex-col">
              <h2 className="font-semibold text-gray-700 mb-4 flex items-center justify-between">
                <span>In Progress</span>
                <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">0</span>
              </h2>
            </div>

            <div className="bg-gray-100 rounded-xl p-4 min-w-[320px] w-[320px] flex flex-col">
              <h2 className="font-semibold text-gray-700 mb-4 flex items-center justify-between">
                <span>Done</span>
                <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">0</span>
              </h2>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
