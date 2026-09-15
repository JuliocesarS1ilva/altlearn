import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('altlearn-dark-mode') === 'true'
  })

  const [highContrast, setHighContrast] = useState(() => {
    return localStorage.getItem('altlearn-high-contrast') === 'true'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', darkMode)
    document.body.classList.toggle('dark-mode', darkMode)
    document.documentElement.classList.toggle('light-mode', !darkMode)
    document.body.classList.toggle('light-mode', !darkMode)
    document.documentElement.style.colorScheme = darkMode ? 'dark' : 'light'
    localStorage.setItem('altlearn-dark-mode', String(darkMode))
  }, [darkMode])

  useEffect(() => {
    document.documentElement.classList.toggle('high-contrast', highContrast)
    document.body.classList.toggle('high-contrast', highContrast)
    localStorage.setItem('altlearn-high-contrast', String(highContrast))
  }, [highContrast])

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, highContrast, setHighContrast }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
