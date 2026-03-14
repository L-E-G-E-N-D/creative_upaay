import React from 'react'
import { MoreHorizontal, MessageSquare, Folder } from 'lucide-react'
import { Draggable } from '@hello-pangea/dnd'

const TaskCard = ({ task, index, onClick }) => {
  const getPriorityStyles = (priority) => {
    switch (priority) {
      case 'High': 
        return 'bg-[#D8727D]/10 text-[#D8727D]'
      case 'Medium': 
        return 'bg-[#FFA500]/10 text-[#FFA500]'
      case 'Low': 
        return 'bg-[#D58D49]/10 text-[#D58D49]'
      case 'Completed':
        return 'bg-[#83C29D]/20 text-[#68B266]'
      default: 
        return 'bg-gray-100 text-gray-700'
    }
  }

  const commentsCount = task.comments ? task.comments.length : 0
  const filesCount = task.files ? task.files.length : 0
  const displayPriority = task.status === 'done' ? 'Completed' : task.priority

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div 
          className={`bg-white p-5 rounded-xl mb-4 cursor-grab ${snapshot.isDragging ? 'shadow-xl rotate-2 ring-1 ring-purple-200' : 'shadow-sm'}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={() => onClick(task)}
        >
          <div className="flex justify-between items-center mb-3">
            <span className={`text-[12px] font-medium px-2 py-1 rounded-md ${getPriorityStyles(displayPriority)}`}>
              {displayPriority}
            </span>
            <button className="text-gray-400 hover:text-gray-900 leading-none h-6 pb-2" onClick={(e) => e.stopPropagation()}>
              <MoreHorizontal size={20} />
            </button>
          </div>
          
          <h3 className="font-semibold text-lg text-[#0D062D] mb-1">{task.title}</h3>
          
          {task.description && (
            <p className="text-[#787486] text-sm mb-4 line-clamp-2 leading-relaxed">
              {task.description}
            </p>
          )}

          <div className="flex items-center justify-between mt-6">
            <div className="flex -space-x-2">
              <img className="w-6 h-6 rounded-full border-2 border-white object-cover" src={`https://i.pravatar.cc/150?u=${task.id}1`} alt="Assignee" />
              <img className="w-6 h-6 rounded-full border-2 border-white object-cover" src={`https://i.pravatar.cc/150?u=${task.id}2`} alt="Assignee" />
            </div>
            
            <div className="flex items-center space-x-3 text-[#787486] text-xs font-medium tracking-wide">
              <div className="flex items-center space-x-1 hover:text-gray-900 transition-colors">
                <MessageSquare size={14} className="opacity-70" />
                <span>{commentsCount} comments</span>
              </div>
              <div className="flex items-center space-x-1 hover:text-gray-900 transition-colors">
                <Folder size={14} className="opacity-70" />
                <span>{filesCount} files</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default TaskCard
