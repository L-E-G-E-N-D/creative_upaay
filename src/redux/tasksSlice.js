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
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    }
})

export const { addTask, moveTask, setFilter } = tasksSlice.actions
export default tasksSlice.reducer
