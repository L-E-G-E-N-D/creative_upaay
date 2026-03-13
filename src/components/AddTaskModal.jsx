import React, { useState } from 'react'

const AddTaskModal = ({ isOpen, onClose, onSubmit, initialStatus }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('Medium')
  const [status, setStatus] = useState(initialStatus || 'todo')

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    
    onSubmit({
      id: Date.now().toString(),
      title,
      description,
      priority,
      status
    })
    
    setTitle('')
    setDescription('')
    setPriority('Medium')
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-gray-900/40 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-[#0D062D]">Create New Task</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-[#787486] mb-1.5">Task Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-colors"
                placeholder="Enter task title"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#787486] mb-1.5">Description (Optional)</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white resize-none h-24 transition-colors"
                placeholder="Add some details..."
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#787486] mb-1.5">Current Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white"
                >
                  <option value="todo">To Do</option>
                  <option value="inprogress">In Progress</option>
                  <option value="done">Done</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#787486] mb-1.5">Priority</label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col space-y-3">
            <button
              type="submit"
              className="w-full py-2.5 bg-[#5030E5] text-white font-medium rounded-lg hover:bg-[#4020C5] transition-colors"
            >
              Save Task
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 text-[#787486] font-medium hover:bg-gray-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTaskModal
