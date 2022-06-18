import { ContentType } from '../../content-type'
import { ContentfulElement } from '../../element'

export type ContentfulFooter = {
  copyright?: string
} & ContentfulElement<ContentType.FOOTER>
