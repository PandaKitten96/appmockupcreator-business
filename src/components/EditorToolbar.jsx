import React from 'react'
import { useEditorStore, THEMES } from '../store/editorStore'
import { DEVICES } from '../lib/devicePresets'

export default function EditorToolbar() {
  const { deviceType, theme, setDeviceType, setTheme, updateProject, project } = useEditorStore()

  return (
    <div className="editor-toolbar">
      {/* Device selector */}
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

      {/* Theme selector */}
      <div className="toolbar-section">
        <label>Theme</label>
        <select value={theme} onChange={(e) => setTheme(e.target.value)} className="toolbar-select">
          {Object.entries(THEMES).map(([key, themeData]) => (
            <option key={key} value={key}>
              {themeData.name}
            </option>
          ))}
        </select>
      </div>

      {/* Text editor */}
      <div className="toolbar-section">
        <label>App Title</label>
        <input
          type="text"
          value={project.title}
          onChange={(e) => updateProject({ title: e.target.value })}
          className="toolbar-input"
          placeholder="Enter app name"
        />
      </div>

      <div className="toolbar-section">
        <label>Tagline</label>
        <input
          type="text"
          value={project.subtitle}
          onChange={(e) => updateProject({ subtitle: e.target.value })}
          className="toolbar-input"
          placeholder="Enter tagline"
        />
      </div>

      <div className="toolbar-section">
        <label>CTA Text</label>
        <input
          type="text"
          value={project.mainText}
          onChange={(e) => updateProject({ mainText: e.target.value })}
          className="toolbar-input"
          placeholder="Enter button text"
        />
      </div>
    </div>
  )
}
