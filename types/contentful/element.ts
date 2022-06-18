import { ContentType } from './content-type'

export interface ContentfulElement<T extends ContentType> {
  name: string
  CONTENT_TYPE: T
  CONTENTFUL_ID: string
}
