import { ButtonHTMLAttributes } from 'react'

export enum ButtonSize {
  SMALL = 'small',
  NORMAL = 'normal',
  LARGE = 'large',
}

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

const classesButtonSize: Record<ButtonSize, string> = {
  [ButtonSize.SMALL]: 'h-8',
  [ButtonSize.NORMAL]: 'h-10',
  [ButtonSize.LARGE]: 'h-12',
}

const classesButtonVariant: Record<ButtonVariant, string> = {
  [ButtonVariant.PRIMARY]:
    'border-primary bg-primary text-foreground hover:text-white shadow-primary-light hover:shadow-primary-light hover:shadow',
  [ButtonVariant.SECONDARY]:
    'border-background bg-background text-foreground hover:text-white shadow-background hover:shadow-background hover:shadow',
  [ButtonVariant.TERTIARY]:
    'border-transparent text-background hover:text-black hover:shadow-md',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string
  iconLeft?: string
  iconRight?: string
  label?: string
  size?: ButtonSize
  variant?: ButtonVariant
}

export const Button = ({
  icon = '',
  iconLeft = '',
  iconRight = '',
  label = '',
  size = ButtonSize.NORMAL,
  variant = ButtonVariant.PRIMARY,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center rounded border px-3 shadow-sm transition-all ease-in-out hover:-translate-y-0.5 ${
        classesButtonSize[size]
      } ${classesButtonVariant[variant]} ${rest.className ?? ''}`}
      {...rest}
    >
      {iconLeft && iconLeft}
      {icon ? (
        icon
      ) : (
        <span className="inline-block truncate font-JetBrainsMono text-sm font-medium">
          {label}
        </span>
      )}
      {iconRight && iconRight}
    </button>
  )
}
