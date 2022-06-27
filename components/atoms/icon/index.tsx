import {
  FlagPEIcon,
  FlagUSIcon,
  LogoIcon,
  NavArrowIcon,
  SunIcon,
} from '../../../assets/icons'
import { fillColors, IconsProps, Theme } from '../../../types'

export type IconType = 'flag-PE' | 'flag-US' | 'logo' | 'nav-arrow' | 'sun'

export interface IconProps {
  color?: Theme['color']
  direction?: IconsProps['direction']
  size?: IconsProps['size']
  type: IconType
}

const icons: Record<IconType, (props: IconsProps) => JSX.Element> = {
  'flag-PE': (props) => <FlagPEIcon {...props} />,
  'flag-US': (props) => <FlagUSIcon {...props} />,
  logo: (props) => <LogoIcon {...props} />,
  'nav-arrow': (props) => <NavArrowIcon {...props} />,
  sun: (props) => <SunIcon {...props} />,
}

export const Icon = ({ type, ...rest }: IconProps) => {
  const getIcon = icons[type]

  return getIcon({ ...rest, color: fillColors[rest.color ?? 'primary'] })
}
