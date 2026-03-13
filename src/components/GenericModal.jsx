import React from 'react'
import { Users, UserPlus } from 'lucide-react'

const GenericModal = ({ isOpen, onClose, title, actionType }) => {
  if (!isOpen) return null

  const getIcon = () => actionType === 'invite' ? <UserPlus size={48} className="text-purple-500 mb-4" /> : <Users size={48} className="text-purple-500 mb-4" />
  
  const getMessage = () => actionType === 'invite' 
    ? 'Invite members to join this project by entering their email address.'
    : 'Share this project link with external collaborators.'

  return (
    <div className="fixed inset-0 bg-gray-900/40 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-[#0D062D] capitalize">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
        </div>
        
        <div className="p-8 flex flex-col items-center text-center">
          {getIcon()}
          <h3 className="text-lg font-medium text-gray-900 mb-2">Coming Soon!</h3>
          <p className="text-[#787486] text-sm mb-6 max-w-xs leading-relaxed">
            {getMessage()} This feature is currently under development.
          </p>
          
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-[#5030E5] text-white font-medium rounded-lg hover:bg-[#4020C5] transition-colors"
          >
            Okay, got it
          </button>
        </div>
      </div>
    </div>
  )
}

export default GenericModal
