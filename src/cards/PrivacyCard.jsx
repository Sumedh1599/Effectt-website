import { SectionCard } from './SectionCard'

function PrivacyCard() {
  return (
    <SectionCard
      id="privacy-card"
      headline="The most personal app you'll ever use. Built to know as little as possible."
      body={`Effectt works with sensitive thoughts. We take that seriously — not as a policy checkbox, but as a design principle. Your data is processed on-device wherever possible. Raw entries are never sold, never shared, never used to train AI models without your explicit consent. You can export everything you've ever written in one tap. You can delete it all permanently in one tap. No waiting period. No "we'll process your request." Gone means gone. Your trust is the only thing that makes Effectt work — we have no interest in breaking it.`}
    />
  )
}

export default PrivacyCard
