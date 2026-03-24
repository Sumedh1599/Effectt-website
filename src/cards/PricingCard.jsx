import { SectionCard } from './SectionCard'
import './PricingCard.css'

function PricingCard() {
  return (
    <SectionCard
      id="pricing-card"
      className="pricing-card"
      headline="Less than your morning coffee. More useful than most therapy sessions."
    >
      <div className="pricing-card__layout">
        <div className="pricing-mini" aria-label="Pricing from 5 dollars per month">
          <div className="pricing-mini__price-row">
            <span className="pricing-mini__currency">$</span>
            <span className="pricing-mini__amount">5</span>
          </div>
          <span className="pricing-mini__per">per month</span>
          <span className="pricing-mini__tag">Perfectly simple</span>
        </div>
        <div className="pricing-card__text">
          <p className="content-card__body">
            Effectt starts at just $5 a month — because clarity about your own
            mind shouldn&apos;t be a luxury. Every plan includes full access to
            chat, voice sessions, daily logs, and your personal pattern
            history. No hidden fees. No locked insights. No paying more to
            understand yourself. Cancel anytime, keep your entries forever.
          </p>
        </div>
      </div>
    </SectionCard>
  )
}

export default PricingCard
