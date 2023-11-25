export interface ButtonProps {
  variant?: 'primary' | 'secondary'
  children: any
  [key: string]: any
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return <button  {...rest}>{children}</button>
}

Button.displayName = 'Tailux.Button'

export default Button
