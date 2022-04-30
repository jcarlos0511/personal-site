import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = (props: ButtonProps) => {
  return <button {...props}>Button label changes.tsx</button>
}
