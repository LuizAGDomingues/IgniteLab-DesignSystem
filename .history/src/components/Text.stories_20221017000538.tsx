import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem Ips',
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}
export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm',
  },
}
export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg',
  },
}
export const CustomComponent: StoryObj<TextProps> = {
  args: {
    size: 'lg',
  },
}
