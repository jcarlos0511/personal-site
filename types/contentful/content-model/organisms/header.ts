import { ContentType } from '../../content-type'
import { ContentfulElement } from '../../element'
import { ContentfulLink } from '../atoms'

export type ContentfulHeader = {
  logoLink: ContentfulLink
} & ContentfulElement<ContentType.HEADER>
