import { HTMLAttributes } from 'react'

import { headingAlignment, textColors, Theme } from '../../../types'

const H1 = ({
  alignment = 'start',
  label = '',
  color = 'black',
  ...rest
}: Omit<HeadingProps, 'as'>) => {
  return (
    <div className={`${headingAlignment[alignment]}`}>
      <h1
        {...rest}
        className={`w-fit font-JetBrainsMono text-h1 font-medium ${
          textColors[color]
        } ${rest.className ?? ''}`}
      >
        {label}
      </h1>
    </div>
  )
}

const H2 = ({
  alignment = 'start',
  label = '',
  color = 'black',
  ...rest
}: Omit<HeadingProps, 'as'>) => {
  return (
    <div className={`${headingAlignment[alignment]}`}>
      <h2
        {...rest}
        className={`w-fit font-JetBrainsMono text-h2 font-medium ${
          textColors[color]
        } ${rest.className ?? ''}`}
      >
        {label}
      </h2>
    </div>
  )
}

const H3 = ({
  alignment = 'start',
  label = '',
  color = 'black',
  ...rest
}: Omit<HeadingProps, 'as'>) => {
  return (
    <div className={`${headingAlignment[alignment]}`}>
      <h3
        {...rest}
        className={`w-fit font-JetBrainsMono text-h3 font-medium ${
          textColors[color]
        } ${rest.className ?? ''}`}
      >
        {label}
      </h3>
    </div>
  )
}

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: Theme['heading']
  alignment?: Theme['alignment']
  color?: Theme['color']
  label?: string
}

const headings: Record<
  Theme['heading'],
  (props: Omit<HeadingProps, 'as'>) => JSX.Element
> = {
  h1: (props) => <H1 {...props} />,
  h2: (props) => <H2 {...props} />,
  h3: (props) => <H3 {...props} />,
}

export const Heading = ({ as = 'h1', ...rest }: HeadingProps) => {
  const getHeadings = headings[as]

  return getHeadings(rest)
}
