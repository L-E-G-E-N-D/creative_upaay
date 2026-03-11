import React from 'react'
import TaskCard from './TaskCard'
import { Plus } from 'lucide-react'
import { Droppable } from '@hello-pangea/dnd'

const Column = ({ title, status, tasks, onAddTask }) => {
  return (
    <div className="bg-gray-100 rounded-xl p-4 min-w-[320px] w-[320px] flex flex-col h-full max-h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <h2 className="font-semibold text-gray-700">{title}</h2>
          <span className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full text-xs font-medium">
            {tasks.length}
          </span>
        </div>
      </div>
      
      <Droppable droppableId={status}>
        {(provided) => (
          <div 
            className="flex-1 overflow-y-auto min-h-20 custom-scrollbar"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <button
        onClick={() => onAddTask(status)}
        className="mt-3 flex items-center justify-center space-x-2 w-full py-3 rounded-lg border-2 border-dashed border-gray-300 text-gray-500 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-colors"
      >
        <Plus size={18} />
        <span className="font-medium">Add Task</span>
      </button>
    </div>
  )
}

export default Column
