import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
 
function Signup() {
  const navigate = useNavigate()
  const { signup } = useContext(AuthContext)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [city, setCity] = useState('')
  const [region, setRegion] = useState('')
  const [country, setCountry] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
 
  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
 
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }
 
    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }
 
    setLoading(true)
 
    const result = await signup({
      email,
      password,
      fullName,
      phoneNumber,
      city,
      region,
      country
    })
 
    if (result.success) {
      navigate('/dashboard')
    } else {
      setError(result.message)
      setLoading(false)
    }
  }
 
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 font-manrope">The Precision Agency</h1>
        <p className="text-gray-600 font-inter mt-2">Create your curator account</p>
      </div>
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 font-inter mb-2">Full Name</label>
              <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Enter your full name" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 font-inter mb-2">Email Address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Enter your email" required />
            </div>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 font-inter mb-2">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Create a password (min 6 characters)" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 font-inter mb-2">Confirm Password</label>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Confirm your password" required />
            </div>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 font-inter mb-2">Phone Number</label>
              <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Your phone number" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 font-inter mb-2">City</label>
              <input type="text" value={city} onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Your city" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 font-inter mb-2">State</label>
              <input type="text" value={region} onChange={(e) => setRegion(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Your state" />
            </div>
          </div>
 
          <div>
            <label className="block text-sm font-medium text-gray-700 font-inter mb-2">Country</label>
            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="Your country" />
          </div>
 
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>
          )}
 
          <button type="submit" disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition font-manrope disabled:opacity-50 disabled:cursor-not-allowed">
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>
 
        <div className="mt-6 text-center">
          <p className="text-gray-600 font-inter">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:text-blue-700 font-semibold">Sign in</Link>
          </p>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm font-inter">© 2024 THE PRECISION AGENCY</div>
    </div>
  )
}
 
export default Signup