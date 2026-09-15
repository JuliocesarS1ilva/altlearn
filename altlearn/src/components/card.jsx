import { useState } from 'react'
import NumberGame from './number_game.jsx'

function Card({ items }) {
  const [showNumberGame, setShowNumberGame] = useState(false)

  return (
    <section className="activities-section" id="atividades">
      <div className="content-container">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">ATIVIDADES</span>
            <h2>Encontre seu próximo desafio.</h2>
          </div>
          <p>Experiências rápidas para praticar, explorar e avançar todos os dias.</p>
        </div>

        <div className="activity-grid">
          {items.map((item) => (
            <article className="activity-card" key={item.id}>
              <div className="activity-image">
                <img src={item.image} alt="" />
              </div>
              <span className="activity-subject">{item.subject}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button
                type="button"
                className="card-button"
                onClick={() => item.title === 'Números' && setShowNumberGame(true)}
              >
                Vamos lá
              </button>
            </article>
          ))}
        </div>

        {showNumberGame && <NumberGame />}
      </div>
    </section>
  )
}

export default Card
