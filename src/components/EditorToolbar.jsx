import React from 'react'
import { useEditorStore } from '../store/editorStore'
import { THEMES } from '../store/editorStore'
import { DEVICES } from '../lib/devicePresets'

export default function EditorToolbar() {
  const {
    deviceType,
    theme,
    project,
    setDeviceType,
    setTheme,
    updateProject,
    saveCurrentProject
  } = useEditorStore()

  return (
    <div className="editor-toolbar">
      <div className="toolbar-section">
        <label>Device</label>
        <select
          value={deviceType}
          onChange={(e) => setDeviceType(e.target.value)}
          className="toolbar-select"
        >
          {Object.entries(DEVICES).map(([key, device]) => (
            <option key={key} value={key}>
              {device.name}
            </option>
          ))}
        </select>
      </div>

      <div className="toolbar-section">
        <label>Theme</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="toolbar-select"
        >
          {Object.entries(THEMES).map(([key, themeData]) => (
            <option key={key} value={key}>
              {themeData.name}
            </option>
          ))}
        </select>
      </div>

      <div className="toolbar-section">
        <label>App title</label>
        <input
          type="text"
          value={project.title}
          onChange={(e) => updateProject({ title: e.target.value })}
          className="toolbar-input"
        />
      </div>

      <div className="toolbar-section">
        <label>Tagline</label>
        <input
          type="text"
          value={project.subtitle}
          onChange={(e) => updateProject({ subtitle: e.target.value })}
          className="toolbar-input"
        />
      </div>

      <div className="toolbar-section">
        <label>CTA text</label>
        <input
          type="text"
          value={project.mainText}
          onChange={(e) => updateProject({ mainText: e.target.value })}
          className="toolbar-input"
        />
      </div>

      <button className="btn btn-primary full-width" onClick={saveCurrentProject}>
        Save project
      </button>
    </div>
  )
}
