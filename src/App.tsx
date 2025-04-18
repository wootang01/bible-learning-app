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
          <nav className="bg-blue-700 text-white p-4 shadow-md">
            <div className="container-custom flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-2xl mr-2">✝️</span>
                <h1 className="text-xl font-bold">Catholic Bible Learning <span className="text-sm">天主教聖經學習</span></h1>
              </div>
              <div className="flex items-center space-x-4">
                <Link to="/" className="hover:underline">Introduction <span className="text-xs">簡介</span></Link>
                <Link to="/soap-method" className="hover:underline">SOAP Method <span className="text-xs">方法</span></Link>
                <Link to="/interactive" className="hover:underline">Interactive <span className="text-xs">互動</span></Link>
                <button 
                  onClick={toggleDarkMode} 
                  className="p-2 rounded-full bg-blue-800 hover:bg-blue-900"
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
            <div className="container-custom">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p>Created for Hong Kong Catholic Secondary School Students</p>
                <div className="mt-2 md:mt-0 flex items-center">
                  <span className="text-sm">
                    "Faith and reason are like two wings on which the human spirit rises to the contemplation of truth." 
                    <span className="italic">- St. John Paul II</span>
                  </span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </Router>
  )
}

export default App
