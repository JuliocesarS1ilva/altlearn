function Lmain({ eyebrow, title, description, image, imageAlt, sectionClass = '', buttonText, buttonHref, reverse = false }) {
  return (
    <section className={`split-section split-left ${sectionClass} ${reverse ? 'split-reverse' : ''}`} id={eyebrow === 'APRENDER NO SEU RITMO' ? 'como-funciona' : undefined}>
      <div className="split-inner">
        <div className="split-visual">
          <img src={image} alt={imageAlt} />
        </div>

        <div className="split-copy">
          <span className="section-eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          {buttonText && buttonHref && (
            <a className="primary-button" href={buttonHref}>{buttonText}</a>
          )}
        </div>
      </div>
    </section>
  )
}

export default Lmain
