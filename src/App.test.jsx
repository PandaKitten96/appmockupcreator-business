import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the main hero heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /create app mockups in minutes/i })).toBeInTheDocument()
  })

  it('renders the pricing section', () => {
    render(<App />)
    expect(screen.getByText(/simple pricing for every stage/i)).toBeInTheDocument()
    expect(screen.getByText(/pro/i)).toBeInTheDocument()
    expect(screen.getByText(/team/i)).toBeInTheDocument()
  })
})
