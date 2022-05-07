import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Icon } from '.'

describe('atoms/Icon', () => {
  it('should render a flag icon', () => {
    render(<Icon type="flag-PE" />)

    const svgNode = screen.getByLabelText('flag-PE icon')

    expect(svgNode).toBeInTheDocument()
  })
})
