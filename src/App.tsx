import './App.css'

const projects = [
  {
    id: '01',
    name: 'John Dragon',
    domain: 'johndragon.pl',
    tagline: 'Dragon boat racing na Wiśle',
    description:
      'Flagowy projekt spółki — warszawski klub dragon boat i sportów wodnych. Pasja, rywalizacja i drużynowy duch na Wiśle.',
    color: '#FF6B1A',
    colorDim: 'rgba(255,107,26,0.1)',
    category: 'Sport & Lifestyle',
    icon: '龍',
    light: false,
  },
  {
    id: '02',
    name: 'CHILLi Boats',
    domain: 'nolicense.pl',
    tagline: 'Wypożyczalnia łódek bez patentu',
    description:
      'Rzeka dostępna dla każdego. Wypożyczalnia łódek bez wymaganego patentu — relaks, przyroda i Warszawa z wody.',
    color: '#ef4444',
    colorDim: 'rgba(239,68,68,0.1)',
    category: 'Rekreacja wodna',
    icon: '⛵',
    light: false,
  },
  {
    id: '03',
    name: 'Wisła Express',
    domain: 'wislaexpress.waw.pl',
    tagline: 'Taksówka wodna w Warszawie',
    description:
      'Nowoczesna taksówka wodna na Wiśle. Szybki, komfortowy i ekologiczny transport miejski z nurtem rzeki.',
    color: '#dc2626',
    colorDim: 'rgba(220,38,38,0.1)',
    category: 'Transport',
    icon: '🚤',
    light: false,
  },
  {
    id: '04',
    name: 'BestShirt',
    domain: 'bestshirt.pl',
    tagline: 'Odzież firmowa z nadrukiem',
    description:
      'Produkcja i personalizacja odzieży reklamowej. Koszulki, bluzy, akcesoria — szybko, w najwyższej jakości.',
    color: '#dc2626',
    colorDim: 'rgba(220,38,38,0.08)',
    category: 'Produkcja & Moda',
    icon: '✦',
    light: true,
  },
]

export default function App() {
  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-logo">
          <span className="logo-gpi">GPI</span>
          <span className="logo-projekt">PROJEKT</span>
        </div>
        <div className="nav-links">
          <a href="tel:+48536899899">+48 536 899 899</a>
          <a href="mailto:kontakt@gpiprojekt.pl">kontakt@gpiprojekt.pl</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-atmosphere" />
        <WaterLines />
        <div className="hero-content">
          <p className="hero-eyebrow">GPI PROJEKT P.S.A. · Warszawa</p>
          <h1 className="hero-title">
            <span className="title-solid">NASZE</span>
            <span className="title-outline">PORTFOLIO</span>
          </h1>
          <p className="hero-sub">
            Projekty zakorzenione w Warszawie — rzeka, miasto, ludzie.
          </p>
        </div>
        <div className="hero-cta">
          <span>odkryj projekty</span>
          <div className="cta-line" />
        </div>
      </section>

      <section className="projects-section">
        <div className="section-header">
          <span className="eyebrow">Projekty spółki</span>
          <div className="header-rule" />
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <a
              key={p.id}
              href={`https://${p.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`card${p.light ? ' card--light' : ''}`}
              style={
                {
                  '--c': p.color,
                  '--cdim': p.colorDim,
                  animationDelay: `${i * 0.12}s`,
                } as React.CSSProperties
              }
            >
              <div className="card-glow" />
              <div className="card-top">
                <span className="card-num">{p.id}</span>
                <span className="card-tag">{p.category}</span>
              </div>
              <div className="card-icon">{p.icon}</div>
              <h2 className="card-name">{p.name}</h2>
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
            Spółka łącząca odważne projekty ze spoiwem Wisły. Od sportu po
            transport, od rekreacji po modę — tworzymy w Warszawie.
          </p>
          <div className="about-data">
            {[
              ['NIP', '9522229976'],
              ['KRS', '0000975759'],
              ['Siedziba', 'ul. Cyklamenowa 7, 05-077 Warszawa'],
              ['Telefon', '+48 536 899 899'],
              ['Email', 'kontakt@gpiprojekt.pl'],
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
          <div className="nav-logo">
            <span className="logo-gpi">GPI</span>
            <span className="logo-projekt">PROJEKT P.S.A.</span>
          </div>
          <div className="footer-contacts">
            <a href="tel:+48536899899">+48 536 899 899</a>
            <a href="mailto:kontakt@gpiprojekt.pl">kontakt@gpiprojekt.pl</a>
          </div>
        </div>
        <p className="footer-copy">
          © 2025 GPI PROJEKT P.S.A. · Wszelkie prawa zastrzeżone.
        </p>
      </footer>
    </div>
  )
}

function WaterLines() {
  return (
    <svg
      className="water-svg"
      viewBox="0 0 1440 400"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          className="wl"
          style={{ animationDelay: `${i * 1.4}s` } as React.CSSProperties}
          d={`M0,${200 + i * 30}
            C240,${185 + i * 30} 480,${220 + i * 30} 720,${200 + i * 30}
            C960,${180 + i * 30} 1200,${215 + i * 30} 1440,${200 + i * 30}
            L1440,400 L0,400 Z`}
        />
      ))}
    </svg>
  )
}
