import React from 'react'
import { useEditorStore } from '../store/editorStore'
import MockupCanvas from './MockupCanvas'
import TemplateGallery from './TemplateGallery'
import ProjectList from './ProjectList'
import UpgradePrompt from './UpgradePrompt'

export default function Editor({ onBack }) {
  const { deviceType, theme, setDeviceType, setTheme, applyTemplate } = useEditorStore()

  return (
    <div className="editor-layout">
      <header className="editor-header">
        <div className="header-content">
          <h1>AppMockupCreator</h1>
          <p>Create beautiful app mockups in 60 seconds</p>
        </div>

        <div className="header-actions">
          <button className="btn btn-secondary" onClick={onBack}>Back to dashboard</button>
          <button className="toolbar-toggle" onClick={() => window.location.reload()}>
            New project
          </button>
        </div>
      </header>

      <div className="editor-main">
        <aside className="editor-sidebar">
          <div className="sidebar-content">
            <TemplateGallery onSelect={applyTemplate} />
            <ProjectList />
            <UpgradePrompt />
          </div>
        </aside>

        <main className="editor-canvas">
          <MockupCanvas />
        </main>

        <aside className="editor-quick">
          <div className="quick-content">
            <h3>Quick controls</h3>

            <div className="quick-section">
              <label>Device</label>
              <select
                value={deviceType}
                className="toolbar-select"
                onChange={(e) => setDeviceType(e.target.value)}
              >
                <option value="iphone">iPhone</option>
                <option value="iphoneSE">iPhone SE</option>
                <option value="android">Android</option>
                <option value="ipadPro">iPad Pro</option>
                <option value="desktop">Desktop</option>
              </select>
            </div>

            <div className="quick-section">
              <label>Theme</label>
              <select
                value={theme}
                className="toolbar-select"
                onChange={(e) => setTheme(e.target.value)}
              >
                <option value="modern-blue">Modern Blue</option>
                <option value="dark-minimal">Dark Minimal</option>
                <option value="gradient-pro">Gradient Pro</option>
                <option value="sunset-glow">Sunset Glow</option>
                <option value="ocean-calm">Ocean Calm</option>
              </select>
            </div>

            <div className="quick-section">
              <label>Tips</label>
              <div className="tip-box">
                Keep your headline short and your CTA visible.
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
