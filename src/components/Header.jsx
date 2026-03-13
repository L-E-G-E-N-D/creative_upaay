import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from '../redux/tasksSlice'
import { 
  Search, 
  Calendar, 
  MessageCircleQuestion, 
  Bell,
  ChevronDown
} from 'lucide-react'

const Header = () => {
  const filter = useSelector(state => state.tasks.filter)
  const dispatch = useDispatch()

  return (
    <header className="h-[88px] bg-white border-b border-gray-200 flex items-center justify-between px-10 sticky top-0 z-10 md:pl-[290px]">
      
      {/* Search Bar */}
      <div className="relative w-96 hidden md:block">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search for anything..."
          className="block w-full pl-10 pr-3 py-2.5 bg-[#F5F5F5] border-transparent rounded-lg text-sm placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 transition-colors"
        />
      </div>

      {/* Right side icons and profile */}
      <div className="flex items-center space-x-6 ml-auto">
        <div className="flex items-center space-x-5 text-gray-400">
          <button className="hover:text-gray-600">
            <Calendar size={20} />
          </button>
          <button className="hover:text-gray-600">
            <MessageCircleQuestion size={20} />
          </button>
          <button className="hover:text-gray-600 relative">
            <Bell size={20} />
            <span className="absolute top-0 right-0 block h-1.5 w-1.5 rounded-full bg-red-500 ring-2 ring-white"></span>
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-[#0D062D]">Palak Jain</p>
            <p className="text-xs text-gray-500">Rajasthan, India</p>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <img 
              className="h-10 w-10 rounded-full object-cover" 
              src="https://i.pravatar.cc/150?u=palak" 
              alt="User avatar" 
            />
            <ChevronDown size={16} className="text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
