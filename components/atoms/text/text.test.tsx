import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { mockText } from '../../../mocks'

import { Text } from '.'

describe('atoms/Text', () => {
  it('should render a simple text', () => {
    render(<Text {...mockText} />)

    const description = screen.getByText(mockText.label ?? '')

    expect(description).toBeInTheDocument()
  })
})
