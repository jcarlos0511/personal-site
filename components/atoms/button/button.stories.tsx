import { Meta, Story } from '@storybook/react'

import { Button, ButtonProps } from '.'

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {}