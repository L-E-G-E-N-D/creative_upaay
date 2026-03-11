import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    filter: 'All'
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.items.push(action.payload)
        },
        moveTask: (state, action) => {
            // payload: { id, status }
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
            // Remove from original position
            state.items.splice(taskIndex, 1)

            // Update status if moved to different column
            if (sourceId !== destinationId) {
                task.status = destinationId
            }

            // Re-insert at new position based on the destination tasks
            const destinationTasks = state.items.filter(t => t.status === destinationId)

            if (destinationIndex >= destinationTasks.length) {
                // Appended at the end of the destination column
                const lastTask = destinationTasks[destinationTasks.length - 1]
                const lastTaskGlobalIndex = lastTask ? state.items.findIndex(t => t.id === lastTask.id) : -1

                if (lastTaskGlobalIndex !== -1) {
                    state.items.splice(lastTaskGlobalIndex + 1, 0, task)
                } else {
                    state.items.push(task)
                }
            } else {
                // Inserted before a specific task
                const taskAtDest = destinationTasks[destinationIndex]
                const globalIndex = state.items.findIndex(t => t.id === taskAtDest.id)
                state.items.splice(globalIndex, 0, task)
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    }
})

export const { addTask, moveTask, reorderTask, setFilter } = tasksSlice.actions
export default tasksSlice.reducer
