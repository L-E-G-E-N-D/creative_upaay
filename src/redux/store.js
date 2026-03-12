import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './tasksSlice'

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
})

store.subscribe(() => {
    try {
        const tasks = store.getState().tasks.items
        localStorage.setItem('tasks', JSON.stringify(tasks))
    } catch (e) {
        console.error('Failed to save tasks to local storage')
    }
})
