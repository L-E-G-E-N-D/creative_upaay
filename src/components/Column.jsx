import React from 'react'
import TaskCard from './TaskCard'
import { Plus } from 'lucide-react'
import { Droppable } from '@hello-pangea/dnd'

const Column = ({ title, status, tasks, onAddTask, colorClass, showAddButton, onOpenTask }) => {
  return (
    <div className="bg-[#F5F5F5] rounded-2xl p-5 min-w-[340px] w-[340px] flex flex-col h-full max-h-[calc(100vh-250px)]">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${colorClass}`}></div>
          <h2 className="font-semibold text-[#0D062D] text-[16px]">{title}</h2>
          <span className="bg-[#E0E0E0] text-[#625F6D] px-2 py-0.5 rounded-full text-xs font-medium ml-2">
            {tasks.length}
          </span>
        </div>
        
        {showAddButton && (
          <button 
            onClick={() => onAddTask(status)}
            className="w-6 h-6 flex items-center justify-center bg-purple-100 text-purple-600 rounded-md hover:bg-purple-200 transition-colors"
          >
            <Plus size={16} />
          </button>
        )}
      </div>

      <div className={`h-[3px] w-full rounded-full mb-5 mt-4 ${colorClass}`}></div>
      
      <Droppable droppableId={status}>
        {(provided, snapshot) => (
          <div 
            className={`flex-1 overflow-y-auto min-h-20 custom-scrollbar rounded-xl transition-colors ${snapshot.isDraggingOver ? 'bg-gray-200/50 outline-dashed outline-2 outline-gray-300' : ''}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} onClick={onOpenTask} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

    </div>
  )
}

export default Column
