import React from 'react'
import {
  Home,
  MessageSquare,
  CheckSquare,
  Users,
  Settings,
  Plus,
  MoreHorizontal,
  Lightbulb,
  ChevronsLeft
} from 'lucide-react'

const Sidebar = () => {
  return (
    <div className="w-[250px] bg-white h-screen border-r border-gray-200 flex-col hidden md:flex fixed left-0 top-0">
      <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-purple-600 rounded-lg flex items-center justify-center">
            {/* Simple logo shape */}
            <div className="w-2.5 h-2.5 bg-white rounded-sm rotate-45"></div>
          </div>
          <h1 className="text-xl font-bold text-[#0D062D]">Project M.</h1>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <ChevronsLeft size={20} />
        </button>
      </div>

      <div className="p-4 flex-1 overflow-y-auto">
        <nav className="space-y-1 mb-8">
          <a href="#" className="flex items-center space-x-4 text-gray-500 hover:bg-gray-50 hover:text-gray-900 px-3 py-2.5 rounded-lg font-medium transition-colors">
            <Home size={20} className="text-gray-400" />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center space-x-4 text-gray-500 hover:bg-gray-50 hover:text-gray-900 px-3 py-2.5 rounded-lg font-medium transition-colors">
            <MessageSquare size={20} className="text-gray-400" />
            <span>Messages</span>
          </a>
          <a href="#" className="flex items-center space-x-4 text-gray-500 hover:bg-gray-50 hover:text-gray-900 px-3 py-2.5 rounded-lg font-medium transition-colors">
            <CheckSquare size={20} className="text-gray-400" />
            <span>Tasks</span>
          </a>
          <a href="#" className="flex items-center space-x-4 text-gray-500 hover:bg-gray-50 hover:text-gray-900 px-3 py-2.5 rounded-lg font-medium transition-colors">
            <Users size={20} className="text-gray-400" />
            <span>Members</span>
          </a>
          <a href="#" className="flex items-center space-x-4 text-gray-500 hover:bg-gray-50 hover:text-gray-900 px-3 py-2.5 rounded-lg font-medium transition-colors">
            <Settings size={20} className="text-gray-400" />
            <span>Settings</span>
          </a>
        </nav>

        <div className="mb-4">
          <div className="flex justify-between items-center px-3 mb-4">
            <h3 className="text-xs font-bold text-gray-500 tracking-wider">MY PROJECTS</h3>
            <button className="text-gray-400 hover:text-gray-600">
              <Plus size={16} />
            </button>
          </div>
          <div className="space-y-1">
            <a href="#" className="flex items-center justify-between bg-purple-50 text-purple-900 px-3 py-2.5 rounded-lg font-medium">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-semibold">Mobile App</span>
              </div>
              <MoreHorizontal size={16} className="text-purple-900" />
            </a>
            <a href="#" className="flex items-center justify-between text-gray-500 hover:bg-gray-50 px-3 py-2.5 rounded-lg font-medium">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                <span className="text-sm font-medium">Website Redesign</span>
              </div>
            </a>
            <a href="#" className="flex items-center justify-between text-gray-500 hover:bg-gray-50 px-3 py-2.5 rounded-lg font-medium">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                <span className="text-sm font-medium">Design System</span>
              </div>
            </a>
            <a href="#" className="flex items-center justify-between text-gray-500 hover:bg-gray-50 px-3 py-2.5 rounded-lg font-medium">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span className="text-sm font-medium">Wireframes</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="p-4 mt-auto">
        <div className="bg-gray-50 rounded-2xl p-4 relative text-center flex flex-col items-center">
          <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center absolute -top-6">
            <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center shadow-sm blur-[2px] absolute"></div>
            <Lightbulb size={20} className="text-yellow-500 relative z-10 fill-yellow-500" />
          </div>
          <h4 className="font-semibold text-sm text-[#0D062D] mt-6 mb-2">Thoughts Time</h4>
          <p className="text-xs text-gray-500 mb-3 text-center leading-relaxed">
            We don't have any notice for you, till then you can share your thoughts with your peers.
          </p>
          <button className="bg-white px-4 py-2 text-sm font-medium text-[#0D062D] rounded-lg shadow-sm border border-gray-100 hover:bg-gray-50 w-full transition-colors">
            Write a message
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
