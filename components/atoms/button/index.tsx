import { ButtonHTMLAttributes } from 'react'

import { Icon, IconProps } from '../icon'

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
    'border-primary bg-primary text-foreground hover:text-white shadow-primary-light hover:shadow-primary-light hover:shadow-md hover:-translate-y-0.5',
  [ButtonVariant.SECONDARY]:
    'border-transparent text-background hover:text-black hover:shadow-md hover:-translate-y-0.5',
  [ButtonVariant.TERTIARY]:
    'border-background bg-background text-foreground hover:text-white shadow-background hover:shadow-background hover:shadow-md hover:-translate-y-0.5',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconProps
  iconLeft?: IconProps
  iconRight?: IconProps
  label?: string
  size?: ButtonSize
  variant?: ButtonVariant
}

export const Button = ({
  icon,
  iconLeft,
  iconRight,
  label = '',
  size = ButtonSize.NORMAL,
  variant = ButtonVariant.PRIMARY,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-between gap-2 rounded border px-3 shadow-sm transition-all ease-in-out  ${
        classesButtonSize[size]
      } ${classesButtonVariant[variant]} ${rest.className ?? ''}`}
      {...rest}
    >
      {iconLeft && (
        <span>
          <Icon {...iconLeft} />
        </span>
      )}

      {icon ? (
        <span>
          <Icon {...icon} />
        </span>
      ) : (
        <span className="inline-block truncate font-JetBrainsMono text-sm font-medium tracking-wide">
          {label}
        </span>
      )}

      {iconRight && (
        <span>
          <Icon {...iconRight} />
        </span>
      )}
    </button>
  )
}
