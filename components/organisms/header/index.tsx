import { Button, ButtonVariant, NextLink } from '../../atoms'
import { ContentfulHeader } from '../../../types'

export const Header = ({ logoLink }: ContentfulHeader) => {
  return (
    <header className="sticky top-0 flex flex-row items-center justify-between bg-background p-4">
      <NextLink {...logoLink} />
      <Button
        icon={{ type: 'sun', size: 28, color: 'white' }}
        variant={ButtonVariant.TERTIARY}
      />
    </header>
  )
}
