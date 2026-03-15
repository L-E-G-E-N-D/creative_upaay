import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './tasksSlice'
import authReducer from './authSlice'

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        auth: authReducer
    },
})

store.subscribe(() => {
    try {
        const appState = store.getState().tasks
        localStorage.setItem('appState', JSON.stringify(appState))
    } catch (e) {
        console.error('Failed to save state to local storage')
    }
})
