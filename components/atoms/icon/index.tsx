import { FlagPEIcon, FlagUSIcon, NavArrowIcon } from '../../../assets/icons'
import { colors, IconsProps, Theme } from '../../../types'

export enum IconType {
  FLAG_PE = 'flag-pe',
  FLAG_US = 'flag-us',
  NAV_ARROW = 'nav-arrow',
}

export interface IconProps {
  color?: Theme['color']
  direction?: IconsProps['direction']
  size?: IconsProps['size']
  type: IconType
}

const icons: Record<IconType, (props: IconsProps) => JSX.Element> = {
  [IconType.FLAG_PE]: (props) => <FlagPEIcon {...props} />,
  [IconType.FLAG_US]: (props) => <FlagUSIcon {...props} />,
  [IconType.NAV_ARROW]: (props) => <NavArrowIcon {...props} />,
}

export const Icon = ({ type, ...rest }: IconProps) => {
  const getIcon = icons[type]

  return getIcon({ ...rest, color: colors[rest.color ?? 'primary'] })
}
