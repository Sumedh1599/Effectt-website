import { scrollToSection } from '../scrollToSection'
import './FeaturesCard.css'

export function IconChat() {
  return (
    <svg
      className="features-card__icon"
      viewBox="0 0 48 48"
      aria-hidden="true"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 22c0-6 5.5-11 14-11s14 5 14 11-5.5 11-14 11c-1.3 0-2.6-.1-3.8-.4L10 36l2.5-8.2C10.8 26 10 24.2 10 22z"
      />
    </svg>
  )
}

export function IconCall() {
  return (
    <svg
      className="features-card__icon"
      viewBox="0 0 48 48"
      aria-hidden="true"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 10h6l2 8-3 2c2.2 3.5 5.3 6.6 8.8 8.8l2-3 8 2v6c0 1.5-1.2 2.8-2.8 3-10.5 1.2-21.5-8.3-22.7-18.8-.2-1.6 1-2.8 2.7-3z"
      />
    </svg>
  )
}

export function IconLogs() {
  return (
    <svg
      className="features-card__icon"
      viewBox="0 0 48 48"
      aria-hidden="true"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 12h20M14 22h20M14 32h14M14 8h20v32H14V8z"
      />
    </svg>
  )
}

export function FeatureButtonsRow() {
  return (
    <div className="features-card__row">
      <button
        type="button"
        className="features-card__btn"
        onClick={() => scrollToSection('chat-card')}
      >
        <IconChat />
        <span className="features-card__label">Chat</span>
      </button>
      <button
        type="button"
        className="features-card__btn"
        onClick={() => scrollToSection('call-card')}
      >
        <IconCall />
        <span className="features-card__label">Call</span>
      </button>
      <button
        type="button"
        className="features-card__btn"
        onClick={() => scrollToSection('daily-logs-card')}
      >
        <IconLogs />
        <span className="features-card__label">Daily logs</span>
      </button>
    </div>
  )
}

/** Single feature CTA for Chat / Call / Daily logs detail cards */
export function FeatureSoloButton({ feature }) {
  if (feature === 'chat') {
    return (
      <button
        type="button"
        className="features-card__btn feature-solo-btn"
        onClick={() => scrollToSection('chat-card')}
      >
        <IconChat />
        <span className="features-card__label">Chat</span>
      </button>
    )
  }
  if (feature === 'call') {
    return (
      <button
        type="button"
        className="features-card__btn feature-solo-btn"
        onClick={() => scrollToSection('call-card')}
      >
        <IconCall />
        <span className="features-card__label">Call</span>
      </button>
    )
  }
  if (feature === 'daily') {
    return (
      <button
        type="button"
        className="features-card__btn feature-solo-btn"
        onClick={() => scrollToSection('daily-logs-card')}
      >
        <IconLogs />
        <span className="features-card__label">Daily logs</span>
      </button>
    )
  }
  return null
}
