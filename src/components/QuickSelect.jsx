import React from 'react'

const themePresets = [
  { id: 'modern-blue', name: 'Modern Blue', color: '#7b9cff' },
  { id: 'dark-minimal', name: 'Dark', color: '#ffffff' },
  { id: 'gradient-pro', name: 'Gradient', color: '#667eea' },
  { id: 'sunset-glow', name: 'Sunset', color: '#f5576c' },
  { id: 'ocean-calm', name: 'Ocean', color: '#00d4ff' }
]

const devices = [
  { id: 'iphone', name: '📱 iPhone' },
  { id: 'android', name: '🤖 Android' },
  { id: 'ipadPro', name: '📋 iPad' },
  { id: 'desktop', name: '🖥️ Desktop' }
]

export default function QuickSelect({ onDeviceChange, onThemeChange, currentDevice, currentTheme }) {
  return (
    <div className="quick-select">
      <div className="quick-section">
        <h3>Devices</h3>
        <div className="quick-buttons">
          {devices.map((device) => (
            <button
              key={device.id}
              className={`quick-btn ${currentDevice === device.id ? 'active' : ''}`}
              onClick={() => onDeviceChange(device.id)}
            >
              {device.name}
            </button>
          ))}
        </div>
      </div>

      <div className="quick-section">
        <h3>Themes</h3>
        <div className="quick-colors">
          {themePresets.map((theme) => (
            <button
              key={theme.id}
              className={`quick-color ${currentTheme === theme.id ? 'active' : ''}`}
              style={{ backgroundColor: theme.color }}
              onClick={() => onThemeChange(theme.id)}
              title={theme.name}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
