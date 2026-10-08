import React from 'react'

const templates = [
  { id: 'launch', name: 'Launch', accent: '#7b9cff' },
  { id: 'product', name: 'Product', accent: '#55d4c2' },
  { id: 'analytics', name: 'Analytics', accent: '#fbbf24' },
  { id: 'saas', name: 'SaaS', accent: '#f87171' }
]

export default function TemplateGallery({ onSelect }) {
  return (
    <div className="template-gallery">
      <h3>Templates</h3>

      <div className="template-grid">
        {templates.map((template) => (
          <button
            key={template.id}
            className="template-card"
            onClick={() => onSelect(template.id)}
            style={{ borderColor: template.accent }}
          >
            <span className="template-dot" style={{ background: template.accent }} />
            {template.name}
          </button>
        ))}
      </div>
    </div>
  )
}
