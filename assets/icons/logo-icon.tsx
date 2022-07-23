import { IconsProps } from '../../types'

export const LogoIcon = ({ size = 48, ...rest }: IconsProps) => {
  return (
    <svg
      aria-label="logo icon"
      fill="none"
      height={size}
      viewBox="0 0 454 458"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#a)">
        <path d="M0 0h454.889v458.582H0z" fill="#071013" />
        <path
          d="M364.347 67.565h-304.5v28.362h139.5v221.138l-141-84v42l186 111.5V95.927h56l64-28.362Z"
          fill="url(#b)"
        />
        <path
          d="m364.19 81.565-303.5 138 303.5 184v-36.5l-237.519-144.5 237.519-107v-34Z"
          fill="#fff"
        />
      </g>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="b"
          x1={137.853}
          x2={480.985}
          y1={40.749}
          y2={192.457}
        >
          <stop stopColor="#56BBFF" />
          <stop offset={0.182} stopColor="#449CDC" />
          <stop offset={0.415} stopColor="#2F78B4" />
          <stop offset={0.846} stopColor="#132D4D" />
        </linearGradient>
        <clipPath id="a">
          <path d="M0 0h454.889v458.582H0z" fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  )
}
