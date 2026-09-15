import clouds from '../assets/clouds.png'
import stars from '../assets/stars.png'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-art footer-clouds" aria-hidden="true">
        <img src={clouds} alt="" />
      </div>
      <div className="footer-art footer-stars" aria-hidden="true">
        <img src={stars} alt="" />
      </div>

      <div className="footer-inner">
        <div className="footer-topline">
          <span className="footer-kicker">ALTLearn / APRENDER COM CURIOSIDADE</span>
        </div>

        <div className="footer-content">
          <div className="footer-contact">
            <h2>Contate-nos</h2>
            <p>Estamos aqui para tornar cada descoberta mais leve.</p>
            <div className="footer-contact-details">
              <span>telefone: (xx) xxxx-xxxx</span>
              <a href="mailto:contato@altlearn.com">contato@altlearn.com</a>
            </div>
          </div>

          <nav className="footer-links" aria-label="Links do rodapé">
            <a href="#atividades">Jogos</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="/sobre">Sobre nós</a>
            <a href="/login">Entrar</a>
            <a href="/cadastro">Criar conta</a>
            <a href="#atividades">Letras</a>
            <a href="#atividades">Números</a>
            <a href="#atividades">Formas</a>
          </nav>
        </div>
      </div>

      <div className="footer-bottom"><span>© 2026 AltLearn</span><span>Feito para pequenas grandes descobertas.</span></div>
    </footer>
  )
}

export default Footer
