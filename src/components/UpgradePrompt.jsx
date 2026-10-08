import React from 'react'
import { useEditorStore } from '../store/editorStore'

export default function UpgradePrompt() {
  return (
    <div className="upgrade-card">
      <div className="upgrade-badge">Pro</div>
      <h3>Upgrade for more power</h3>
      <ul>
        <li>Unlimited mockups</li>
        <li>Premium templates</li>
        <li>Higher-res exports</li>
        <li>Team sharing</li>
      </ul>
      <button className="btn btn-primary full-width">Start Pro</button>
    </div>
  )
}
