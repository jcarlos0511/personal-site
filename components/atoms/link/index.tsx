/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import Image from 'next/image'

import { Icon } from '../icon'
import { ContentfulLink } from '../../../types'

const getContentLink = ({
  icon,
  image,
  label,
}: Pick<ContentfulLink, 'icon' | 'image' | 'label'>): JSX.Element | null => {
  if (image) {
    return (
      <Image alt={image.title} layout="fill" src={`https:${image.file.url}`} />
    )
  }

  if (icon) {
    return <Icon type={icon} />
  }

  if (label) {
    return <span>{label}</span>
  }

  return null
}

export const NextLink = (props: ContentfulLink) => {
  const { href } = props

  return (
    <Link href={href}>
      <a className="flex w-fit">{getContentLink(props)}</a>
    </Link>
  )
}
