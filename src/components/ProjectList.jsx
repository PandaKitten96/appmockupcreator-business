import React from 'react'
import { useEditorStore } from '../store/editorStore'

export default function ProjectList() {
  const { projects, loadProject } = useEditorStore()

  return (
    <div className="project-list">
      <h3>Saved projects</h3>

      {projects.length === 0 ? (
        <p className="empty-state">No saved mockups yet.</p>
      ) : (
        <div className="project-stack">
          {projects.map((project) => (
            <button
              key={project.id}
              className="project-item"
              onClick={() => loadProject(project)}
            >
              <div className="project-item-top">
                <strong>{project.title}</strong>
                <span>{project.deviceType || 'iphone'}</span>
              </div>
              <small>
                {project.updatedAt ? new Date(project.updatedAt).toLocaleDateString() : 'Saved'}
              </small>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
