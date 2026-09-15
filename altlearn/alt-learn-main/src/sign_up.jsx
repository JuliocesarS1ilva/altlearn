import { Link } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar.jsx'
import blueStar from './assets/blue_star.png'
import logo from './assets/logo.png'
import rocket from './assets/rocket.png'

function Sign_up() {
  return (
    <div className="site-page auth-page">
      <Navbar />
      <main className="auth-main">
        <form className="auth-card" onSubmit={(event) => event.preventDefault()}>
          <img className="auth-decoration auth-star" src={blueStar} alt="" aria-hidden="true" />
          <img className="auth-decoration auth-rocket" src={rocket} alt="" aria-hidden="true" />
          <img className="auth-logo" src={logo} alt="AltLearn" />
          <span className="section-eyebrow">COMEÇAR A APRENDER</span>
          <h1>Criar conta</h1>
          <p>Crie seu acesso e acompanhe cada nova descoberta.</p>

          <label htmlFor="name">Nome</label>
          <input id="name" type="text" placeholder="Seu nome" autoComplete="name" />

          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" placeholder="seu@email.com" autoComplete="email" />

          <label htmlFor="password">Senha</label>
          <input id="password" type="password" placeholder="Crie uma senha" autoComplete="new-password" />

          <label htmlFor="repeat-password">Repetir senha</label>
          <input id="repeat-password" type="password" placeholder="Repita sua senha" autoComplete="new-password" />

          <button type="submit" className="primary-button auth-button">CRIAR CONTA</button>
          <button type="button" className="auth-google">Continuar com Google</button>

          <p className="auth-footer-text">Já tem uma conta? <Link to="/login">Entrar</Link></p>
        </form>
      </main>
    </div>
  )
}

export default Sign_up
