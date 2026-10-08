import React, { useState } from 'react'
import { useEditorStore } from '../store/editorStore'
import MockupCanvas from './MockupCanvas'
import EditorToolbar from './EditorToolbar'
import QuickSelect from './QuickSelect'

export default function Editor() {
  const { deviceType, theme, setDeviceType, setTheme } = useEditorStore()
  const [showToolbar, setShowToolbar] = useState(true)

  return (
    <div className="editor-layout">
      {/* Header */}
      <header className="editor-header">
        <div className="header-content">
          <h1>✨ AppMockupCreator</h1>
          <p>Create beautiful mockups in one minute</p>
        </div>
        <button className="toolbar-toggle" onClick={() => setShowToolbar(!showToolbar)}>
          {showToolbar ? '📊 Hide Controls' : '📊 Show Controls'}
        </button>
      </header>

      <div className="editor-main">
        {/* Left panel */}
        {showToolbar && (
          <aside className="editor-sidebar">
            <div className="sidebar-content">
              <h2>Customize</h2>
              <EditorToolbar />
            </div>
          </aside>
        )}

        {/* Center canvas */}
        <main className="editor-canvas">
          <MockupCanvas />
        </main>

        {/* Right panel */}
        <aside className="editor-quick">
          <div className="quick-content">
            <QuickSelect
              onDeviceChange={setDeviceType}
              onThemeChange={setTheme}
              currentDevice={deviceType}
              currentTheme={theme}
            />
          </div>
        </aside>
      </div>
    </div>
  )
}
