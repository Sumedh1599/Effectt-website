import './shared.css'
import './FeaturesCard.css'
import './FeatureSplitCard.css'
import { FeatureSoloButton } from './FeatureButtons'

function ChatCard() {
  return (
    <section
      id="chat-card"
      className="content-card feature-split-card"
      aria-labelledby="chat-card-headline"
    >
      <div className="feature-split-card__split">
        <div className="feature-split-card__buttons">
          <FeatureSoloButton feature="chat" />
        </div>
        <div className="feature-split-card__text">
          <h2 id="chat-card-headline" className="content-card__headline">
            Finally. Someone who actually listens.
          </h2>
          <p className="content-card__body">
            {`Type whatever is on your mind — a decision you're stuck on, something that happened today, a choice you're second-guessing. Effectt responds the way a long-time friend would — warm, unhurried, never judgmental. No forms. No prompts. No "rate your mood from 1 to 5." Just a conversation that goes exactly where you need it to go. And unlike a friend, Effectt remembers everything you've ever told it.`}
          </p>
        </div>
      </div>
    </section>
  )
}

export default ChatCard
