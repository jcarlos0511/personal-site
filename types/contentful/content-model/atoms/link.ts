import { IconType } from '../../../../components/atoms/icon'
import { ContentType } from '../../content-type'
import { ContentfulElement } from '../../element'
import { ContentfulAsset } from '../assets'

export type ContentfulLink = {
  href: string
  icon?: IconType
  label?: string
  image?: ContentfulAsset
} & ContentfulElement<ContentType.LINK>
