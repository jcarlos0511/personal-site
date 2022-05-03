import { Meta, Story } from '@storybook/react'

import { Icon, IconProps, IconType } from '.'

export default {
  title: 'Atoms/Icon',
  component: Icon,
} as Meta

const Template: Story<IconProps> = (args) => <Icon {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  direction: 'down',
  size: 24,
  type: IconType.FLAG_US,
}
