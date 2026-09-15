import { useState } from 'react'

const rounds = [
  { sequence: ['1', '2', '?', '4'], answer: '3', choices: ['3', '5', '6'] },
  { sequence: ['2', '4', '?', '8'], answer: '6', choices: ['5', '6', '7'] },
  { sequence: ['5', '6', '7', '?'], answer: '8', choices: ['8', '9', '10'] },
  { sequence: ['10', '9', '?', '7'], answer: '8', choices: ['6', '8', '9'] },
  { sequence: ['3', '?', '5', '6'], answer: '4', choices: ['2', '4', '7'] },
]

function NumberGame() {
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState('')
  const [selectedChoice, setSelectedChoice] = useState('')
  const [dropState, setDropState] = useState('')
  const [finished, setFinished] = useState(false)
  const currentRound = rounds[round]

  function playClickSound(isCorrect = false) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext
    if (!AudioContextClass) return

    const audioContext = new AudioContextClass()
    const now = audioContext.currentTime
    const clickDuration = .028

    function createClick(startTime, volume) {
      const buffer = audioContext.createBuffer(1, audioContext.sampleRate * clickDuration, audioContext.sampleRate)
      const data = buffer.getChannelData(0)
      for (let index = 0; index < data.length; index += 1) {
        data[index] = (Math.random() * 2 - 1) * (1 - index / data.length)
      }

      const source = audioContext.createBufferSource()
      const filter = audioContext.createBiquadFilter()
      const gain = audioContext.createGain()
      source.buffer = buffer
      filter.type = 'highpass'
      filter.frequency.setValueAtTime(1800, startTime)
      gain.gain.setValueAtTime(.0001, startTime)
      gain.gain.exponentialRampToValueAtTime(volume, startTime + .001)
      gain.gain.exponentialRampToValueAtTime(.0001, startTime + clickDuration)
      source.connect(filter)
      filter.connect(gain)
      gain.connect(audioContext.destination)
      source.start(startTime)
      source.stop(startTime + clickDuration)
    }

    createClick(now, isCorrect ? .11 : .08)

    if (isCorrect) {
      createClick(now + .07, .07)
    }

    window.setTimeout(() => audioContext.close(), isCorrect ? 160 : 100)
  }

  function giveTactileFeedback(isCorrect) {
    if ('vibrate' in navigator) navigator.vibrate(isCorrect ? [35, 40, 70] : 25)
  }

  function chooseAnswer(choice) {
    if (feedback.includes('Muito')) return
    setSelectedChoice(choice)
    setDropState('selected')
    setFeedback('Agora toque no espaço vazio para colocar o número.')
  }

  function placeAnswer(choice) {
    if (feedback.includes('Muito')) return

    if (choice === currentRound.answer) {
      setScore((currentScore) => currentScore + 1)
      setFeedback('Muito bem! Você encontrou o número.')
      setDropState('correct')
      playClickSound(true)
      giveTactileFeedback(true)
      return
    }

    setDropState('wrong')
    setFeedback('Quase! O número voltou. Observe e tente novamente.')
    giveTactileFeedback(false)
    window.setTimeout(() => setDropState(''), 500)
  }

  function handleDrop(event) {
    event.preventDefault()
    const choice = event.dataTransfer.getData('text/plain')
    if (choice) placeAnswer(choice)
  }

  function nextRound() {
    if (round === rounds.length - 1) {
      setFinished(true)
      return
    }

    setRound((currentRoundIndex) => currentRoundIndex + 1)
    setFeedback('')
    setSelectedChoice('')
    setDropState('')
  }

  function restart() {
    setRound(0)
    setScore(0)
    setFeedback('')
    setSelectedChoice('')
    setDropState('')
    setFinished(false)
  }

  if (finished) {
    return (
      <section className="number-game number-game-finished" aria-live="polite">
        <span className="number-game-badge">DESAFIO CONCLUÍDO</span>
        <div className="number-game-reward" aria-hidden="true">★</div>
        <h3>Você foi muito bem!</h3>
        <p>Você acertou {score} de {rounds.length} sequências. Cada tentativa ajudou você a aprender.</p>
        <button type="button" className="number-game-button" onClick={restart}>Jogar novamente</button>
      </section>
    )
  }

  return (
    <section className="number-game" aria-labelledby="number-game-title">
      <div className="number-game-header">
        <div>
          <span className="number-game-badge">JOGO DOS NÚMEROS</span>
          <h3 id="number-game-title">Qual número vem a seguir?</h3>
          <p>Observe a sequência com calma e escolha uma resposta.</p>
        </div>
        <span className="number-game-progress">{round + 1} / {rounds.length}</span>
      </div>

      <div className="number-sequence" aria-label="Sequência numérica">
        {currentRound.sequence.map((number, index) => (
          <span
            key={`${number}-${index}`}
            className={number === '?' ? `is-missing drop-zone ${dropState}` : ''}
            onDragOver={(event) => event.preventDefault()}
            onDrop={number === '?' ? handleDrop : undefined}
            onClick={number === '?' && selectedChoice ? () => placeAnswer(selectedChoice) : undefined}
            onKeyDown={number === '?' && selectedChoice ? (event) => {
              if (event.key === 'Enter' || event.key === ' ') placeAnswer(selectedChoice)
            } : undefined}
            role={number === '?' ? 'button' : undefined}
            tabIndex={number === '?' ? 0 : undefined}
            aria-label={number === '?' ? 'Espaço para colocar o número escolhido' : undefined}
          >
            {number === '?' && selectedChoice && dropState === 'correct' ? selectedChoice : number}
          </span>
        ))}
      </div>

      <p className="number-game-hint">Segure e arraste um número, ou toque nele e depois no espaço vazio.</p>

      <div className="number-choices" role="group" aria-label="Números para completar a sequência">
        {currentRound.choices.map((choice) => (
          <button
            type="button"
            key={choice}
            className={`number-choice ${selectedChoice === choice ? 'is-selected' : ''}`}
            onClick={() => chooseAnswer(choice)}
            draggable="true"
            onDragStart={(event) => {
              event.dataTransfer.setData('text/plain', choice)
              playClickSound()
            }}
            aria-label={`Escolher o número ${choice}`}
          >
            {choice}
          </button>
        ))}
      </div>

      <div className={`number-feedback ${feedback.includes('Muito') ? 'is-correct' : ''}`} aria-live="polite">
        {feedback || 'Escolha uma opção para continuar.'}
      </div>

      {feedback.includes('Muito') && (
        <div className="number-success-sparkles" aria-hidden="true">
          <span>+</span>
          <span>★</span>
          <span>+</span>
        </div>
      )}

      {feedback.includes('Muito') && (
        <button type="button" className="number-game-button" onClick={nextRound}>
          {round === rounds.length - 1 ? 'Ver resultado' : 'Próxima sequência'}
        </button>
      )}
    </section>
  )
}

export default NumberGame
