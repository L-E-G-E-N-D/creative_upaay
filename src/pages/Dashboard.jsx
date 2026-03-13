import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, reorderTask } from '../redux/tasksSlice'
import { DragDropContext } from '@hello-pangea/dnd'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Column from '../components/Column'
import AddTaskModal from '../components/AddTaskModal'
import { 
  Edit3, 
  Link2, 
  Plus, 
  Filter, 
  Calendar, 
  Users, 
  LayoutGrid, 
  Menu
} from 'lucide-react'

const Dashboard = () => {
  const { items: tasks, filter } = useSelector(state => state.tasks)
  const dispatch = useDispatch()
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalInitialStatus, setModalInitialStatus] = useState('todo')

  const handleOpenModal = (status) => {
    setModalInitialStatus(status)
    setIsModalOpen(true)
  }

  const handleAddTask = (task) => {
    dispatch(addTask(task))
  }

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result

    if (!destination) return

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) return

    dispatch(reorderTask({
      sourceId: source.droppableId,
      destinationId: destination.droppableId,
      sourceIndex: source.index,
      destinationIndex: destination.index,
      draggableId
    }))
  }

  const filteredTasks = filter === 'All' ? tasks : tasks.filter(t => t.priority === filter)
  
  const todoTasks = filteredTasks.filter(t => t.status === 'todo')
  const inProgressTasks = filteredTasks.filter(t => t.status === 'inprogress')
  const doneTasks = filteredTasks.filter(t => t.status === 'done')

  return (
    <div className="flex bg-white min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen relative md:ml-[250px] w-full max-w-[100vw]">
        <Header />
        
        <main className="px-10 py-8 flex-1 flex flex-col">
          {/* Top Title Section */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-4">
              <h1 className="text-4xl font-semibold text-[#0D062D]">Mobile App</h1>
              <div className="flex items-center space-x-2">
                <button className="w-7 h-7 flex items-center justify-center bg-purple-100 rounded text-purple-600 hover:bg-purple-200 transition-colors">
                  <Edit3 size={14} />
                </button>
                <button className="w-7 h-7 flex items-center justify-center bg-purple-100 rounded text-purple-600 hover:bg-purple-200 transition-colors">
                  <Link2 size={14} />
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button className="flex items-center space-x-1 text-purple-600 hover:text-purple-700 font-medium text-sm mr-2">
                <Plus size={16} className="bg-purple-200 rounded-sm p-0.5" />
                <span>Invite</span>
              </button>
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/150?u=1" alt="User 1" />
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/150?u=2" alt="User 2" />
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/150?u=3" alt="User 3" />
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/150?u=4" alt="User 4" />
                <div className="w-8 h-8 rounded-full border-2 border-white bg-red-100 text-red-500 font-medium text-xs flex items-center justify-center">
                  +2
                </div>
              </div>
            </div>
          </div>

          {/* Sub Header Section */}
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-3 py-1.5 border border-gray-300 rounded-md text-gray-500 text-sm hover:bg-gray-50">
                <Filter size={16} />
                <span>Filter</span>
                <span className="text-xs ml-1">∨</span>
              </button>
              <button className="flex items-center space-x-2 px-3 py-1.5 border border-gray-300 rounded-md text-gray-500 text-sm hover:bg-gray-50">
                <Calendar size={16} />
                <span>Today</span>
                <span className="text-xs ml-1">∨</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-3 py-1.5 border border-gray-300 rounded-md text-gray-500 text-sm hover:bg-gray-50">
                <Users size={16} />
                <span>Share</span>
              </button>
              <div className="h-6 w-px bg-gray-300 mx-2"></div>
              <button className="w-8 h-8 flex items-center justify-center bg-purple-600 rounded text-white hover:bg-purple-700">
                <Menu size={18} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">
                <LayoutGrid size={18} />
              </button>
            </div>
          </div>

          {/* Kanban Board */}
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="flex gap-6 overflow-x-auto pb-4 flex-1 items-start h-full">
              <Column 
                title="To Do" 
                status="todo" 
                tasks={todoTasks} 
                onAddTask={handleOpenModal} 
                colorClass="bg-[#5030E5]"
                showAddButton={true}
              />
              <Column 
                title="On Progress" 
                status="inprogress" 
                tasks={inProgressTasks} 
                onAddTask={handleOpenModal} 
                colorClass="bg-[#FFA500]"
                showAddButton={false}
              />
              <Column 
                title="Done" 
                status="done" 
                tasks={doneTasks} 
                onAddTask={handleOpenModal} 
                colorClass="bg-[#8BC48A]"
                showAddButton={false}
              />
            </div>
          </DragDropContext>
        </main>
      </div>

      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddTask}
        initialStatus={modalInitialStatus}
      />
    </div>
  )
}

export default Dashboard
