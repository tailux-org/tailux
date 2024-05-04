import { forwardRef } from '@tailux/system'
import { useButton, type ButtonProps } from './use-button'

const Button = forwardRef<'button', ButtonProps>((props, ref) => {
  const {
    Component,
    children,
    isLoading,
    isDisabled,
    domRef,
    styles,
    htmlPrefix,
    ...rest
  } = useButton({
    ...props,
    ref
  })

  return (
    <Component className={styles} ref={domRef} {...rest}>
      {children}
    </Component>
  )
})

Button.displayName = 'tailux.Button'

export default Button
