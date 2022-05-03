import { SVGProps } from 'react'

export type Theme = {
  color:
    | 'background'
    | 'black'
    | 'foreground'
    | 'primary'
    | 'primary-light'
    | 'transparent'
    | 'white'
}

export const colors: Record<Theme['color'], string> = {
  background: '#1E1E1E',
  black: '#000000',
  foreground: '#E0F2FE',
  transparent: 'transparent',
  white: '#FFFFFF',

  primary: '#0070F3',
  'primary-light': '#3291ff',
}

export type Direction = 'up' | 'down' | 'left' | 'right'

export const classesDirection: Record<Direction, string> = {
  down: 'rotate-180',
  left: '-rotate-90',
  right: 'rotate-90',
  up: '',
}
export interface IconsProps extends SVGProps<SVGSVGElement> {
  color?: string
  direction?: Direction
  size?: number
}
