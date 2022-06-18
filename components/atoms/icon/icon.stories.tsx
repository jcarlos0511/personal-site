import { Meta, Story } from '@storybook/react'

import { Icon, IconProps } from '.'

export default {
  title: 'Atoms/Icon',
  component: Icon,
} as Meta

const Template: Story<IconProps> = (args) => <Icon {...args} />

export const Default = Template.bind({})
Default.args = {
  color: 'primary',
  direction: 'down',
  size: 24,
  type: 'nav-arrow',
}
