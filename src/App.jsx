import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'

const ProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token)
  if (!token) return <Navigate to="/login" replace />
  return children
}

const App = () => {
  const token = useSelector(state => state.auth.token)

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      {/* Redirect root to dashboard if logged in, otherwise login */}
      <Route path="/" element={<Navigate to={token ? "/dashboard" : "/login"} replace />} />
    </Routes>
  )
}

export default App
