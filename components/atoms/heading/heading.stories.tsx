import { Meta, Story } from '@storybook/react'

import { mockHeading } from '../../../mocks'

import { Heading, HeadingProps } from '.'

export default {
  title: 'Atoms/Heading',
  component: Heading,
} as Meta

const Template: Story<HeadingProps> = (args) => <Heading {...args} />

export const Heading1 = Template.bind({})
Heading1.args = { ...mockHeading }

export const Heading2 = Template.bind({})
Heading2.args = {
  ...Heading1.args,
  as: 'h2',
  label: 'Heading 2',
}

export const Heading3 = Template.bind({})
Heading3.args = {
  ...Heading2.args,
  as: 'h3',
  label: 'Heading 3',
}
