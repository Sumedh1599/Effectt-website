import mailImg from '../assets/mail.png'
import githubImg from '../assets/github.png'
import linkedinImg from '../assets/linkedin.png'
import './shared.css'
import './ContactCard.css'

function ContactCard() {
  return (
    <section
      id="contact-card"
      className="content-card contact-card"
      aria-labelledby="contact-card-headline"
    >
      <h2 id="contact-card-headline" className="content-card__headline">
        Interested in Being Part of What Comes Next?
      </h2>
      <p className="content-card__body">
      Effectt is in its early days — and we're building with the people who get it first. Join the waitlist for early access, founding member pricing, and a front-row seat to something that's never existed before. No spam. Just the stuff that matters.
      </p>
      <div className="contact-card__row">
        <a
          className="contact-card__link"
          href="mailto:hello@effectt.aipresso.uk"
          aria-label="Email hello@effectt.aipresso.uk"
        >
          <img
            src={mailImg}
            alt=""
            className="contact-card__logo"
            width={72}
            height={72}
          />
        </a>
        <a
          className="contact-card__link"
          href="https://github.com/Sumedh1599"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub — Sumedh1599"
        >
          <img
            src={githubImg}
            alt=""
            className="contact-card__logo"
            width={72}
            height={72}
          />
        </a>
        <a
          className="contact-card__link"
          href="https://www.linkedin.com/in/sumedh-patil-7ab0a21a6"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn — Sumedh Patil"
        >
          <img
            src={linkedinImg}
            alt=""
            className="contact-card__logo"
            width={72}
            height={72}
          />
        </a>
      </div>
    </section>
  )
}

export default ContactCard
