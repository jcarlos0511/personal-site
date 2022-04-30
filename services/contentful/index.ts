import { createClient } from 'contentful'

const client = createClient({
  accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN ?? '',
  host: process.env.CONTENTFUL_HOST,
  space: process.env.CONTENTFUL_SPACE_ID ?? '',
})

export const getEntries = <T = unknown>(query?: Record<string, unknown>) =>
  client.getEntries<T>(query)
