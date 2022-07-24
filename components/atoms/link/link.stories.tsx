import { Meta, Story } from '@storybook/react'

import { ContentfulLink, LinkVariant } from '../../../types'

import { NextLink } from '.'

export default {
  title: 'Atoms/Link',
  component: NextLink,
} as Meta

const Template: Story<ContentfulLink & { className?: string }> = (args) => (
  <NextLink {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  href: '#',
  label: 'Primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  href: '#',
  label: 'Secondary',
  variant: LinkVariant.SECONDARY,
}

export const Outline = Template.bind({})
Outline.args = {
  href: '#',
  label: 'Outline',
  variant: LinkVariant.OUTLINE,
}
