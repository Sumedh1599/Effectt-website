import './App.css'
import TitleBar from './TitleBar'
import { scrollToSection } from './scrollToSection'
import HomeCard from './cards/HomeCard'
import DemoCard from './cards/DemoCard'
import AboutCard from './cards/AboutCard'
import WhyUsCard from './cards/WhyUsCard'
import FeaturesCard from './cards/FeaturesCard'
import ChatCard from './cards/ChatCard'
import CallCard from './cards/CallCard'
import DailyLogsCard from './cards/DailyLogsCard'
import HowEffecttHelpsCard from './cards/HowEffecttHelpsCard'
import PrivacyCard from './cards/PrivacyCard'
import PricingCard from './cards/PricingCard'
import ContactCard from './cards/ContactCard'
import Footer from './Footer'

function App() {
  const scrollToDemo = () => scrollToSection('demo-card')

  return (
    <>
      <TitleBar />
      <main className="home">
        <div className="home__stage">
          <HomeCard onExplore={scrollToDemo} />
        </div>
        <div className="home__stack">
          <DemoCard />
          <AboutCard />
          <WhyUsCard />
          <FeaturesCard />
          <ChatCard />
          <CallCard />
          <DailyLogsCard />
          <HowEffecttHelpsCard />
          <PrivacyCard />
          <PricingCard />
          <ContactCard />
          <Footer />
        </div>
      </main>
    </>
  )
}

export default App
