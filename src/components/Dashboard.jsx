import React from 'react'
import UpgradePrompt from './UpgradePrompt'
import { useEditorStore } from '../store/editorStore'

export default function Dashboard({ onOpenEditor, onBack }) {
  const { projects } = useEditorStore()

  return (
    <div className="dashboard-shell">
      <header className="dashboard-header">
        <div>
          <p className="kicker">Workspace</p>
          <h1>Dashboard</h1>
        </div>
        <div className="dashboard-actions">
          <button className="btn btn-secondary" onClick={onBack}>Back home</button>
          <button className="btn btn-primary" onClick={onOpenEditor}>New mockup</button>
        </div>
      </header>

      <div className="dashboard-grid">
        <aside className="dashboard-panel">
          <div className="panel-title">Templates</div>
          <div className="mini-template-grid">
            <div className="mini-template blue">Launch</div>
            <div className="mini-template teal">Product</div>
            <div className="mini-template gold">Analytics</div>
            <div className="mini-template coral">SaaS</div>
          </div>
        </aside>

        <main className="dashboard-main">
          <div className="dashboard-card create-card" onClick={onOpenEditor}>
            <div className="create-plus">＋</div>
            <div>
              <h3>Create a new mockup</h3>
              <p>Start from a blank canvas or a template</p>
            </div>
          </div>

          {projects.length === 0 ? (
            <div className="dashboard-card empty-card">
              <h3>No projects yet</h3>
              <p>Your recent mockups will appear here.</p>
            </div>
          ) : (
            projects.slice(0, 4).map((project) => (
              <button key={project.id} className="dashboard-card project-card" onClick={onOpenEditor}>
                <div>
                  <strong>{project.title}</strong>
                  <p>{project.subtitle}</p>
                </div>
                <span>{project.deviceType || 'iphone'}</span>
              </button>
            ))
          )}
        </main>

        <aside className="dashboard-side">
          <UpgradePrompt />
        </aside>
      </div>
    </div>
  )
}
