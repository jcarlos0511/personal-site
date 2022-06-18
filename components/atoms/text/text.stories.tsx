import { Meta, Story } from '@storybook/react'

import { mockText } from '../../../mocks'

import { Text, TextProps } from '.'

export default {
  title: 'Atoms/Text',
  component: Text,
} as Meta

const Template: Story<TextProps> = (args) => <Text {...args} />

export const Paragraph = Template.bind({})
Paragraph.args = { ...mockText }

export const Span = Template.bind({})
Span.args = { ...mockText, as: 'span' }
