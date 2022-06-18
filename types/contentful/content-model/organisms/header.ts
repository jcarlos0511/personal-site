import { ContentType } from '../../content-type'
import { ContentfulElement } from '../../element'

export type ContentfulHeader = {
  nameLogo?: string
} & ContentfulElement<ContentType.HEADER>
