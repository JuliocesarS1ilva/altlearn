import './App.css'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import Lmain from './components/lmain.jsx'
import Rmain from './components/rmain.jsx'
import Card from './components/card.jsx'
import Carousel from './components/carousel.jsx'

import astronaut from './assets/astronaut.png'
import lunar from './assets/lunar.png'
import clouds from './assets/clouds.png'
import readguy from './assets/readguy.png'
import letras from './assets/letras.png'
import numeros from './assets/numeros.png'
import formas from './assets/formas.png'

function App() {
  const activities = [
    {
      id: 1,
      title: 'Letras',
      description: 'Reconheça letras, forme palavras e pratique a leitura.',
      image: letras,
      subject: 'Português',
    },
    {
      id: 2,
      title: 'Números',
      description: 'Conte objetos, compare quantidades e descubra os números.',
      image: numeros,
      subject: 'Matemática',
    },
    {
      id: 3,
      title: 'Formas',
      description: 'Explore formas, cores e pequenos desafios de atenção.',
      image: formas,
      subject: 'Descobertas',
    },
  ]

  return (
    <div className="site-page">
      <Navbar />

      <main>
        <Lmain
          eyebrow="ALTLEARN"
          title="Toda descoberta começa com um pequeno passo."
          description="Atividades visuais e jogos interativos para praticar leitura, matemática e novas habilidades com curiosidade e autonomia."
          image={astronaut}
          imageAlt="Ilustração de uma criança explorando o espaço"
          sectionClass="section-hero"
          buttonText="Começar a aprender"
          buttonHref="#atividades"
        />

        <Carousel />

        <Rmain
          eyebrow="APRENDER NO SEU RITMO"
          title="Seu ritmo também é um jeito de aprender."
          description="A AltLearn transforma os conteúdos do 1º e 2º ano em experiências curtas para praticar, tentar de novo e reconhecer cada conquista."
          image={lunar}
          imageAlt="Ilustração de uma lua com estrelas"
          sectionClass="section-blue"
        />

        <Card items={activities} />

        <Lmain
          eyebrow="PEQUENOS PASSOS"
          title="Um desafio de cada vez."
          description="Escolha uma atividade, experimente uma solução e avance quando se sentir pronto. Aprender também pode ser calmo."
          image={clouds}
          imageAlt="Ilustração de nuvens"
          sectionClass="section-lavender"
          reverse
        />

        <Rmain
          eyebrow="LEITURA E ATENÇÃO"
          title="Leia, jogue e descubra."
          description="Histórias curtas, desafios visuais e atividades interativas transformam o estudo em uma experiência mais próxima, leve e significativa."
          image={readguy}
          imageAlt="Ilustração de uma criança lendo"
          sectionClass="section-dark"
        />
      </main>

      <Footer />
    </div>
  )
}

export default App
