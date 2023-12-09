import { forwardRef } from 'react'

export interface ButtonProps {
  children: React.ReactNode
  [key: string]: any
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, ...rest } = props

  return (
    <button ref={ref} {...rest}>
      {children}
    </button>
  )
})

Button.displayName = 'tailux.Button'

export default Button
