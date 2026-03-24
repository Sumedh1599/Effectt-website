import './shared.css'
import './FeaturesCard.css'
import './FeatureSplitCard.css'
import { FeatureSoloButton } from './FeatureButtons'

function DailyLogsCard() {
  return (
    <section
      id="daily-logs-card"
      className="content-card feature-split-card"
      aria-labelledby="daily-logs-card-headline"
    >
      <div className="feature-split-card__split">
        <div className="feature-split-card__buttons">
          <FeatureSoloButton feature="daily" />
        </div>
        <div className="feature-split-card__text">
          <h2 id="daily-logs-card-headline" className="content-card__headline">
            The smallest entries tell the biggest story.
          </h2>
          <p className="content-card__body">
            {`A sentence. A thought. A decision you just made. Drop it into Effectt whenever something happens — big or small. Over time these fragments become a picture of how you actually think, decide, and move through the world. Your logs are end-to-end private, processed only to serve you, and deletable in one tap at any time. No ads. No selling your data. No one reading your thoughts but you — and the AI you chose to trust.`}
          </p>
        </div>
      </div>
    </section>
  )
}

export default DailyLogsCard
