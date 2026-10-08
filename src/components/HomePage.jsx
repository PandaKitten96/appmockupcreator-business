import React from 'react'

export default function HomePage({ onStart }) {
  return (
    <div className="homepage">
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Create app mockups in one minute</h1>
            <p>No design skills needed. Beautiful results, guaranteed.</p>
            <button className="btn btn-primary-large" onClick={onStart}>
              ✨ Start creating now
            </button>
          </div>
          <div className="hero-visual">
            <div className="phone-preview">
              <div className="phone-screen">
                <div className="phone-notch" />
                <div style={{ padding: '20px' }}>
                  <div className="skeleton" style={{ height: '20px', marginBottom: '10px' }} />
                  <div className="skeleton" style={{ height: '40px', marginBottom: '20px' }} />
                  <div
                    className="skeleton"
                    style={{
                      height: '44px',
                      backgroundColor: '#7b9cff',
                      borderRadius: '8px'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <h2>Why AppMockupCreator?</h2>
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">⚡</div>
            <h3>One minute</h3>
            <p>From blank to beautiful in 60 seconds</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🎨</div>
            <h3>Beautiful by default</h3>
            <p>Every mockup looks professional instantly</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📱</div>
            <h3>Any device</h3>
            <p>iPhone, Android, iPad, Desktop — all supported</p>
          </div>
          <div className="feature">
            <div className="feature-icon">💾</div>
            <h3>Easy export</h3>
            <p>PNG or JPG, high resolution, ready to share</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to create your first mockup?</h2>
        <button className="btn btn-primary-large" onClick={onStart}>
          ✨ Let's go
        </button>
      </section>
    </div>
  )
}
