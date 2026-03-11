import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask } from '../redux/tasksSlice'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Column from '../components/Column'
import AddTaskModal from '../components/AddTaskModal'

const Dashboard = () => {
  const tasks = useSelector(state => state.tasks.items)
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

  const todoTasks = tasks.filter(t => t.status === 'todo')
  const inProgressTasks = tasks.filter(t => t.status === 'inprogress')
  const doneTasks = tasks.filter(t => t.status === 'done')

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen relative md:ml-64">
        <Header />
        
        <main className="p-6 flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Projects</h1>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 h-[calc(100vh-140px)] items-start">
            <Column title="To Do" status="todo" tasks={todoTasks} onAddTask={handleOpenModal} />
            <Column title="In Progress" status="inprogress" tasks={inProgressTasks} onAddTask={handleOpenModal} />
            <Column title="Done" status="done" tasks={doneTasks} onAddTask={handleOpenModal} />
          </div>
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
