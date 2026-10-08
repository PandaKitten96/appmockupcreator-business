const STORAGE_KEY = 'appmockupcreator-projects'

export const saveProjects = (projects) => {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
}

export const getProjects = () => {
  if (typeof window === 'undefined') return []
  const raw = localStorage.getItem(STORAGE_KEY)
  return raw ? JSON.parse(raw) : []
}

export const saveSingleProject = (project) => {
  const existing = getProjects()
  const index = existing.findIndex((p) => p.id === project.id)

  if (index >= 0) {
    existing[index] = project
  } else {
    existing.unshift(project)
  }

  saveProjects(existing)
  return existing
}
