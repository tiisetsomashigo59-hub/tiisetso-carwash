import { useEffect, useState, type FormEvent, type ReactNode } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  BadgeCheck,
  CarFront,
  Check,
  Clock3,
  Cog,
  Droplets,
  Heart,
  Leaf,
  Menu,
  MessageCircle,
  ScanLine,
  Sparkles,
  Sofa,
  Star,
  Wind,
  Wallet,
  X,
  type LucideIcon,
} from 'lucide-react'
import { business, galleryImages, services, whyChooseUs } from './businessConfig'

const iconByName: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  badge: BadgeCheck,
  sofa: Sofa,
  droplets: Droplets,
  car: CarFront,
  cog: Cog,
  wind: Wind,
  star: Star,
  scan: ScanLine,
  leaf: Leaf,
  heart: Heart,
  wallet: Wallet,
  message: MessageCircle,
}

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About us', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

function whatsappUrl(message: string) {
  const number = business.whatsappNumber
    ? `${business.whatsappCountryCode}${business.whatsappNumber}`.replace(/\D/g, '')
    : ''
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

function WhatsAppLink({
  message,
  children,
  className,
  ariaLabel,
}: {
  message: string
  children: ReactNode
  className: string
  ariaLabel?: string
}) {
  return (
    <a
      className={className}
      href={whatsappUrl(message)}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  )
}

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`brand${footer ? ' brand-footer' : ''}`} href="#home" aria-label="Tiisetso's Car Wash home">
      <span className="brand-mark" aria-hidden="true">
        <CarFront size={24} strokeWidth={1.7} />
        <Sparkles className="brand-sparkle" size={12} strokeWidth={2} />
      </span>
      <span className="brand-wordmark">
        <span className="brand-name">Tiisetso’s</span>
        <span className="brand-subtitle">CAR WASH <span aria-hidden="true">·</span> CARE IN EVERY DETAIL</span>
      </span>
    </a>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className="site-header">
      <nav className="nav-shell page-container" aria-label="Main navigation">
        <Brand />
        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div id="main-navigation" className={`nav-links${menuOpen ? ' nav-links-open' : ''}`}>
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <WhatsAppLink
            className="button button-gold nav-book"
            message={`Hi ${business.name}! I would like to book a car wash. Please let me know your availability. Thank you!`}
          >
            Book a wash <ArrowRight size={15} />
          </WhatsAppLink>
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-photo" role="img" aria-label="Polished luxury car surrounded by dramatic light" />
      <div className="hero-shade" />
      <div className="hero-content page-container">
        <p className="eyebrow"><span className="eyebrow-line" /> A better kind of clean</p>
        <h1>Give Your Car the<br /><span>Shine</span> It Deserves</h1>
        <p className="hero-copy">
          At Tiisetso’s Car Wash, we bring back the shine, freshness, and beauty of your vehicle.
          Enjoy quality car care and professional service at a price you’ll love.
        </p>
        <div className="hero-actions">
          <WhatsAppLink
            className="button button-gold button-large"
            message={`Hi ${business.name}! I would like to book a car wash.\n\nPlease let me know your availability. Thank you!`}
          >
            Book your wash <ArrowRight size={17} />
          </WhatsAppLink>
          <a className="button button-outline button-large" href="#services">
            View our services <ArrowDown size={16} />
          </a>
          {business.mapUrl ? (
            <a className="button button-outline button-large" href={business.mapUrl} target="_blank" rel="noreferrer">
              Get directions <ArrowRight size={16} />
            </a>
          ) : (
            <span className="button button-outline button-large button-disabled" aria-disabled="true" title="Add the Google Maps URL in businessConfig.ts">
              Get directions <ArrowRight size={16} />
            </span>
          )}
        </div>
        <div className="hero-proof">
          <span className="proof-icon"><Check size={14} /></span>
          Quality service. Spotless results. Every time.
        </div>
      </div>
      <div className="hero-index" aria-hidden="true"><span>01</span> / 03</div>
      <a className="hero-scroll" href="#services" aria-label="Scroll to services"><span /> Scroll to explore</a>
    </section>
  )
}

function SectionIntro({
  eyebrow,
  title,
  children,
  centered = false,
}: {
  eyebrow: string
  title: ReactNode
  children?: ReactNode
  centered?: boolean
}) {
  return (
    <div className={`section-intro${centered ? ' section-intro-center' : ''}`}>
      <p className="eyebrow eyebrow-dark"><span className="eyebrow-line" /> {eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="section-copy">{children}</p>}
    </div>
  )
}

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="page-container">
        <div className="services-heading">
          <SectionIntro eyebrow="Our services" title={<>A clean for every<br /><span>kind of drive.</span></>} />
          <p className="services-aside">From a quick refresh to a head-to-toe valet, find the care that feels right for your car.</p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = iconByName[service.icon]
            return (
              <article className="service-card" key={service.name}>
                <div className="service-image-wrap">
                  <img
                    className="service-image"
                    src={service.image}
                    alt={`${service.name} at Tiisetso's Car Wash`}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="service-number">0{index + 1}</span>
                </div>
                <div className="service-content">
                  <div className="service-title-row">
                    <span className="service-icon"><Icon size={18} strokeWidth={1.7} /></span>
                    <span className="service-price">{service.price}<small> / service</small></span>
                  </div>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <WhatsAppLink
                    className="service-book"
                    message={`Hi ${business.name}! I would like to book: ${service.name}.\n\nVehicle type: \nPreferred date: \nPreferred time: \n\nPlease let me know your availability. Thank you!`}
                  >
                    Book this service <ArrowRight size={15} />
                  </WhatsAppLink>
                </div>
              </article>
            )
          })}
        </div>
        <p className="price-note"><Sparkles size={15} /> Prices shown as editable placeholders. Final prices may depend on vehicle size and service requirements.</p>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="page-container about-layout">
        <div className="about-visual">
          <img
            src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1100&q=85"
            alt="Careful hands-on car washing and detailing"
            loading="lazy"
            decoding="async"
          />
          <div className="about-photo-caption"><span className="caption-mark"><Sparkles size={20} /></span><span>Thoughtful care.<br /><strong>Every single wash.</strong></span></div>
          <span className="about-image-outline" aria-hidden="true" />
        </div>
        <div className="about-copy">
          <SectionIntro eyebrow="A little about us" title={<>We believe every car<br />deserves <span>care.</span></>} />
          <p>
            A clean car just feels different. At Tiisetso’s Car Wash, we’re here to make every visit
            a good one—with a friendly welcome, careful work, and a finish you’ll love driving away in.
          </p>
          <p>
            We focus on the details, use quality cleaning products, and take the time to understand
            what your vehicle needs. Whether it’s a quick wash or a full refresh, you and your car are
            always welcome here.
          </p>
          <a className="text-link" href="#contact">Come say hello <ArrowRight size={16} /></a>
          <div className="about-signoff"><span className="signoff-line" /> Clean cars. Happy drives.</div>
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  return (
    <section className="section choose-section">
      <div className="page-container">
        <SectionIntro eyebrow="The Tiisetso difference" title={<>Good care is in the <span>details.</span></>} centered>
          A great wash is more than clean paint. It’s the care, comfort, and confidence that come with it.
        </SectionIntro>
        <div className="choose-grid">
          {whyChooseUs.map((item, index) => {
            const Icon = iconByName[item.icon]
            return (
              <article className="choose-item" key={item.title}>
                <span className="choose-icon"><Icon size={21} strokeWidth={1.65} /></span>
                <span className="choose-index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[number] | null>(null)

  useEffect(() => {
    if (!selectedImage) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedImage(null)
    }
    window.addEventListener('keydown', closeOnEscape)
    document.body.classList.add('modal-open')
    return () => {
      window.removeEventListener('keydown', closeOnEscape)
      document.body.classList.remove('modal-open')
    }
  }, [selectedImage])

  return (
    <section className="section gallery-section" id="gallery">
      <div className="page-container">
        <div className="gallery-heading">
          <SectionIntro eyebrow="A little inspiration" title={<>Made to <span>gleam.</span></>} />
          <p className="gallery-hint"><span className="gallery-hint-icon"><Sparkles size={15} /></span> A glimpse of the care we love to give.</p>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <button
              type="button"
              key={image.src}
              className={`gallery-tile ${image.className}`}
              onClick={() => setSelectedImage(image)}
              aria-label={`Enlarge image: ${image.alt}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
              <span className="gallery-label">{image.label}<span className="gallery-zoom">+</span></span>
            </button>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Expanded gallery image" onClick={() => setSelectedImage(null)}>
          <button type="button" className="lightbox-close" aria-label="Close image" onClick={() => setSelectedImage(null)}><X size={22} /></button>
          <figure className="lightbox-figure" onClick={(event) => event.stopPropagation()}>
            <img src={selectedImage.src.replace('w=1000', 'w=1800').replace('w=1200', 'w=1800')} alt={selectedImage.alt} />
            <figcaption>{selectedImage.label}</figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}

type BookingFields = {
  name: string
  phone: string
  vehicle: string
  service: string
  date: string
  time: string
  notes: string
}

function BookingForm() {
  const [submitted, setSubmitted] = useState(false)
  const [today] = useState(() => {
    const date = new Date()
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset())
    return date.toISOString().slice(0, 10)
  })

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const details: BookingFields = {
      name: String(form.get('name') ?? '').trim(),
      phone: String(form.get('phone') ?? '').trim(),
      vehicle: String(form.get('vehicle') ?? '').trim(),
      service: String(form.get('service') ?? ''),
      date: String(form.get('date') ?? ''),
      time: String(form.get('time') ?? ''),
      notes: String(form.get('notes') ?? '').trim(),
    }
    const message = [
      `Hi ${business.name}! I would like to enquire about booking a car wash.`,
      '',
      `Name: ${details.name}`,
      `Phone: ${details.phone}`,
      `Vehicle type: ${details.vehicle}`,
      `Service: ${details.service}`,
      `Preferred date: ${details.date}`,
      `Preferred time: ${details.time}`,
      `Additional notes: ${details.notes || 'None'}`,
      '',
      'Please let me know your availability. Thank you!',
    ].join('\n')
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <section className="section booking-section" id="booking">
      <div className="page-container booking-layout">
        <div className="booking-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Your next clean starts here</p>
          <h2>Let’s get your<br />car <span>looking good.</span></h2>
          <p>Tell us a little about what you need. We’ll open WhatsApp with your details so you can chat with us about availability.</p>
          <div className="booking-assurance"><MessageCircle size={19} /><span><strong>No online booking confirmation.</strong><br />We’ll confirm a time with you directly.</span></div>
        </div>
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-heading"><span>BOOKING ENQUIRY</span><span className="form-step">01 <i /> 02</span></div>
          <h3>Tell us about your car.</h3>
          <div className="form-grid">
            <label className="form-field">Your name<input name="name" placeholder="e.g. Thabo Mokoena" autoComplete="name" required /></label>
            <label className="form-field">Phone number<input name="phone" type="tel" placeholder="Your contact number" autoComplete="tel" required /></label>
            <label className="form-field">Vehicle type<input name="vehicle" placeholder="e.g. hatchback, SUV" required /></label>
            <label className="form-field">Service
              <select name="service" defaultValue="" required>
                <option value="" disabled>Select a service</option>
                {services.map((service) => <option key={service.name} value={service.name}>{service.name}</option>)}
              </select>
            </label>
            <label className="form-field">Preferred date<input name="date" type="date" min={today} required /></label>
            <label className="form-field">Preferred time<input name="time" type="time" required /></label>
            <label className="form-field form-field-full">Anything else we should know?<textarea name="notes" rows={3} placeholder="Optional notes about your vehicle or service" /></label>
          </div>
          <button className="button button-gold button-submit" type="submit">
            {submitted ? 'Send another enquiry' : 'Continue to WhatsApp'} <ArrowRight size={16} />
          </button>
          <p className="form-footnote"><MessageCircle size={14} /> Your message opens in WhatsApp. Your booking is not confirmed until we reply.</p>
        </form>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="section reviews-section">
      <div className="page-container">
        <div className="reviews-heading">
          <SectionIntro eyebrow="Kind words" title={<>Our customers say it <span>best.</span></>} centered>
            Genuine feedback from people who have visited us.
          </SectionIntro>
          <span className="review-status"><span /> REAL REVIEWS COMING SOON</span>
        </div>
        <div className="review-grid">
          {[1, 2, 3].map((review) => (
            <article className="review-card" key={review}>
              <span className="review-placeholder-mark" aria-hidden="true">“</span>
              <p>Customer review will appear here.</p>
              <div className="review-card-footer"><span className="review-avatar"><MessageCircle size={16} /></span><span><strong>Real customer feedback</strong><small>Placeholder — replace before publishing</small></span></div>
            </article>
          ))}
        </div>
        <p className="review-disclaimer">Sample placeholders only. No customer reviews have been added yet.</p>
      </div>
    </section>
  )
}

function Contact() {
  const phoneDigits = business.phone.replace(/[^\d+]/g, '')
  const whatsappMessage = `Hi ${business.name}! I would like to find out more about your car wash services.`

  return (
    <section className="section contact-section" id="contact">
      <div className="page-container">
        <div className="contact-heading">
          <SectionIntro eyebrow="Come on over" title={<>We’d love to hear<br />from <span>you.</span></>} />
          <p className="contact-aside">Have a question or need help choosing a service? Send us a message—we’re happy to help.</p>
        </div>
        <div className="contact-layout">
          <div className="contact-details">
            <div className="contact-detail">
              <span className="contact-icon"><MessageCircle size={19} /></span>
              <div><span className="contact-label">WHATSAPP</span><p>{business.whatsappNumber ? `${business.whatsappCountryCode} ${business.whatsappNumber}` : `Add business number after ${business.whatsappCountryCode} in businessConfig.ts`}</p></div>
              <WhatsAppLink className="contact-action" message={whatsappMessage} ariaLabel="Message Tiisetso's Car Wash on WhatsApp"><ArrowRight size={17} /></WhatsAppLink>
            </div>
            <div className="contact-detail">
              <span className="contact-icon"><CarFront size={19} /></span>
              <div><span className="contact-label">PHONE</span><p>{business.phone || 'Add business phone in businessConfig.ts'}</p></div>
              {business.phone ? <a className="contact-action" href={`tel:${phoneDigits}`} aria-label="Call Tiisetso's Car Wash"><ArrowRight size={17} /></a> : <span className="contact-action contact-action-muted" aria-label="Phone number not configured"><ArrowRight size={17} /></span>}
            </div>
            <div className="contact-detail">
              <span className="contact-icon"><MessageCircle size={19} /></span>
              <div><span className="contact-label">EMAIL</span><p>{business.email || 'Add email address in businessConfig.ts'}</p></div>
              {business.email ? <a className="contact-action" href={`mailto:${business.email}`} aria-label="Email Tiisetso's Car Wash"><ArrowRight size={17} /></a> : <span className="contact-action contact-action-muted" aria-label="Email address not configured"><ArrowRight size={17} /></span>}
            </div>
            <div className="contact-detail">
              <span className="contact-icon"><Clock3 size={19} /></span>
              <div><span className="contact-label">OPENING HOURS</span><div className="hours-list">{business.hours.map((item) => <p key={item.day}><span>{item.day}</span><span>{item.time}</span></p>)}</div></div>
            </div>
          </div>
          <div className="location-card">
            <div className="location-map">
              <div className="map-grid" aria-hidden="true" />
              <span className="map-marker"><CarFront size={22} /></span>
              <span className="map-label">{business.address || 'Location to be added'}</span>
              <span className="map-coordinate" aria-hidden="true">YOUR LOCAL CAR CARE</span>
            </div>
            <div className="location-bottom">
              <div><span className="contact-label">FIND US</span><p>{business.address || 'Business address to be confirmed'}</p></div>
              {business.mapUrl ? (
                <a className="button button-gold directions-button" href={business.mapUrl} target="_blank" rel="noreferrer">Get directions <ArrowRight size={15} /></a>
              ) : (
                <span className="button button-gold directions-button button-disabled" aria-disabled="true" title="Add the Google Maps URL in businessConfig.ts">Directions soon <ArrowRight size={15} /></span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="footer-main">
          <div className="footer-brand-block">
            <Brand footer />
            <p>Quality service. Spotless results.<br />Every time.</p>
          </div>
          <div className="footer-nav"><span className="contact-label">EXPLORE</span>{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</div>
          <div className="footer-cta"><span className="contact-label">READY FOR A REFRESH?</span><p>Your car’s next good day starts here.</p><a className="footer-book" href="#booking">Make a booking enquiry <ArrowRight size={15} /></a></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Tiisetso’s Car Wash. All rights reserved.</span><a href="#home">Back to top ↑</a><span>Made with care <Sparkles size={13} /></span></div>
      </div>
    </footer>
  )
}

function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const update = () => setShowTop(window.scrollY > 550)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div className="floating-actions">
      {showTop && <a className="back-to-top" href="#home" aria-label="Back to top"><ArrowUp size={19} /></a>}
      <WhatsAppLink
        className="floating-whatsapp"
        ariaLabel="Enquire on WhatsApp"
        message={`Hi ${business.name}! I would like to book a car wash. Please let me know your availability. Thank you!`}
      >
        <MessageCircle size={22} fill="currentColor" strokeWidth={1.8} /><span>Let’s chat</span>
      </WhatsAppLink>
    </div>
  )
}

function App() {
  return (
    <>
      <Navbar />
      {business.offer.enabled && <a className="offer-banner" href="#services"><Sparkles size={15} /> {business.offer.text}<ArrowRight size={15} /></a>}
      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Gallery />
        <BookingForm />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}

export default App
