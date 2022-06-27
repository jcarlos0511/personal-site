/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head'
import Link from 'next/link'

import { PreviewProps } from '../../../pages/[[...slug]]'
import { Footer, Header, Main } from '../../organisms'
import { ContentfulPage } from '../../../types'

const PreviewBanner = () => (
  <div className="w-full p-2 text-center">
    <Link href="/api/clear-preview">
      <a>Preview mode | Click to exit</a>
    </Link>
  </div>
)

type GenericProps = Omit<ContentfulPage, 'slug'> & PreviewProps

export const Generic = ({
  footer,
  header,
  isPreview,
  main,
  title,
}: GenericProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content="Generated by create next app" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      {isPreview && <PreviewBanner />}
      <Header {...header} />
      <Main {...main} />
      <Footer {...footer} />
    </>
  )
}