import { ContentfulFooter, ContentfulHeader } from '../organisms'

export type ContentfulGenericPage<T = undefined> = {
  footer: ContentfulFooter
  header: ContentfulHeader
  isPreview?: string
  slug: string
  template?: T
  title: string
}

export type ContentfulPage<T = undefined> = ContentfulGenericPage<T>
