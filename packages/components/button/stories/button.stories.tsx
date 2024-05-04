import type { Meta, StoryObj } from '@storybook/react'
import { Button, type ButtonProps } from '../src'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', defaultValue: 'Button' },
    variant: {
      control: {
        type: 'select'
      },
      defaultValue: 'solid',
      options: [
        'solid',
        'outlined',
        'shadow',
        'flat',
        'flat-outlined',
        'ghost',
        'text'
      ]
    },
    color: {
      control: {
        type: 'select'
      },
      defaultValue: 'primary',
      options: [
        'default',
        'primary',
        'secondary',
        'success',
        'warning',
        'danger'
      ]
    },
    size: {
      control: {
        type: 'select'
      },
      defaultValue: 'md',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    radius: {
      control: {
        type: 'select'
      },
      defaultValue: 'md',
      options: ['none', 'sm', 'md', 'lg', 'full']
    },
    isLoading: { control: 'boolean', defaultValue: false }
  }
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'solid',
    color: 'default',
    size: 'md',
    radius: 'md',
    isLoading: false
  } satisfies ButtonProps
}
