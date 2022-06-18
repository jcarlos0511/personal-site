import { HTMLAttributes } from 'react'

import { textAlignment, textColors, Theme } from '../../../types'

const Paragraph = ({
  alignment = 'start',
  label = '',
  color = 'black',
  ...rest
}: Omit<TextProps, 'as'>) => {
  return (
    <div className={`${textAlignment[alignment]}`}>
      <p
        {...rest}
        className={`w-fit font-JetBrainsMono text-paragraph font-normal ${
          textColors[color]
        } ${rest.className ?? ''}`}
      >
        {label}
      </p>
    </div>
  )
}

const Span = ({
  alignment = 'start',
  label = '',
  color = 'black',
  ...rest
}: Omit<TextProps, 'as'>) => {
  return (
    <div className={`${textAlignment[alignment]}`}>
      <span
        {...rest}
        className={`w-fit font-JetBrainsMono text-paragraph font-normal ${
          textColors[color]
        } ${rest.className ?? ''}`}
      >
        {label}
      </span>
    </div>
  )
}

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
  as?: Theme['text']
  alignment?: Theme['alignment']
  color?: Theme['color']
  label?: string
}

const text: Record<
  Theme['text'],
  (props: Omit<TextProps, 'as'>) => JSX.Element
> = {
  paragraph: (props) => <Paragraph {...props} />,
  span: (props) => <Span {...props} />,
}

export const Text = ({ as = 'paragraph', ...rest }: TextProps) => {
  const getText = text[as]

  return getText(rest)
}
