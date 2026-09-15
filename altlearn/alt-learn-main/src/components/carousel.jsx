import { useRef, useState } from 'react'
import feliz from '../assets/feliz.png'
import livro from '../assets/livro.png'
import aprendendo from '../assets/aprendendo.png'

function Carousel() {
  const scrollRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      title: 'Comece por uma atividade.',
      text: 'Escolha um desafio curto para praticar leitura, números ou atenção.',
      image: feliz,
      label: 'Primeiro passo',
    },
    {
      title: 'Aprenda fazendo.',
      text: 'As atividades apresentam os conteúdos de forma visual, simples e interativa.',
      image: livro,
      label: 'Aprender brincando',
    },
    {
      title: 'Continue quando quiser.',
      text: 'Não existe pressa: você pode repetir uma atividade e avançar no seu ritmo.',
      image: aprendendo,
      label: 'Sem pressão',
    },
  ]

  function scroll(direction) {
    if (!scrollRef.current) return
    const nextSlide = Math.max(0, Math.min(slides.length - 1, activeSlide + direction))

    scrollRef.current.scrollBy({
      left: (nextSlide - activeSlide) * scrollRef.current.clientWidth,
      behavior: 'smooth',
    })
    setActiveSlide(nextSlide)
  }

  function goToSlide(index) {
    if (!scrollRef.current || index === activeSlide) return
    scrollRef.current.scrollTo({
      left: index * scrollRef.current.clientWidth,
      behavior: 'smooth',
    })
    setActiveSlide(index)
  }

  return (
    <section className="feature-carousel" aria-label="Como a AltLearn funciona">
      <div className="carousel-track" ref={scrollRef}>
        {slides.map((slide) => (
          <article className="feature-slide" key={slide.title}>
            <div className="feature-image">
              <img src={slide.image} alt="" />
            </div>
            <div className="feature-copy">
              <span>{slide.label}</span>
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="carousel-footer">
        <div className="carousel-status" aria-label={`Slide ${activeSlide + 1} de ${slides.length}`}>
          {slides.map((slide, index) => (
            <button
              className={index === activeSlide ? 'is-active' : ''}
              key={slide.title}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para o slide ${index + 1}`}
              aria-current={index === activeSlide ? 'true' : undefined}
            />
          ))}
        </div>
        <div className="carousel-controls">
          <button onClick={() => scroll(-1)} disabled={activeSlide === 0} aria-label="Slide anterior">←</button>
          <button onClick={() => scroll(1)} disabled={activeSlide === slides.length - 1} aria-label="Próximo slide">→</button>
        </div>
      </div>
    </section>
  )
}

export default Carousel
