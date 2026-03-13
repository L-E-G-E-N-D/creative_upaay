import React, { useState } from 'react'

const AddProjectModal = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('')
  const [color, setColor] = useState('bg-green-500')

  if (!isOpen) return null

  const colors = [
    { name: 'Green', class: 'bg-green-500' },
    { name: 'Orange', class: 'bg-orange-500' },
    { name: 'Purple', class: 'bg-purple-500' },
    { name: 'Blue', class: 'bg-blue-500' },
    { name: 'Pink', class: 'bg-pink-500' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    
    onSubmit({
      id: Date.now().toString(),
      name,
      color
    })
    
    setName('')
    setColor('bg-green-500')
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-gray-900/40 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-[#0D062D]">Create New Project</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-[#787486] mb-1.5">Project Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-colors"
                placeholder="e.g. Website Overhaul"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#787486] mb-3">Project Color Indicator</label>
              <div className="flex items-center space-x-3">
                {colors.map(c => (
                  <button
                    key={c.class}
                    type="button"
                    onClick={() => setColor(c.class)}
                    className={`w-8 h-8 rounded-full ${c.class} ${color === c.class ? 'ring-2 ring-offset-2 ring-purple-500' : 'opacity-70 hover:opacity-100'}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col space-y-3">
            <button
              type="submit"
              className="w-full py-2.5 bg-[#5030E5] text-white font-medium rounded-lg hover:bg-[#4020C5] transition-colors"
            >
              Create Project
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

export default AddProjectModal
