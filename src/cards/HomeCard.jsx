import './HomeCard.css'

function HomeCard({ onExplore }) {
  return (
    <section
      id="home-card"
      className="home-card"
      aria-labelledby="home-title"
    >
      <div className="home-card__body">
        <h1 id="home-title" className="home-card__title">
          EFFECTT
        </h1>
        <p className="home-card__subtitle">
          Your personalised decision companion App
        </p>
      </div>
      <button
        type="button"
        className="home-card__explore"
        onClick={() => onExplore?.()}
      >
        Explore
      </button>
    </section>
  )
}

export default HomeCard
