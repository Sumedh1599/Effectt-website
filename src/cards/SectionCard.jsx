import './shared.css'


export function SectionCard({
  id,
  headline,
  headlineId,
  lead,
  body,
  children,
  className = '',
}) {
  const hId = headlineId || (id ? `${id}-headline` : 'section-headline')

  return (
    <section
      id={id}
      className={`content-card ${className}`.trim()}
      aria-labelledby={headline ? hId : undefined}
    >
      {headline ? (
        <h2 id={hId} className="content-card__headline">
          {headline}
        </h2>
      ) : null}
      {lead ? <p className="content-card__lead">{lead}</p> : null}
      {body ? <p className="content-card__body">{body}</p> : null}
      {children}
    </section>
  )
}
