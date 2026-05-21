import { useState, useEffect, useRef } from 'react'
import './App.css'

const BASE = import.meta.env.BASE_URL

const PROJECTS = [
  {
    id: 'johndragon',
    name: 'John Dragon',
    domain: 'johndragon.pl',
    category: 'Sport & przygoda',
    description: 'Szybkie rejsy motorówkami RIB po Wiśle i Jeziorze Zegrzyńskim. Adrenalinowe doświadczenia, eventy firmowe i wycieczki grupowe z profesjonalną załogą.',
    logo: `${BASE}logos/johndragon-logo.png`,
    bg: '#0A0A0A',
    accent: '#E83A1F',
    textColor: '#FFFFFF',
  },
  {
    id: 'chilli',
    name: 'CHILLi Boats',
    domain: 'nolicense.pl',
    category: 'Rekreacja wodna',
    description: 'Wynajem łódek motorowych na Zalewie Zegrzyńskim — bez patentu, bez wymagań. Do 6 osób, wynajem godzinowy i całodniowy. Paliwo i szkolenie w cenie.',
    logo: `${BASE}logos/chilli-logo.svg`,
    bg: '#0D2137',
    accent: '#2FA8E0',
    textColor: '#FFFFFF',
  },
  {
    id: 'wislaexpress',
    name: 'Wisła Express',
    domain: 'wislaexpress.waw.pl',
    category: 'Transport wodny',
    description: 'Taksówka wodna na Wiśle — jak Uber, tylko łódką. Przejazdy między przystankami w ~5 minut. Działa sezonowo kwiecień–październik. Ekologiczna alternatywa dla korkujących się ulic.',
    logo: `${BASE}logos/wislaexpress-logo.svg`,
    bg: '#1A1400',
    accent: '#E8A820',
    textColor: '#FFFFFF',
  },
  {
    id: 'bestshirt',
    name: 'BestShirt',
    domain: 'bestshirt.pl',
    category: 'Odzież & nadruki',
    description: 'Odzież firmowa z nadrukiem i haftem dla firm B2B. Koszulki, polo, bluzy od 10 sztuk. Standardowa realizacja 7 dni, ekspresowa 48h. Sitodruk i DTF.',
    logo: `${BASE}logos/bestshirt-logo.svg`,
    bg: '#F5F2EE',
    accent: '#C0390A',
    textColor: '#111111',
  },
]

function useLocalLikes() {
  const [likes, setLikes] = useState<Record<string, number>>(() => {
    try {
      return JSON.parse(localStorage.getItem('gpi-likes') || '{}')
    } catch {
      return {}
    }
  })

  const like = (id: string) => {
    setLikes(prev => {
      const next = { ...prev, [id]: (prev[id] ?? 0) + 1 }
      localStorage.setItem('gpi-likes', JSON.stringify(next))
      return next
    })
  }

  return { likes, like }
}

function HeartButton({ likes, onLike }: { id: string; likes: number; onLike: () => void }) {
  const [burst, setBurst] = useState(false)

  const handleClick = () => {
    onLike()
    setBurst(true)
    setTimeout(() => setBurst(false), 600)
  }

  return (
    <button className={`heart-btn${burst ? ' heart-btn--burst' : ''}`} onClick={handleClick} aria-label="Polub projekt">
      <span className="heart-icon">♥</span>
      <span className="heart-count">{likes > 0 ? likes : ''}</span>
    </button>
  )
}

function NavDots({ total, current }: { total: number; current: number }) {
  return (
    <nav className="nav-dots" aria-label="Nawigacja sekcji">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className={`nav-dot${i === current ? ' nav-dot--active' : ''}`} />
      ))}
    </nav>
  )
}

export default function App() {
  const { likes, like } = useLocalLikes()
  const [current, setCurrent] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const total = PROJECTS.length + 2 // intro + projects + contact

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.idx)
            setCurrent(idx)
          }
        }
      },
      { root: container, threshold: 0.6 }
    )

    container.querySelectorAll('[data-idx]').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="snap-container" ref={containerRef}>
      <NavDots total={total} current={current} />

      <div className={`scroll-hint${current === total - 1 ? ' scroll-hint--hidden' : ''}`} aria-hidden="true">
        <div className="scroll-hint-mouse">
          <div className="scroll-hint-wheel" />
        </div>
        <span className="scroll-hint-text">przewiń</span>
      </div>

      {/* SCREEN 0 — INTRO */}
      <section className="snap-screen screen-intro" data-idx="0">
        <div className="intro-content">
          <img src={`${BASE}logos/gpiprojekt-logo.png`} alt="GPI PROJEKT" className="intro-logo" />
          <p className="intro-tagline">Portfolio spółki</p>
          <p className="intro-sub">Przewiń, żeby poznać nasze projekty</p>
        </div>
        <div className="intro-bg-grid" aria-hidden="true" />
      </section>

      {/* SCREENS 1–4 — PROJEKTY */}
      {PROJECTS.map((p, i) => (
        <section
          key={p.id}
          className="snap-screen screen-project"
          data-idx={i + 1}
          style={{ '--bg': p.bg, '--accent': p.accent, '--text': p.textColor } as React.CSSProperties}
        >
          <div className="project-top">
            <span className="project-category">{p.category}</span>
            <a href={`https://${p.domain}`} target="_blank" rel="noopener noreferrer" className="project-domain">
              {p.domain} ↗
            </a>
          </div>

          <div className="project-center">
            <a href={`https://${p.domain}`} target="_blank" rel="noopener noreferrer" className="project-logo-link">
              <img src={p.logo} alt={p.name} className="project-logo" />
            </a>
          </div>

          <div className="project-bottom">
            <p className="project-desc">{p.description}</p>
            <HeartButton id={p.id} likes={likes[p.id] ?? 0} onLike={() => like(p.id)} />
          </div>

          <div className="project-num" aria-hidden="true">0{i + 1}</div>
        </section>
      ))}

      {/* SCREEN 5 — KONTAKT */}
      <section className="snap-screen screen-contact" data-idx={PROJECTS.length + 1}>
        <div className="contact-content">
          <img src={`${BASE}logos/gpiprojekt-logo.png`} alt="GPI PROJEKT" className="contact-logo" />

          <div className="contact-channels">
            <a href="tel:+48536899899" className="contact-channel">
              <span className="contact-channel-icon">✆</span>
              <span className="contact-channel-body">
                <span className="contact-channel-label">Telefon</span>
                <span className="contact-channel-val">+48 536 899 899</span>
              </span>
            </a>
            <a href="mailto:biuro@gpiprojekt.pl" className="contact-channel">
              <span className="contact-channel-icon">✉</span>
              <span className="contact-channel-body">
                <span className="contact-channel-label">E-mail ogólny</span>
                <span className="contact-channel-val">biuro@gpiprojekt.pl</span>
              </span>
            </a>
            <a href="mailto:faktury@gpiprojekt.pl" className="contact-channel">
              <span className="contact-channel-icon">🧾</span>
              <span className="contact-channel-body">
                <span className="contact-channel-label">Faktury</span>
                <span className="contact-channel-val">faktury@gpiprojekt.pl</span>
              </span>
            </a>
          </div>

          <div className="contact-data">
            {[
              ['NIP',      '9522229976'],
              ['KRS',      '0000975759'],
              ['Forma',    'Prosta Spółka Akcyjna'],
              ['Siedziba', 'ul. Cyklamenowa 7\n05-077 Warszawa'],
            ].map(([label, val]) => (
              <div className="contact-row" key={label}>
                <span className="contact-label">{label}</span>
                <span className="contact-val">{val}</span>
              </div>
            ))}
          </div>

          <p className="contact-copy">© 2025 GPI PROJEKT P.S.A.</p>
        </div>
      </section>
    </div>
  )
}
