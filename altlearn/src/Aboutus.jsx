import './App.css'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import sun from './assets/sun.png'
import stars from './assets/stars.png'
import kids from './assets/kids.png'

function Aboutus() {
  return (
    <div className="site-page about-page">
      <Navbar />

      <main>
        <section className="about-hero">
          <div className="about-title">
            <span className="section-eyebrow">SOBRE A ALTLEARN</span>
            <h1>Aprender com curiosidade.</h1>
            <img src={sun} alt="Ilustração de um sol" />
          </div>

          <div className="about-card">
            <img className="about-stars" src={stars} alt="" />
            <p>A AltLearn é uma plataforma de aprendizagem criada para acompanhar crianças do 1º e 2º ano nos primeiros passos da vida escolar.</p>
            <p>Unimos atividades visuais, jogos e histórias curtas para que conteúdos importantes sejam praticados de um jeito simples, acolhedor e interessante.</p>
          </div>
        </section>

        <section className="proposal-section">
          <div className="proposal-inner">
            <span className="section-eyebrow">A NOSSA PROPOSTA</span>
            <h2>Aprender pode ser uma experiência próxima.</h2>
            <p className="proposal-intro">
              A criança escolhe uma atividade, experimenta uma resposta e pode tentar novamente
              sempre que precisar. Cada etapa foi pensada para transformar a prática em uma
              descoberta, sem pressa e sem medo de errar.
            </p>

            <div className="proposal-grid">
              <article className="proposal-item">
                <span className="proposal-number">01</span>
                <h3>Explorar</h3>
                <p>Atividades curtas apresentam letras, números e formas de maneira visual e convidativa.</p>
              </article>
              <article className="proposal-item">
                <span className="proposal-number">02</span>
                <h3>Praticar</h3>
                <p>Jogos e desafios permitem repetir, testar ideias e aprender com cada nova tentativa.</p>
              </article>
              <article className="proposal-item">
                <span className="proposal-number">03</span>
                <h3>Avançar</h3>
                <p>O ritmo é respeitado para que a criança reconheça suas conquistas e siga mais confiante.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="mission-section">
          <div className="mission-inner">
            <h2>Aprender com confiança.</h2>
            <div className="mission-content">
              <img src={kids} alt="Ilustração de crianças aprendendo juntas" />
              <div>
                <p>Nossa missão é tornar o começo da aprendizagem mais acolhedor, claro e estimulante. Queremos que cada criança encontre espaço para explorar, errar sem medo e avançar no próprio ritmo.</p>
                <p>Para isso, nossas metas são:</p>
                <ul>
                  <li>despertar curiosidade por meio de experiências visuais;</li>
                  <li>fortalecer a autonomia e a confiança para tentar;</li>
                  <li>tornar a prática diária mais leve e significativa.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Aboutus
