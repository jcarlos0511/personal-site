import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react'

import { Button } from '.'

describe('atoms/button', () => {
  it('should shows proper label when rendered', () => {
    render(<Button label="Primary" />)
    const button = screen.getByText('Primary')

    fireEvent.click(button)
    expect(button).toBeInTheDocument()
  })

  it('should have called once when button is clicked', () => {
    const handleClick = jest.fn()

    render(<Button label="Primary" onClick={handleClick} />)
    const button = screen.getByRole('button')

    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
