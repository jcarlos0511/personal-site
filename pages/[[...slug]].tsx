import { GetStaticPaths, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'

import { Generic } from '../components/templates'
import { getAllSlugs, getPageBySlug } from '../services'
import { ContentfulPage } from '../types'

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getAllSlugs()

  // eslint-disable-next-line
  console.log(
    '\nGenerating static pages for the following slugs:\n',
    slugs.map((slug) => slug.join('/'))
  )

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: true,
  }
}

export const getStaticProps = async ({
  preview,
  params,
}: GetStaticPropsContext<{ slug: [] }>) => {
  const slug = params?.slug?.join('/') ?? '/'
  const isPreview = preview ?? false

  const page = await getPageBySlug(slug, isPreview)

  if (page) {
    return {
      props: {
        ...page,
        isPreview,
        notFound: false,
      },
    }
  }

  return { notFound: true }
}
export type PreviewProps = { isPreview?: boolean }
export type NotFoundPageProps = { notFound: boolean }

const Page = (props: (ContentfulPage & PreviewProps) | NotFoundPageProps) => {
  const router = useRouter()

  if (router.isFallback) return <p>Loading...</p>

  const { title, isPreview, header, footer, main } = props as ContentfulPage &
    PreviewProps

  return (
    <Generic
      footer={footer}
      header={header}
      isPreview={isPreview}
      main={main}
      title={title}
    />
  )
}

export default Page
