import React, { useState } from 'react'
import HomePage from './components/HomePage'
import Editor from './components/Editor'
import './styles.css'

export default function App() {
  const [screen, setScreen] = useState('home')

  return (
    <div className="app">
      {screen === 'home' ? (
        <HomePage onStart={() => setScreen('editor')} />
      ) : (
        <Editor />
      )}
    </div>
  )
}
