import { Meta, Story } from '@storybook/react'

import { ContentfulHeader, ContentType } from '../../../types'

import { Header } from '.'

export default {
  title: 'Organisms/Header',
  component: Header,
} as Meta

const Template: Story<ContentfulHeader> = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  logoLink: {
    name: 'Logo Link',
    icon: 'logo',
    href: '/',
    CONTENT_TYPE: ContentType.LINK,
    CONTENTFUL_ID: '',
  },
}
