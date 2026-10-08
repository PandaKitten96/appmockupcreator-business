import { create } from 'zustand'
import { getProjects, saveSingleProject } from '../lib/projectStorage'

const TEMPLATE_PRESETS = {
  launch: {
    title: 'Launch faster',
    subtitle: 'Ship your next big idea',
    mainText: 'Get started',
    backgroundColor: '#0b1020',
    textColor: '#edf2ff',
    accentColor: '#7b9cff'
  },
  product: {
    title: 'Product built to convert',
    subtitle: 'Turn attention into action',
    mainText: 'See the product',
    backgroundColor: '#101827',
    textColor: '#f8fafc',
    accentColor: '#55d4c2'
  },
  analytics: {
    title: 'Track what matters',
    subtitle: 'Beautiful numbers, real clarity',
    mainText: 'View dashboard',
    backgroundColor: '#111827',
    textColor: '#edf2ff',
    accentColor: '#fbbf24'
  },
  saas: {
    title: 'Simple, smart, scalable',
    subtitle: 'Built for fast-moving teams',
    mainText: 'Start free',
    backgroundColor: '#0f172a',
    textColor: '#f8fafc',
    accentColor: '#f87171'
  }
}

export const useEditorStore = create((set, get) => ({
  deviceType: 'iphone',
  theme: 'modern-blue',
  project: {
    id: crypto.randomUUID(),
    title: 'My App',
    subtitle: 'Launch your product beautifully',
    mainText: 'Built to convert',
    backgroundColor: '#0b1020',
    textColor: '#edf2ff',
    accentColor: '#7b9cff'
  },
  projects: getProjects(),

  setDeviceType: (device) => set({ deviceType: device }),
  setTheme: (theme) => set({ theme }),

  updateProject: (updates) =>
    set((state) => ({
      project: { ...state.project, ...updates }
    })),

  saveCurrentProject: () => {
    const state = get()
    const nextProject = {
      ...state.project,
      deviceType: state.deviceType,
      theme: state.theme,
      updatedAt: new Date().toISOString()
    }

    const saved = saveSingleProject(nextProject)
    set({ projects: saved })
    return nextProject
  },

  loadProject: (project) => {
    set({
      project: {
        ...project,
        id: project.id || crypto.randomUUID()
      },
      deviceType: project.deviceType || 'iphone',
      theme: project.theme || 'modern-blue'
    })
  },

  applyTemplate: (templateId) => {
    const preset = TEMPLATE_PRESETS[templateId] || TEMPLATE_PRESETS.launch

    set((state) => ({
      project: {
        ...state.project,
        ...preset,
        id: state.project.id || crypto.randomUUID()
      }
    }))
  },

  resetProject: () =>
    set({
      deviceType: 'iphone',
      theme: 'modern-blue',
      project: {
        id: crypto.randomUUID(),
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
