import { render, screen } from '@testing-library/react'
import App from './App'

describe('AppMockupCreator', () => {
  it('renders home page on load', () => {
    render(<App />)
    expect(screen.getByText(/create app mockups in one minute/i)).toBeInTheDocument()
  })

  it('has start button', () => {
    render(<App />)
    const buttons = screen.getAllByText(/start creating now/i)
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('displays features', () => {
    render(<App />)
    expect(screen.getByText(/one minute/i)).toBeInTheDocument()
    expect(screen.getByText(/beautiful by default/i)).toBeInTheDocument()
  })
})
