import { GetStaticPaths, GetStaticPropsContext } from 'next'

import { Layout } from '../components/templates'
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
        notFound: !page,
      },
    }
  }

  return { props: { notFound: true } }
}

export type NotFoundPageProps = { notFound: boolean }
export type PageProps = ContentfulPage

const Page = (props: PageProps | NotFoundPageProps) => {
  const { title, isPreview, header, footer } = props as PageProps

  return (
    <>
      <Layout
        footer={footer}
        header={header}
        isPreview={isPreview}
        title={title}
      >
        demo
      </Layout>
    </>
  )
}

export default Page
