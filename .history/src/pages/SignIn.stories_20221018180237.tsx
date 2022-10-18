import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import { expect } from ''
import { SignIn } from './SignIn';

export default {
  title: 'Pages/Sign In',
  component: SignIn,
  args: {},
  argTypes: {},
} as Meta

export const Default: StoryObj = {}