import React from 'react'
import { MoreVertical } from 'lucide-react'
import { Draggable } from '@hello-pangea/dnd'

const TaskCard = ({ task, index }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-700'
      case 'Medium': return 'bg-yellow-100 text-yellow-700'
      case 'Low': return 'bg-green-100 text-green-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div 
          className="bg-white p-4 rounded-lg shadow-sm mb-3 border border-gray-100 cursor-grab hover:shadow-md transition-shadow"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="flex justify-between items-start mb-2">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getPriorityColor(task.priority)}`}>
              {task.priority}
            </span>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical size={16} />
            </button>
          </div>
          <h3 className="font-semibold text-gray-800 mb-1">{task.title}</h3>
          <p className="text-gray-500 text-sm line-clamp-2">{task.description}</p>
        </div>
      )}
    </Draggable>
  )
}

export default TaskCard
