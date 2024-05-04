import type { VariantProps } from 'tailwind-variants'
import { colorVariants, tv } from '../utils'

// el intellisense no funcina solamente en el array

const button = tv({
  base: [
    'appearance-none',
    'box-border',
    'font-normal',
    'inline-flex',
    'items-center',
    'justify-center',
    'min-w-max',
    'outline-none',
    'relative',
    'subpixel-antialiased',
    'whitespace-nowrap',
    'z-0'
  ],
  variants: {
    size: {
      xs: 'px-3 min-w-14 min-h-7 h-7 text-tiny gap-1 font',
      sm: 'px-3 min-w-16 min-h-8 h-8 text-small gap-1.5',
      md: 'px-4 min-w-20 min-h-9 h-9 text-medium gap-2',
      lg: 'px-5 min-w-24 min-h-11 h-11 text-large gap-2.5',
      xl: 'px-6 min-w-28 min-h-12 h-12 text-huge gap-2.5'
    },
    isLoading: {
      true: 'opacity-50'
    },
    radius: {
      none: 'rounded-none',
      sm: 'rounded-small',
      md: 'rounded-medium',
      lg: 'rounded-large',
      full: 'rounded-full'
    },
    variant: {
      solid: '',
      outlined: 'border-2 bg-transparent',
      shadow: '',
      flat: '',
      'flat-outlined': '',
      ghost: 'bg-transparent',
      text: 'bg-transparent'
    },
    color: {
      default: '',
      primary: '',
      secondary: '',
      danger: '',
      warning: '',
      success: ''
    }
  },
  defaultVariants: {
    size: 'md',
    radius: 'md',
    variant: 'solid',
    color: 'default'
  },
  compoundVariants: [
    {
      variant: 'solid',
      color: 'default',
      class: colorVariants.solid.default
    },
    {
      variant: 'solid',
      color: 'primary',
      class: colorVariants.solid.primary
    },
    {
      variant: 'solid',
      color: 'secondary',
      class: colorVariants.solid.secondary
    },
    {
      variant: 'solid',
      color: 'success',
      class: colorVariants.solid.success
    },
    {
      variant: 'solid',
      color: 'danger',
      class: colorVariants.solid.danger
    },
    {
      variant: 'solid',
      color: 'warning',
      class: colorVariants.solid.warning
    }
    // {
    //   size: 'xs',
    //   radius: 'sm',
    //   class: 'rounded-md'
    // },
    // {
    //   size: 'xs',
    //   radius: 'md',
    //   class: 'rounded-lg'
    // },
    // {
    //   size: 'xs',
    //   radius: 'lg',
    //   class: 'rounded-[0.625rem]'
    // }
    // {
    //   size: 'sm',
    //   radius: 'sm',
    //   class: 'rounded-md'
    // },
    // {
    //   size: 'sm',
    //   radius: 'md',
    //   class: 'rounded-lg'
    // },
    // {
    //   size: 'sm',
    //   radius: 'lg',
    //   class: 'rounded-[0.625rem] '
    // },
    // {
    //   size: 'md',
    //   radius: 'sm',
    //   class: 'rounded-small'
    // },
    // {
    //   size: 'md',
    //   radius: 'md',
    //   class: 'rounded-medium'
    // },
    // {
    //   size: 'md',
    //   radius: 'lg',
    //   class: 'rounded-large'
    // },
    // {
    //   size: 'lg',
    //   radius: 'sm',
    //   class: 'rounded-small'
    // },
    // {
    //   size: 'lg',
    //   radius: 'md',
    //   class: 'rounded-large'
    // },
    // {
    //   size: 'lg',
    //   radius: 'lg',
    //   class: 'rounded-2xl'
    // },
    // {
    //   size: 'xl',
    //   radius: 'sm',
    //   class: 'rounded-[0.625rem]'
    // },
    // {
    //   size: 'xl',
    //   radius: 'md',
    //   class: 'rounded-large'
    // },
    // {
    //   size: 'xl',
    //   radius: 'lg',
    //   class: 'rounded-[1.125rem]'
    // }
  ]
})

export type ButtonVariantProps = VariantProps<typeof button>

export { button }
