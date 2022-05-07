import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { mockHeading } from '../../../mocks'

import { Heading } from '.'

describe('atoms/Heading', () => {
  it('should render a h1 label', () => {
    render(<Heading {...mockHeading} />)

    const headingText = screen.getByText('Heading 1')

    expect(headingText).toBeInTheDocument()
  })
})
