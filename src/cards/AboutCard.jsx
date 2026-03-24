import { SectionCard } from './SectionCard'

function AboutCard() {
  return (
    <SectionCard
      id="about-card"
      headline="You already know the answer."
      headlineId="about-headline"
      lead="Effectt helps you hear it."
      body={
        "Every decision you've ever made was influenced by something — your past, your fears, your patterns, your mood that morning. Effectt is an AI-powered decision mirror that listens, learns, and reflects back the invisible forces shaping your choices. Not a therapist. Not a chatbot. Something that didn't exist until now."
      }
    />
  )
}

export default AboutCard
