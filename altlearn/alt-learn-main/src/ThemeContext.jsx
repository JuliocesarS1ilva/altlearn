import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('altlearn-dark-mode') === 'true'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', darkMode)
    document.body.classList.toggle('dark-mode', darkMode)
    document.documentElement.classList.toggle('light-mode', !darkMode)
    document.body.classList.toggle('light-mode', !darkMode)
    document.documentElement.style.colorScheme = darkMode ? 'dark' : 'light'
    localStorage.setItem('altlearn-dark-mode', String(darkMode))
  }, [darkMode])

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
