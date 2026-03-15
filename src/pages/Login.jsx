import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, clearError } from '../redux/authSlice'
import { useNavigate, Link } from 'react-router-dom'
import { LayoutGrid } from 'lucide-react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, error, token } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(clearError())
    if (token) navigate('/dashboard')
  }, [dispatch, token, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login({ email, password }))
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-10 max-w-md w-full shadow-lg">
        <div className="flex items-center space-x-2 mb-8 justify-center">
          <div className="flex">
             <div className="w-4 h-4 rounded-full bg-purple-600 mr-1"></div>
             <div className="w-4 h-4 rounded-full bg-[#FFA500] mr-1"></div>
             <div className="w-4 h-4 rounded-full bg-red-400"></div>
          </div>
          <span className="font-bold text-2xl text-[#0D062D]">Creative Upaay</span>
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Welcome Back</h2>
        
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all font-medium"
              placeholder="hello@creativeupaay.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all font-medium"
              placeholder="••••••••"
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3 bg-[#5030E5] text-white rounded-xl font-medium hover:bg-[#4020C5] transition-colors disabled:opacity-70 mt-4 shadow-md"
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-8">
          Don't have an account? <Link to="/signup" className="text-[#5030E5] font-semibold hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
