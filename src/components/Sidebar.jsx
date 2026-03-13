import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveTab, setActiveProject } from '../redux/tasksSlice'
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

const Sidebar = ({ onOpenAddProject }) => {
  const { activeTab, activeProject, projects } = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  const navItems = [
    { name: 'Home', icon: Home },
    { name: 'Messages', icon: MessageSquare },
    { name: 'Tasks', icon: CheckSquare },
    { name: 'Members', icon: Users },
    { name: 'Settings', icon: Settings },
  ]

  return (
    <div className="w-[250px] bg-white h-screen border-r border-gray-200 flex-col hidden md:flex fixed left-0 top-0">
      <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-purple-600 rounded-lg flex items-center justify-center">
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
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => dispatch(setActiveTab(item.name))}
              className={`w-full flex items-center space-x-4 px-3 py-2.5 rounded-lg font-medium transition-colors ${
                activeTab === item.name 
                  ? 'bg-purple-50 text-purple-900' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <item.icon size={20} className={activeTab === item.name ? 'text-purple-600' : 'text-gray-400'} />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="mb-4">
          <div className="flex justify-between items-center px-3 mb-4">
            <h3 className="text-xs font-bold text-gray-500 tracking-wider">MY PROJECTS</h3>
            <button onClick={onOpenAddProject} className="text-gray-400 hover:text-gray-600">
              <Plus size={16} />
            </button>
          </div>
          <div className="space-y-1">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => dispatch(setActiveProject(project.name))}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg font-medium transition-colors ${
                  activeProject === project.name
                    ? 'bg-purple-50 text-purple-900'
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${project.color}`}></div>
                  <span className={`text-sm ${activeProject === project.name ? 'font-semibold' : 'font-medium'}`}>
                    {project.name}
                  </span>
                </div>
                {activeProject === project.name && <MoreHorizontal size={16} className="text-purple-900" />}
              </button>
            ))}
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
