import type { HTMLTailuxProps, ReactRef } from '@tailux/system'
import type { ReactNode, HTMLAttributes } from 'react'
import type { ButtonVariantProps } from '@tailux/theme'
import { useDOMRef } from '@tailux/system'
import { button } from '@tailux/theme'
import { useMemo } from 'react'

type ButtonHTMLProps = HTMLTailuxProps<'button', 'prefix'>

export interface ButtonProps extends ButtonHTMLProps, ButtonVariantProps {
  ref?: ReactRef<HTMLButtonElement | null>
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  isDisabled?: boolean
  isLoading?: boolean
  spinner?: ReactNode
  spinnerPlacement?: 'start' | 'end'
  suffix?: ReactNode
  prefix?: ReactNode
  htmlPrefix?: HTMLAttributes<'button'>['prefix']
}

export function useButton(props: ButtonProps) {
  const {
    as,
    children,
    color = 'default',
    htmlPrefix,
    ref,
    size = 'md',
    radius = 'md',
    spinner,
    // spinnerPlacement = 'start',
    prefix,
    suffix,
    variant = 'solid',
    isDisabled,
    isLoading,
    ...rest
  } = props

  const Component = as ?? 'button'

  const styles = useMemo(
    () => button({ variant, color, size, radius }),
    [variant, color, size, radius]
  )

  const domRef = useDOMRef(ref)

  return {
    Component,
    children,
    domRef,
    isDisabled,
    isLoading,
    styles,
    htmlPrefix,
    ...rest
  }
}
