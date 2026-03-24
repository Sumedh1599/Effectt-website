import { useCallback, useEffect, useRef, useState } from 'react'
import logoImg from './assets/logo.png'
import { scrollToSection } from './scrollToSection'
import './TitleBar.css'

const NAV_ITEMS = [
  { id: 'home-card', label: 'Home' },
  { id: 'about-card', label: 'About' },
  { id: 'features-card', label: 'Features' },
  { id: 'pricing-card', label: 'Pricing' },
  { id: 'contact-card', label: 'Contact' },
  { id: 'demo-card', label: 'Demo' },
]

/** Top-to-bottom on the page (must match scroll order for active state). */
const SCROLL_SPY_ORDER = [
  'home-card',
  'demo-card',
  'about-card',
  'features-card',
  'pricing-card',
  'contact-card',
]

function TitleBar() {
  const barRef = useRef(null)
  const [activeId, setActiveId] = useState('home-card')

  const updateActive = useCallback(() => {
    const barH = barRef.current?.offsetHeight ?? 64
    const gap =
      parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          '--titlebar-scroll-gap'
        )
      ) || 28
    const probe = window.scrollY + barH + gap + 2
    let current = SCROLL_SPY_ORDER[0]
    for (const id of SCROLL_SPY_ORDER) {
      const el = document.getElementById(id)
      if (!el) continue
      const top = el.getBoundingClientRect().top + window.scrollY
      if (top <= probe) current = id
    }
    setActiveId(current)
  }, [])

  useEffect(() => {
    let rafId = 0
    const scheduleActive = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => updateActive())
    }
    scheduleActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [updateActive])

  useEffect(() => {
    const el = barRef.current
    if (!el || typeof ResizeObserver === 'undefined') return
    let rafId = 0
    const sync = () => {
      document.documentElement.style.setProperty(
        '--titlebar-height',
        `${el.offsetHeight}px`
      )
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => updateActive())
    }
    sync()
    const ro = new ResizeObserver(sync)
    ro.observe(el)
    return () => {
      ro.disconnect()
      cancelAnimationFrame(rafId)
    }
  }, [updateActive])

  return (
    <header className="titlebar" ref={barRef} role="banner">
      <div className="titlebar__inner">
        <a
          href="#home-card"
          className="titlebar__brand"
          onClick={(e) => {
            e.preventDefault()
            setActiveId('home-card')
            scrollToSection('home-card')
          }}
        >
          <img src={logoImg} alt="" className="titlebar__logo" />
          <span className="titlebar__name">EFFECT</span>
        </a>
        <nav className="titlebar__nav" aria-label="Sections">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              className={
                activeId === id
                  ? 'titlebar__link titlebar__link--active'
                  : 'titlebar__link'
              }
              onClick={() => {
                setActiveId(id)
                scrollToSection(id)
              }}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default TitleBar
