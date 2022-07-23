import { IconsProps } from '../../types'

export const SunIcon = ({ color, size = 24, ...rest }: IconsProps) => {
  return (
    <svg
      aria-label="sun icon"
      fill="none"
      height={size}
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM22 12h1M12 2V1M12 23v-1M20 20l-1-1M20 4l-1 1M4 20l1-1M4 4l1 1M1 12h1"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
