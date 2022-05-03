import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import { Icon, IconType } from '.'

describe('atoms/at-icon', () => {
  it('should render a flag icon', () => {
    render(<Icon type={IconType.FLAG_PE} />)
    const svgNode = screen.getByLabelText('flag-PE icon')

    expect(svgNode).toBeInTheDocument()
  })
})
