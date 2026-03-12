import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, reorderTask } from '../redux/tasksSlice'
import { DragDropContext } from '@hello-pangea/dnd'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Column from '../components/Column'
import AddTaskModal from '../components/AddTaskModal'

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
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen relative md:ml-64">
        <Header />
        
        <main className="p-6 flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Projects</h1>
          </div>

          <DragDropContext onDragEnd={onDragEnd}>
            <div className="flex gap-6 overflow-x-auto pb-4 h-[calc(100vh-140px)] items-start">
              <Column title="To Do" status="todo" tasks={todoTasks} onAddTask={handleOpenModal} />
              <Column title="In Progress" status="inprogress" tasks={inProgressTasks} onAddTask={handleOpenModal} />
              <Column title="Done" status="done" tasks={doneTasks} onAddTask={handleOpenModal} />
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
