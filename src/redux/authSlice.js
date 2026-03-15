import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { loginUser, registerUser } from '../utils/mockApi'

export const login = createAsyncThunk('auth/login', async (credentials) => {
    return await loginUser(credentials.email, credentials.password)
})

export const register = createAsyncThunk('auth/register', async (data) => {
    return await registerUser(data.email, data.password, data.name)
})

const tokenStr = localStorage.getItem('token')
const userStr = localStorage.getItem('user')

const initialState = {
    user: userStr ? JSON.parse(userStr) : null,
    token: tokenStr || null,
    loading: false,
    error: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.token = null
            state.error = null
            localStorage.removeItem('token')
            localStorage.removeItem('user')
        },
        clearError: (state) => {
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => { state.loading = true; state.error = null })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload.user
                state.token = action.payload.token
                localStorage.setItem('token', action.payload.token)
                localStorage.setItem('user', JSON.stringify(action.payload.user))
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            .addCase(register.pending, (state) => { state.loading = true; state.error = null })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload.user
                state.token = action.payload.token
                localStorage.setItem('token', action.payload.token)
                localStorage.setItem('user', JSON.stringify(action.payload.user))
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})

export const { logout, clearError } = authSlice.actions
export default authSlice.reducer
