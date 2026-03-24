import './shared.css'
import './FeaturesCard.css'
import './FeatureSplitCard.css'
import { FeatureSoloButton } from './FeatureButtons'

function CallCard() {
  return (
    <section
      id="call-card"
      className="content-card feature-split-card"
      aria-labelledby="call-card-headline"
    >
      <div className="feature-split-card__split">
        <div className="feature-split-card__text">
          <h2 id="call-card-headline" className="content-card__headline">
            Talk it out. With someone who has studied you for months.
          </h2>
          <p className="content-card__body">
            {`Sometimes you don't want to type. You want to talk. Effectt's voice session lets you speak freely — and responds in real time with a calm, human-feeling voice that knows your history, your patterns, and your decision style. It's not a hotline. It's not a script. It's a conversation with an AI that has been quietly paying attention since the day you signed up. Every call ends with a summary of what came up and what it means.`}
          </p>
        </div>
        <div className="feature-split-card__buttons">
          <FeatureSoloButton feature="call" />
        </div>
      </div>
    </section>
  )
}

export default CallCard
