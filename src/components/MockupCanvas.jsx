import React, { useRef } from 'react'
import { useEditorStore, THEMES } from '../store/editorStore'
import { exportMockup } from '../lib/exportUtils'
import { DEVICES } from '../lib/devicePresets'

export default function MockupCanvas() {
  const { deviceType, theme, project } = useEditorStore()
  const canvasRef = useRef(null)
  const themeData = THEMES[theme]
  const device = DEVICES[deviceType]

  const handleExport = async (format = 'png') => {
    if (canvasRef.current) {
      const success = await exportMockup(canvasRef.current, format, 3)
      if (success) {
        console.log(`Exported as ${format.toUpperCase()}`)
      }
    }
  }

  const canvasStyle = {
    width: `${device.width}px`,
    height: `${device.height}px`,
    borderRadius: device.radius,
    background: themeData.bg,
    color: themeData.text,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '40px 24px',
    boxShadow: '0 40px 80px rgba(0,0,0,0.4)',
    overflow: 'hidden',
    position: 'relative'
  }

  return (
    <div className="mockup-container">
      <div className="mockup-wrapper">
        <div ref={canvasRef} style={canvasStyle}>
          {/* Notch for iPhone */}
          {device.bezels === 'notch' && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '150px',
                height: '28px',
                background: '#000',
                borderRadius: '0 0 24px 24px'
              }}
            />
          )}

          {/* Status bar */}
          <div
            style={{
              fontSize: '12px',
              opacity: 0.6,
              marginBottom: '20px',
              textAlign: 'center'
            }}
          >
            9:41
          </div>

          {/* Main content */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {/* Title */}
            <h1
              contentEditable
              suppressContentEditableWarning
              style={{
                fontSize: deviceType === 'desktop' ? '56px' : '28px',
                fontWeight: 900,
                margin: '0 0 16px 0',
                lineHeight: 1.2,
                outline: 'none'
              }}
            >
              {project.title}
            </h1>

            {/* Subtitle */}
            <p
              contentEditable
              suppressContentEditableWarning
              style={{
                fontSize: deviceType === 'desktop' ? '24px' : '16px',
                opacity: 0.7,
                margin: '0 0 32px 0',
                outline: 'none'
              }}
            >
              {project.subtitle}
            </p>

            {/* Main text/CTA */}
            <button
              style={{
                padding: '14px 32px',
                background: themeData.accent,
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 700,
                cursor: 'pointer',
                width: 'fit-content'
              }}
            >
              {project.mainText}
            </button>
          </div>

          {/* Footer */}
          <div
            style={{
              fontSize: '12px',
              opacity: 0.5,
              marginTop: '40px',
              textAlign: 'center'
            }}
          >
            Made with AppMockupCreator
          </div>
        </div>
      </div>

      {/* Export buttons */}
      <div className="export-controls">
        <button onClick={() => handleExport('png')} className="btn btn-primary">
          📥 Export PNG
        </button>
        <button onClick={() => handleExport('jpg')} className="btn btn-secondary">
          📥 Export JPG
        </button>
      </div>
    </div>
  )
}
