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
    | 'whiteSmoke'
    | 'gray'
  text: 'paragraph' | 'span'
}

export const fillColors: Record<Theme['color'], string> = {
  black: '#000000',
  background: '#071013',
  foreground: '#E0F2FE',
  transparent: 'transparent',
  white: '#FFFFFF',
  whiteSmoke: '#f8f9fa',
  gray: '#888888',

  // buttons
  primary: '#0070F3',
  'primary-light': '#3291ff',
}

export const textColors: Record<Theme['color'], string> = {
  background: 'text-background',
  black: 'text-black',
  foreground: 'text-foreground',
  transparent: 'text-transparent',
  white: 'text-white',
  whiteSmoke: 'text-whiteSmoke',
  gray: 'text-gray',

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

export enum LinkVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  OUTLINE = 'outline',
}
