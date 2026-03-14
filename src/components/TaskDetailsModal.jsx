import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCommentToTask, addFileToTask } from '../redux/tasksSlice'
import { MessageSquare, Paperclip, Send, File as FileIcon } from 'lucide-react'

const TaskDetailsModal = ({ isOpen, onClose, task }) => {
  const dispatch = useDispatch()
  const [commentText, setCommentText] = useState('')

  if (!isOpen || !task) return null

  const handleAddComment = (e) => {
    e.preventDefault()
    if (!commentText.trim()) return
    dispatch(addCommentToTask({ taskId: task.id, text: commentText }))
    setCommentText('')
  }

  const handleSimulateFileUpload = () => {
    const mockFileName = `Document_${Math.floor(Math.random() * 1000)}.pdf`
    dispatch(addFileToTask({ taskId: task.id, fileName: mockFileName }))
  }

  const getPriorityStyles = (priority) => {
    switch (priority) {
      case 'High': return 'bg-[#D8727D]/10 text-[#D8727D]'
      case 'Medium': return 'bg-[#FFA500]/10 text-[#FFA500]'
      case 'Low': return 'bg-[#D58D49]/10 text-[#D58D49]'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="fixed inset-0 bg-gray-900/40 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center shrink-0">
          <div className="flex items-center space-x-3">
            <span className={`text-[12px] font-medium px-2 py-1 rounded-md ${getPriorityStyles(task.priority)}`}>
              {task.priority} Priority
            </span>
            <span className="text-gray-400 text-sm capitalize bg-gray-100 px-2 py-1 rounded-md">Status: {task.status.replace('inprogress', 'In Progress').replace('todo', 'To Do')}</span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar bg-[#F5F5F5]/50">
          <div className="bg-white rounded-xl p-6 border border-gray-100 mb-6 shadow-sm">
            <h2 className="text-3xl font-semibold text-[#0D062D] mb-4">{task.title}</h2>
            <p className="text-[#787486] text-base leading-relaxed whitespace-pre-wrap">
              {task.description || 'No description provided.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex flex-col min-h-[300px]">
              <h3 className="text-lg font-semibold text-[#0D062D] mb-4 flex items-center space-x-2">
                <MessageSquare size={18} className="text-purple-500" />
                <span>Comments ({task.comments?.length || 0})</span>
              </h3>
              
              <div className="flex-1 overflow-y-auto mb-4 space-y-4 custom-scrollbar pr-2">
                {(!task.comments || task.comments.length === 0) ? (
                  <p className="text-gray-400 text-sm italic text-center mt-4">No comments yet. Be the first!</p>
                ) : (
                  task.comments.map(comment => (
                    <div key={comment.id} className="flex space-x-3">
                      <img src="https://i.pravatar.cc/150?u=palak" alt="User" className="w-8 h-8 rounded-full flex-shrink-0" />
                      <div className="bg-gray-50 rounded-lg p-3 text-sm flex-1">
                        <div className="font-semibold text-gray-800 mb-1">{comment.author}</div>
                        <div className="text-gray-600 break-words">{comment.text}</div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <form onSubmit={handleAddComment} className="flex items-center space-x-2 shrink-0">
                <input
                  type="text"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Write a comment..."
                  className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm"
                />
                <button type="submit" disabled={!commentText.trim()} className="bg-[#5030E5] text-white p-2 rounded-lg hover:bg-[#4020C5] disabled:opacity-50 disabled:cursor-not-allowed">
                  <Send size={16} />
                </button>
              </form>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex flex-col min-h-[300px]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-[#0D062D] flex items-center space-x-2">
                  <Paperclip size={18} className="text-purple-500" />
                  <span>Files ({task.files?.length || 0})</span>
                </h3>
                <button 
                  onClick={handleSimulateFileUpload}
                  className="text-xs font-medium text-purple-600 bg-purple-50 hover:bg-purple-100 px-3 py-1.5 rounded-md transition-colors"
                >
                  + Add File
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-2 custom-scrollbar">
                {(!task.files || task.files.length === 0) ? (
                  <p className="text-gray-400 text-sm italic text-center mt-4">No files attached to this task.</p>
                ) : (
                  task.files.map(file => (
                    <div key={file.id} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg border border-gray-100 hover:border-purple-200 transition-colors cursor-pointer group">
                      <div className="bg-white p-2 rounded border border-gray-200 text-red-400 group-hover:text-red-500">
                        <FileIcon size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800 truncate">{file.name}</p>
                        <p className="text-xs text-gray-400 mt-0.5">Uploaded just now</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskDetailsModal
