import { Link } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar.jsx'
import bee from './assets/bee.png'
import girafa from './assets/girafa.png'
import logo from './assets/logo.png'

function Sign_in() {
  return (
    <div className="site-page auth-page">
      <Navbar />
      <main className="auth-main">
        <form className="auth-card" onSubmit={(event) => event.preventDefault()}>
          <img className="auth-decoration auth-bee" src={bee} alt="" aria-hidden="true" />
          <img className="auth-decoration auth-giraffe" src={girafa} alt="" aria-hidden="true" />
          <img className="auth-logo" src={logo} alt="AltLearn" />
          <span className="section-eyebrow">VOLTAR A APRENDER</span>
          <h1>Entrar</h1>
          <p>Acesse suas atividades e continue sua descoberta.</p>

          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" placeholder="seu@email.com" autoComplete="email" />

          <label htmlFor="password">Senha</label>
          <input id="password" type="password" placeholder="Sua senha" autoComplete="current-password" />

          <button type="submit" className="primary-button auth-button">ENTRAR</button>
          <button type="button" className="auth-google">Continuar com Google</button>

          <p className="auth-footer-text">Ainda não tem uma conta? <Link to="/cadastro">Criar conta</Link></p>
        </form>
      </main>
    </div>
  )
}

export default Sign_in
