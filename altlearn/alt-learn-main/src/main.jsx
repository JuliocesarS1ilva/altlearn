import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Aboutus from './Aboutus.jsx'
import Sign_in from './sign_in.jsx'
import Sign_up from './sign_up.jsx'
import { ThemeProvider } from './ThemeContext.jsx'
import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/sobre" element={<Aboutus />} />
          <Route path="/login" element={<Sign_in />} />
          <Route path="/cadastro" element={<Sign_up />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
