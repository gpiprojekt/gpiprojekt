import './App.css'

const BASE = import.meta.env.BASE_URL

const projects = [
  {
    id: '01',
    name: 'John Dragon',
    domain: 'johndragon.pl',
    tagline: 'Dragon boat racing na Wiśle',
    description: 'Warszawski klub dragon boat i sportów wodnych. Treningi, regaty, eventy na Wiśle.',
    color: '#E85C1A',
    logo: `${BASE}logos/johndragon-logo.png`,
  },
  {
    id: '02',
    name: 'CHILLi Boats',
    domain: 'nolicense.pl',
    tagline: 'Wypożyczalnia łódek bez patentu',
    description: 'Wynajem łódek elektrycznych i motorowych — bez patentu, dla każdego.',
    color: '#1A6EBA',
    logo: `${BASE}logos/chilli-logo.svg`,
  },
  {
    id: '03',
    name: 'Wisła Express',
    domain: 'wislaexpress.waw.pl',
    tagline: 'Taksówka wodna w Warszawie',
    description: 'Szybki transport wodny między bulwarami i plażami Warszawy.',
    color: '#C49A14',
    logo: `${BASE}logos/wislaexpress-logo.svg`,
  },
  {
    id: '04',
    name: 'BestShirt',
    domain: 'bestshirt.pl',
    tagline: 'Odzież firmowa z nadrukiem',
    description: 'Produkcja koszulek i bluz z nadrukiem DTF. Małe i duże serie, szybka realizacja.',
    color: '#C0390A',
    logo: `${BASE}logos/bestshirt-logo.svg`,
  },
]

export default function App() {
  return (
    <div className="app">
      <nav className="nav">
        <a href="/" className="nav-logo">
          <img src={`${BASE}logos/gpiprojekt-logo.png`} alt="GPI PROJEKT" className="nav-logo-img" />
        </a>
        <div className="nav-links">
          <a href="tel:+48536899899">+48 536 899 899</a>
          <a href="mailto:kontakt@gpiprojekt.pl">kontakt@gpiprojekt.pl</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-accent-block" aria-hidden="true" />

        <div className="hero-content">
          <p className="hero-eyebrow">GPI PROJEKT P.S.A. · Warszawa</p>
          <h1 className="hero-title">
            Nasze<br /><em>Portfolio</em>
          </h1>
          <p className="hero-sub">
            Spółka zarządzająca portfelem projektów z branży sportowej,
            transportowej i odzieżowej w Warszawie.
          </p>
          <div className="hero-meta">
            <div className="meta-item">
              <span className="meta-val">4</span>
              <span className="meta-label">Projekty</span>
            </div>
            <div className="meta-item">
              <span className="meta-val">2022</span>
              <span className="meta-label">Rok założenia</span>
            </div>
            <div className="meta-item">
              <span className="meta-val">W-wa</span>
              <span className="meta-label">Siedziba</span>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <span className="scroll-label">Projekty</span>
          <div className="scroll-line" />
        </div>
      </section>

      <section className="projects-section">
        <div className="section-header">
          <span className="eyebrow">Portfolio spółki</span>
          <div className="header-rule" />
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <a
              key={p.id}
              href={`https://${p.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{ '--c': p.color, animationDelay: `${i * 0.1}s` } as React.CSSProperties}
            >
              <div className="card-accent-bar" />
              <p className="card-num">{p.id}</p>
              <div className="card-logo">
                <img src={p.logo} alt={p.name} className="card-logo-img" />
              </div>
              <p className="card-tagline">{p.tagline}</p>
              <p className="card-desc">{p.description}</p>
              <div className="card-foot">
                <span className="card-domain">{p.domain}</span>
                <span className="card-arrow">→</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="about-section">
        <div className="section-header">
          <span className="eyebrow">O spółce</span>
          <div className="header-rule" />
        </div>
        <div className="about-grid">
          <p className="about-statement">
            <strong>Dane rejestrowe</strong>
            Łączymy odważne projekty pod jednym holdingiem. Sport, transport,
            rekreacja i moda — każdy projekt to osobna marka z własną tożsamością.
          </p>
          <div className="about-data">
            {[
              ['NIP',     '9522229976'],
              ['KRS',     '0000975759'],
              ['Forma',   'P.S.A.'],
              ['Siedziba','ul. Cyklamenowa 7, 05-077 Warszawa'],
              ['Telefon', '+48 536 899 899'],
              ['Email',   'kontakt@gpiprojekt.pl'],
            ].map(([label, val]) => (
              <div className="data-row" key={label}>
                <span className="data-label">{label}</span>
                <span className="data-val">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <a href="/" className="footer-logo">
            <img src={`${BASE}logos/gpiprojekt-logo.png`} alt="GPI PROJEKT" className="footer-logo-img" />
          </a>
          <div className="footer-contacts">
            <a href="tel:+48536899899">+48 536 899 899</a>
            <a href="mailto:kontakt@gpiprojekt.pl">kontakt@gpiprojekt.pl</a>
          </div>
        </div>
        <p className="footer-copy">© 2025 GPI PROJEKT P.S.A. · Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  )
}
