import { useEffect, useRef, useState } from 'react'
import './shared.css'
import './DemoCard.css'

const VIMEO_BASE =
  'https://player.vimeo.com/video/1176663269?autoplay=1&muted=1&playsinline=1'

function DemoCard() {
  const sectionRef = useRef(null)
  const wasInViewRef = useRef(false)
  const [inView, setInView] = useState(false)
  const [embedKey, setEmbedKey] = useState(0)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!wasInViewRef.current) {
              setEmbedKey((k) => k + 1)
            }
            wasInViewRef.current = true
            setInView(true)
          } else {
            wasInViewRef.current = false
            setInView(false)
          }
        })
      },
      { threshold: 0.35, rootMargin: '0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="demo-card"
      className="content-card content-card--demo demo-card"
      aria-labelledby="demo-card-title"
    >
      <h2 id="demo-card-title" className="demo-card__title">
        {'Mirror     Memory     Growth     '}
      </h2>
      <div className="demo-card__video">
        {inView && embedKey > 0 ? (
          <iframe
            key={embedKey}
            className="demo-card__iframe"
            src={VIMEO_BASE}
            title="Vimeo: Mirror Memory Growth demo"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="demo-card__iframe demo-card__iframe--placeholder" />
        )}
      </div>
    </section>
  )
}

export default DemoCard
