import './shared.css'
import './FeaturesCard.css'
import { FeatureButtonsRow } from './FeatureButtons'

function FeaturesCard() {
  return (
    <section
      id="features-card"
      className="content-card features-card"
      aria-labelledby="features-card-title"
    >
      <h2 id="features-card-title" className="content-card__headline">
        Minimalist features perfect for you
      </h2>
      <FeatureButtonsRow />
    </section>
  )
}

export default FeaturesCard
