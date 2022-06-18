import { createClient } from 'contentful'

import { ContentfulPage, ContentType } from '../../types'
import { cleanContentfulEntry } from '../../utils'

const getClient = (isPreview = false) =>
  createClient({
    accessToken: isPreview
      ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!
      : process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN!,
    host: isPreview
      ? process.env.CONTENTFUL_PREVIEW_HOST
      : process.env.CONTENTFUL_HOST,
    space: process.env.CONTENTFUL_SPACE_ID!,
  })

const getEntries = <T = unknown>(
  query?: Record<string, unknown>,
  isPreview?: boolean
) => getClient(isPreview).getEntries<T>(query)

const getPageEntries = async <T = unknown>(
  content_type: string,
  isPreview?: boolean,
  query?: Record<string, unknown>
) => await getEntries<T>({ content_type, ...query }, isPreview)

export const getPageBySlug = async (
  slug: string,
  isPreview?: boolean
): Promise<ContentfulPage | null> => {
  const pageEntries = await getPageEntries<ContentfulPage>(
    ContentType.PAGE,
    isPreview,
    {
      'fields.slug': slug,
      include: 10,
    }
  )

  const page =
    pageEntries.items && pageEntries.items?.length ? pageEntries.items[0] : null

  if (page) {
    return cleanContentfulEntry(page)
  }

  return null
}

export const getAllSlugs = async () => {
  const pageEntries = await getPageEntries<{ slug: string }>(
    ContentType.PAGE,
    false,
    {
      select: 'fields.slug',
    }
  )

  const hasItems = pageEntries.items && pageEntries.items?.length

  return hasItems
    ? pageEntries.items.map((item) =>
        item.fields.slug.split('/').filter((path) => Boolean(path))
      )
    : []
}
