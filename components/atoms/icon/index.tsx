import { FlagPEIcon, FlagUSIcon, NavArrowIcon } from '../../../assets/icons'
import { fillColors, IconsProps, Theme } from '../../../types'

export type IconType = 'flag-PE' | 'flag-US' | 'nav-arrow'

export interface IconProps {
  color?: Theme['color']
  direction?: IconsProps['direction']
  size?: IconsProps['size']
  type: IconType
}

const icons: Record<IconType, (props: IconsProps) => JSX.Element> = {
  'flag-PE': (props) => <FlagPEIcon {...props} />,
  'flag-US': (props) => <FlagUSIcon {...props} />,
  'nav-arrow': (props) => <NavArrowIcon {...props} />,
}

export const Icon = ({ type, ...rest }: IconProps) => {
  const getIcon = icons[type]

  return getIcon({ ...rest, color: fillColors[rest.color ?? 'primary'] })
}
