import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

// Pages
import Introduction from './pages/Introduction'
import SoapMethod from './pages/SoapMethod'
import Interactive from './pages/Interactive'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <Router basename="/bible-learning-app">
      <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
          <nav className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container-custom flex justify-between items-center">
              <h1 className="text-xl font-bold">Bible Learning for HK Students</h1>
              <div className="flex items-center space-x-4">
                <Link to="/" className="hover:underline">Introduction</Link>
                <Link to="/soap-method" className="hover:underline">SOAP Method</Link>
                <Link to="/interactive" className="hover:underline">Interactive Study</Link>
                <button 
                  onClick={toggleDarkMode} 
                  className="p-2 rounded-full bg-blue-700 hover:bg-blue-800"
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? '☀️' : '🌙'}
                </button>
              </div>
            </div>
          </nav>

          <main className="py-8">
            <div className="container-custom">
              <Routes>
                <Route path="/" element={<Introduction />} />
                <Route path="/soap-method" element={<SoapMethod />} />
                <Route path="/interactive" element={<Interactive />} />
              </Routes>
            </div>
          </main>

          <footer className="bg-gray-200 dark:bg-gray-800 p-4">
            <div className="container-custom text-center">
              <p>Created for Hong Kong EFL Secondary School Students</p>
            </div>
          </footer>
        </div>
      </div>
    </Router>
  )
}

export default App
