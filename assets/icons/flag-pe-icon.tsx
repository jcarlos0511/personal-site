import { IconsProps } from '../../types'

export const FlagPEIcon = ({ size = 24, ...rest }: IconsProps) => {
  return (
    <svg
      aria-label="flag-PE icon"
      fill="none"
      height={size}
      viewBox="0 0 26 26"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M13 26c7.18 0 13-5.82 13-13S20.18 0 13 0 0 5.82 0 13s5.82 13 13 13Z"
        fill="#F0F0F0"
      />
      <path
        d="M26 13C26 7.41 22.472 2.645 17.522.809v24.383C22.472 23.355 26 18.59 26 13ZM0 13c0 5.59 3.528 10.355 8.478 12.191V.81C3.528 2.645 0 7.41 0 13Z"
        fill="#D80027"
      />
    </svg>
  )
}
