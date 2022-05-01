import { Meta, Story } from '@storybook/react'

import { Button, ButtonProps, ButtonSize, ButtonVariant } from '.'

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Primary',
  variant: ButtonVariant.PRIMARY,
  size: ButtonSize.NORMAL,
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Secondary',
  variant: ButtonVariant.SECONDARY,
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  label: 'Tertiary',
  variant: ButtonVariant.TERTIARY,
}

export const Icon = Template.bind({})
Icon.args = {
  label: 'Tertiary',
  variant: ButtonVariant.TERTIARY,
}
