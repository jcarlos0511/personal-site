import { SVGProps } from 'react'

export type Theme = {
  alignment: 'start' | 'center' | 'end'
  heading: 'h1' | 'h2' | 'h3'
  color:
    | 'background'
    | 'black'
    | 'foreground'
    | 'primary'
    | 'primary-light'
    | 'transparent'
    | 'white'
  text: 'paragraph' | 'span'
}

export const fillColors: Record<Theme['color'], string> = {
  background: '#1E1E1E',
  black: '#000000',
  foreground: '#E0F2FE',
  transparent: 'transparent',
  white: '#FFFFFF',

  primary: '#0070F3',
  'primary-light': '#3291ff',
}

export const textColors: Record<Theme['color'], string> = {
  background: 'text-background',
  black: 'text-black',
  foreground: 'text-foreground',
  transparent: 'text-transparent',
  white: 'text-white',

  primary: 'text-primary',
  'primary-light': 'text-primary-light',
}

export const headingAlignment: Record<Theme['alignment'], string> = {
  start: 'w-full flex flex-row items-center justify-start',
  center: 'w-full flex flex-row items-center justify-center',
  end: 'w-full flex flex-row items-center justify-end',
}

export const textAlignment: Record<Theme['alignment'], string> = {
  start: 'text-left indent-8 whitespace-pre-line',
  center: 'text-center whitespace-pre-line',
  end: 'text-right whitespace-pre-line',
}

export type IconDirection = 'up' | 'down' | 'left' | 'right'

export const classesDirection: Record<IconDirection, string> = {
  down: 'rotate-180',
  left: '-rotate-90',
  right: 'rotate-90',
  up: '',
}
export interface IconsProps extends SVGProps<SVGSVGElement> {
  color?: string
  direction?: IconDirection
  size?: number
}
