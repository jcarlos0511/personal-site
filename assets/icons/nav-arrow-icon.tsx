import { classesDirection, IconsProps } from '../../types'

export const NavArrowIcon = ({
  color,
  direction = 'up',
  size = 24,
  ...rest
}: IconsProps) => {
  return (
    <svg
      aria-label="nav-arrow icon"
      className={`${classesDirection[direction]} ${rest.className ?? ''}`}
      fill="none"
      height={size}
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="m6 15 6-6 6 6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
