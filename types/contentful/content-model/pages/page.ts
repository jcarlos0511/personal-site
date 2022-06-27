import {
  ContentfulFooter,
  ContentfulHeader,
  ContentfulMain,
} from '../organisms'

export type ContentfulPage = {
  footer: ContentfulFooter
  header: ContentfulHeader
  main: ContentfulMain
  slug: string
  title: string
}
