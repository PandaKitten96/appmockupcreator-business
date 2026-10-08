const features = [
  {
    icon: '✦',
    title: 'Custom device frames',
    description: 'Create polished mockups for iPhone, Android, and tablet screens.'
  },
  {
    icon: '◌',
    title: 'Brand styling',
    description: 'Adjust colors, gradients, backgrounds, and text to match your product.'
  },
  {
    icon: '⬢',
    title: 'Fast exports',
    description: 'Generate shareable visuals for launches, decks, and landing pages.'
  }
]

const pricing = [
  {
    name: 'Free',
    price: '$0',
    cta: 'Get started',
    details: ['3 projects', '5 exports/month', 'Basic templates', 'Watermarked exports'],
    featured: false
  },
  {
    name: 'Pro',
    price: '$19',
    cta: 'Start Pro',
    details: ['Unlimited projects', 'Premium templates', 'High-res exports', 'Commercial rights'],
    featured: true
  },
  {
    name: 'Team',
    price: '$49',
    cta: 'Contact sales',
    details: ['5 seats', 'Shared workspaces', 'Team template library', 'Priority support'],
    featured: false
  }
]

export default function App() {
  return (
    <>
      <header className="topbar">
        <div className="container nav">
          <div className="brand">AppMockupCreator</div>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="nav-actions">
            <a className="btn btn-secondary" href="#pricing">Pricing</a>
            <a className="btn btn-primary" href="#">Start free</a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero section">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">Design faster. Launch smarter.</div>
              <h1>Create app mockups in minutes.</h1>
              <p className="hero-copy">
                Build polished product visuals for launches, landing pages, investor decks,
                and marketing campaigns without hiring a designer.
              </p>
              <div className="cta-row">
                <a className="btn btn-primary" href="#pricing">Start free</a>
                <a className="btn btn-secondary" href="#">Watch demo</a>
              </div>
              <div className="stats">
                <div>
                  <strong>100+</strong>
                  <span>mockup layouts</span>
                </div>
                <div>
                  <strong>1-click</strong>
                  <span>exports</span>
                </div>
                <div>
                  <strong>Free</strong>
                  <span>starter plan</span>
                </div>
              </div>
            </div>

            <div className="mockup-stage" aria-label="Mobile app mockup preview">
              <div className="phone left">
                <div className="screen">
                  <div className="statusbar">
                    <div className="dots">
                      <span className="dot" />
                      <span className="dot" />
                      <span className="dot" />
                    </div>
                    <span>9:41</span>
                  </div>
                  <div className="content">
                    <div className="big-card" />
                    <div className="big-card alt" />
                    <div className="small-grid">
                      <div className="small-card" />
                      <div className="small-card" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="phone right">
                <div className="screen">
                  <div className="statusbar">
                    <div className="dots">
                      <span className="dot" />
                      <span className="dot" />
                      <span className="dot" />
                    </div>
                    <span>9:41</span>
                  </div>
                  <div className="content">
                    <div className="big-card alt" />
                    <div className="big-card" />
                    <div className="small-card" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="container">
            <h2>Everything you need to show your app beautifully.</h2>
            <p className="section-copy">Design realistic product visuals for launches, decks, and marketing pages.</p>

            <div className="features-grid">
              {features.map(({ icon, title, description }) => (
                <article className="feature-card" key={title}>
                  <div className="feature-icon">{icon}</div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="section">
          <div className="container">
            <h2>Simple pricing for every stage.</h2>
            <p className="section-copy">Start free and scale when your product or team needs more.</p>

            <div className="pricing-grid">
              {pricing.map(({ name, price, cta, details, featured }) => (
                <article className={featured ? 'price-card featured' : 'price-card'} key={name}>
                  {featured && <span className="badge">Most popular</span>}
                  <h3>{name}</h3>
                  <div className="price">{price}<small>/ month</small></div>
                  <ul>
                    {details.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a href="#" className={featured ? 'btn btn-primary' : 'btn btn-secondary'}>{cta}</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="container">
            <h2>Built for product teams, founders, and creators.</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h4>Can I use it for client work?</h4>
                <p>Yes. Pro and Team plans include commercial-ready exports and flexible usage.</p>
              </div>
              <div className="faq-item">
                <h4>Can I export high-res assets?</h4>
                <p>Yes. Pro and Team plans include high-resolution export presets for launch assets.</p>
              </div>
              <div className="faq-item">
                <h4>Do you support team collaboration?</h4>
                <p>Yes. Team accounts include shared projects, collaborative workspaces, and template access.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-row">
          <div>© 2026 AppMockupCreator</div>
          <div>Built for app teams, founders, and creators.</div>
        </div>
      </footer>
    </>
  )
}
