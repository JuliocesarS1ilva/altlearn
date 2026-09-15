function Rmain({ eyebrow, title, description, image, imageAlt, sectionClass = '' }) {
  return (
    <section className={`split-section split-right ${sectionClass}`}>
      <div className="split-inner">
        <div className="split-copy">
          <span className="section-eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="split-visual">
          <img src={image} alt={imageAlt} />
        </div>
      </div>
    </section>
  )
}

export default Rmain
