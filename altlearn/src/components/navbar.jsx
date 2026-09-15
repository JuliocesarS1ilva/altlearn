import { Link } from 'react-router-dom'
import { useTheme } from '../ThemeContext.jsx'
import logo from '../assets/logo.png'

function Navbar() {
  const { darkMode, setDarkMode, highContrast, setHighContrast } = useTheme()

  return (
    <header className="site-navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand" aria-label="AltLearn - início">
          <span className="brand-name">AltLearn</span>
        </Link>

        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#atividades">Jogos</a>
          <a href="#como-funciona">Como funciona</a>
          <Link to="/sobre">Sobre nós</Link>
        </nav>

        <div className="navbar-actions">
          <label className="theme-switch" title={darkMode ? 'Desativar modo escuro' : 'Ativar modo escuro'}>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={(event) => setDarkMode(event.target.checked)}
              aria-label="Ativar ou desativar modo escuro"
            />
            <span className="theme-slider">
              <span className="theme-icon">{darkMode ? '☾' : '☀'}</span>
            </span>
          </label>

          <label
            className="contrast-switch"
            title={highContrast ? 'Desativar alto contraste' : 'Ativar alto contraste'}
          >
            <input
              type="checkbox"
              checked={highContrast}
              onChange={(event) => setHighContrast(event.target.checked)}
              aria-label="Ativar ou desativar modo de alto contraste"
            />
            <span className="contrast-slider">
              <span className="contrast-icon" aria-hidden="true">◐</span>
            </span>
          </label>

          <Link to="/login" className="avatar-link" aria-label="Entrar">
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
