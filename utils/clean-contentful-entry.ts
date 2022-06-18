/* eslint-disable @typescript-eslint/no-explicit-any */

import { Entry } from 'contentful'

export const cleanContentfulEntry = <
  T = Record<string, any & { fields?: Record<string, any> }>
>(
  data: Entry<T>
) => {
  let result: any = {}
  const { fields } = data

  Object.keys(fields).forEach((key) => {
    const field = (fields as Record<string, any>)[key]

    if (field.fields) {
      result = {
        ...result,
        [key]: {
          ...cleanContentfulEntry(field),
          CONTENT_TYPE: field.sys?.contentType?.sys.id ?? null,
          CONTENTFUL_ID: field.sys?.id ?? null,
        },
      }

      return
    }

    if (Array.isArray(field)) {
      const hasFields = field.some((item: Entry<any>) => !!item.fields)

      if (!hasFields) {
        result = { ...result, [key]: field }

        return
      }

      result = {
        ...result,
        [key]: field.map((item) => ({
          ...cleanContentfulEntry(item),
          CONTENT_TYPE: item.sys?.contentType?.sys.id ?? null,
          CONTENTFUL_ID: item.sys?.id ?? null,
        })),
      }

      return
    }

    result[key] = field
  })

  return result as T
}
