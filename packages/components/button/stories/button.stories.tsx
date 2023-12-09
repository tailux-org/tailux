import type { Meta, StoryObj } from '@storybook/react'
import { Button, type ButtonProps } from '../src'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof Button>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (props: any) => <Button {...props}>{props.children}</Button>,
  name: 'Button',
  args: {
    children: 'Hello @tailux'
  } satisfies ButtonProps
}
