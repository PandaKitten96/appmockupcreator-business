import React, { useState } from 'react'
import HomePage from './components/HomePage'
import Dashboard from './components/Dashboard'
import Editor from './components/Editor'
import './styles.css'

export default function App() {
  const [screen, setScreen] = useState('home')

  return (
    <div className="app">
      {screen === 'home' ? (
        <HomePage onStart={() => setScreen('dashboard')} />
      ) : screen === 'dashboard' ? (
        <Dashboard onOpenEditor={() => setScreen('editor')} onBack={() => setScreen('home')} />
      ) : (
        <Editor onBack={() => setScreen('dashboard')} />
      )}
    </div>
  )
}
