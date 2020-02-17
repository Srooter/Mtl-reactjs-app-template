import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'

test('renders Loading', () => {
  const { container } = render(<App />)
  const loadElement = container.querySelector('.lds-dual-ring')
  expect(loadElement).toBeInTheDocument()
})
