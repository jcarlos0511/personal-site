import { ContentType } from '../../content-type'
import { ContentfulElement } from '../../element'

export type ContentfulMain = {
  title?: string
} & ContentfulElement<ContentType.MAIN>
