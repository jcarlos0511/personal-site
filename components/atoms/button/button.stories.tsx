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
  size: ButtonSize.NORMAL,
  variant: ButtonVariant.PRIMARY,
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

export const WithIcon = Template.bind({})
WithIcon.args = {
  iconLeft: {
    size: 24,
    type: 'flag-PE',
  },
  iconRight: {
    color: 'background',
    direction: 'down',
    size: 24,
    type: 'nav-arrow',
  },
  label: 'ESPAÑOL',
  variant: ButtonVariant.SECONDARY,
}
