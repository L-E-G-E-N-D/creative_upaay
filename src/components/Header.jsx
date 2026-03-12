import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from '../redux/tasksSlice'
import { Filter } from 'lucide-react'

const Header = () => {
  const filter = useSelector(state => state.tasks.filter)
  const dispatch = useDispatch()

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10 md:ml-64">
      <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
      
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <Filter size={18} className="text-gray-500" />
          <select 
            value={filter}
            onChange={(e) => dispatch(setFilter(e.target.value))}
            className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 outline-none"
          >
            <option value="All">All Priorities</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
          CU
        </div>
      </div>
    </header>
  )
}

export default Header
