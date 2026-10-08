import { create } from 'zustand'

export const useEditorStore = create((set, get) => ({
  deviceType: 'iphone',
  theme: 'modern-blue',
  project: {
    title: 'My App',
    subtitle: 'Launch your product beautifully',
    mainText: 'Built to convert',
    backgroundColor: '#0b1020',
    textColor: '#edf2ff',
    accentColor: '#7b9cff'
  },
  setDeviceType: (device) => set({ deviceType: device }),
  setTheme: (theme) => set({ theme }),
  updateProject: (updates) =>
    set((state) => ({
      project: { ...state.project, ...updates }
    })),
  resetProject: () =>
    set({
      deviceType: 'iphone',
      theme: 'modern-blue',
      project: {
        title: 'My App',
        subtitle: 'Launch your product beautifully',
        mainText: 'Built to convert',
        backgroundColor: '#0b1020',
        textColor: '#edf2ff',
        accentColor: '#7b9cff'
      }
    })
}))

export const THEMES = {
  'modern-blue': {
    name: 'Modern Blue',
    bg: '#0b1020',
    text: '#edf2ff',
    accent: '#7b9cff',
    secondary: '#55d4c2'
  },
  'dark-minimal': {
    name: 'Dark Minimal',
    bg: '#0a0a0a',
    text: '#ffffff',
    accent: '#000000',
    secondary: '#404040'
  },
  'gradient-pro': {
    name: 'Gradient Pro',
    bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    text: '#ffffff',
    accent: '#667eea',
    secondary: '#764ba2'
  },
  'sunset-glow': {
    name: 'Sunset Glow',
    bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    text: '#ffffff',
    accent: '#f5576c',
    secondary: '#f093fb'
  },
  'ocean-calm': {
    name: 'Ocean Calm',
    bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    text: '#ffffff',
    accent: '#00d4ff',
    secondary: '#0099ff'
  }
}
