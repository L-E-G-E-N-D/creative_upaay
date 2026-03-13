import React from 'react'
import { MoreHorizontal, MessageSquare, Folder } from 'lucide-react'
import { Draggable } from '@hello-pangea/dnd'

const TaskCard = ({ task, index }) => {
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

  // To simulate different user images or amounts of files/comments based on ID hash
  const getSimulatedData = (id) => {
    const num = parseInt(id.slice(0, 8), 16) || index; // Pseudo random based on ID
    return {
      comments: (num % 15) + 2,
      files: (num % 5),
      users: (num % 3) + 1
    }
  }

  const simData = getSimulatedData(task.id);
  const displayPriority = task.status === 'done' ? 'Completed' : task.priority;

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div 
          className={`bg-white p-5 rounded-xl mb-4 cursor-grab ${snapshot.isDragging ? 'shadow-xl rotate-2 ring-1 ring-purple-200' : 'shadow-sm'}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="flex justify-between items-center mb-3">
            <span className={`text-[12px] font-medium px-2 py-1 rounded-md ${getPriorityStyles(displayPriority)}`}>
              {displayPriority}
            </span>
            <button className="text-gray-400 hover:text-gray-900 leading-none h-6 pb-2">
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
              {[...Array(simData.users)].map((_, i) => (
                <img key={i} className="w-6 h-6 rounded-full border-2 border-white object-cover" src={`https://i.pravatar.cc/150?u=${task.id}${i}`} alt="Assignee" />
              ))}
            </div>
            
            <div className="flex items-center space-x-3 text-[#787486] text-xs font-medium tracking-wide">
              <div className="flex items-center space-x-1 hover:text-gray-900 cursor-pointer transition-colors">
                <MessageSquare size={14} className="opacity-70" />
                <span>{simData.comments} comments</span>
              </div>
              <div className="flex items-center space-x-1 hover:text-gray-900 cursor-pointer transition-colors">
                <Folder size={14} className="opacity-70" />
                <span>{simData.files} files</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default TaskCard
