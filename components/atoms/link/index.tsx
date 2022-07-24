/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import Image from 'next/image'
import { AnchorHTMLAttributes, CSSProperties, useState } from 'react'

import { Icon } from '../icon'
import { ContentfulLink, fillColors, LinkVariant } from '../../../types'

const classesLinkVariant: Record<
  LinkVariant,
  (isHovered?: boolean) => { className: string; style?: CSSProperties }
> = {
  [LinkVariant.PRIMARY]: () => ({ className: 'text-primary hover:underline' }),
  [LinkVariant.SECONDARY]: () => ({
    className: 'text-gray hover:text-whiteSmoke',
  }),
  [LinkVariant.OUTLINE]: (hover) => ({
    className:
      'text-4xl uppercase font-bold sm:text-5xl md:text-7xl lg:text-8xl',
    style: {
      WebkitTextFillColor: hover ? fillColors.whiteSmoke : 'transparent',
      WebkitTextStroke: `1px ${fillColors.whiteSmoke}`,
    },
  }),
}

const ContentLink = ({
  className = '',
  icon,
  image,
  label,
  variant = LinkVariant.PRIMARY,
}: Partial<ContentfulLink> & { className?: string }): JSX.Element | null => {
  const [hover, setHover] = useState(false)

  if (image) {
    return (
      <Image
        alt={image.title}
        className={className}
        layout="fill"
        src={`https:${image.file.url}`}
      />
    )
  }

  if (icon) {
    return <Icon type={icon} />
  }

  if (label) {
    return (
      <span
        className={`transition-all ease-in-out ${
          classesLinkVariant[variant]().className
        } ${className}`}
        style={classesLinkVariant[variant](hover).style}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {label}
      </span>
    )
  }

  return null
}

export const NextLink = (
  props: ContentfulLink & AnchorHTMLAttributes<HTMLAnchorElement>
) => {
  const { href } = props

  return (
    <Link href={href}>
      <a className="flex w-fit">
        <ContentLink {...props} />
      </a>
    </Link>
  )
}
