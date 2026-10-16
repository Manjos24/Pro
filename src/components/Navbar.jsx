import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [currentTime, setCurrentTime] = useState(() => new Date())
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const timerId = window.setInterval(() => setCurrentTime(new Date()), 1000)
    return () => window.clearInterval(timerId)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = isDarkMode ? 'dark' : 'light'
  }, [isDarkMode])

  return (
    <nav className="topbar">
      <Link className="brand" to="/">MMA.</Link>
      <div className="topbar-actions">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="page-controls">
          <time className="live-clock" dateTime={currentTime.toISOString()}>
            {currentTime.toLocaleTimeString()}
          </time>
          <button
            className="theme-toggle"
            type="button"
            aria-pressed={!isDarkMode}
            onClick={() => setIsDarkMode((previousMode) => !previousMode)}
          >
            Switch to {isDarkMode ? 'light' : 'dark'} mode
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
