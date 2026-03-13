import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
    items: [],
    filter: 'All',
    searchQuery: '',
    activeTab: 'Tasks',
    activeProject: 'Mobile App',
    projects: [
        { id: '1', name: 'Mobile App', color: 'bg-green-500' },
        { id: '2', name: 'Website Redesign', color: 'bg-orange-500' },
        { id: '3', name: 'Design System', color: 'bg-purple-300' },
        { id: '4', name: 'Wireframes', color: 'bg-blue-400' }
    ]
}

const loadStateFromStorage = () => {
    try {
        const saved = localStorage.getItem('appState')
        if (saved) {
            const parsed = JSON.parse(saved)
            return {
                ...defaultState,
                ...parsed,
                // Ensure arrays stay arrays in case of migration mismatches
                items: Array.isArray(parsed.items) ? parsed.items : [],
                projects: Array.isArray(parsed.projects) ? parsed.projects : defaultState.projects,
                // Ensure strings stay strings
                searchQuery: parsed.searchQuery || ''
            }
        }
    } catch (e) {
        console.error('Failed to load state from local storage')
    }
    return defaultState
}

const initialState = loadStateFromStorage()

export const tasksSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.items.push({
                ...action.payload,
                comments: [],
                files: []
            })
        },
        moveTask: (state, action) => {
            const task = state.items.find(t => t.id === action.payload.id)
            if (task) {
                task.status = action.payload.status
            }
        },
        reorderTask: (state, action) => {
            const { sourceId, destinationId, sourceIndex, destinationIndex, draggableId } = action.payload
            const taskIndex = state.items.findIndex(t => t.id === draggableId)
            if (taskIndex === -1) return
            const task = state.items[taskIndex]
            state.items.splice(taskIndex, 1)

            if (sourceId !== destinationId) {
                task.status = destinationId
            }

            const destinationTasks = state.items.filter(t => t.status === destinationId)
            if (destinationIndex >= destinationTasks.length) {
                const lastTask = destinationTasks[destinationTasks.length - 1]
                const lastTaskGlobalIndex = lastTask ? state.items.findIndex(t => t.id === lastTask.id) : -1
                if (lastTaskGlobalIndex !== -1) {
                    state.items.splice(lastTaskGlobalIndex + 1, 0, task)
                } else {
                    state.items.push(task)
                }
            } else {
                const taskAtDest = destinationTasks[destinationIndex]
                const globalIndex = state.items.findIndex(t => t.id === taskAtDest.id)
                state.items.splice(globalIndex, 0, task)
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload
        },
        setActiveTab: (state, action) => {
            state.activeTab = action.payload
        },
        setActiveProject: (state, action) => {
            state.activeProject = action.payload
        },
        addProject: (state, action) => {
            state.projects.push(action.payload)
        },
        addCommentToTask: (state, action) => {
            const { taskId, text } = action.payload
            const task = state.items.find(t => t.id === taskId)
            if (task) {
                if (!task.comments) task.comments = []
                task.comments.push({ id: Date.now().toString(), text, author: 'Palak Jain' })
            }
        },
        addFileToTask: (state, action) => {
            const { taskId, fileName } = action.payload
            const task = state.items.find(t => t.id === taskId)
            if (task) {
                if (!task.files) task.files = []
                task.files.push({ id: Date.now().toString(), name: fileName })
            }
        }
    }
})

export const {
    addTask, moveTask, reorderTask, setFilter,
    setSearchQuery, setActiveTab, setActiveProject, addProject,
    addCommentToTask, addFileToTask
} = tasksSlice.actions

export default tasksSlice.reducer
