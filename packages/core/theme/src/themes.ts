import type { LayoutTheme, DefaultThemes } from './types'
import { semanticColors } from './colors'

/**
 * The default layout theme. This object contains all the tokens for
 * the layout of the application.
 */
export const defaultLayout: LayoutTheme = {
  fontSize: {
    tiny: '0.625rem',
    small: '0.75rem',
    medium: '0.875rem',
    large: '1rem',
    huge: '1.125rem',
    subheading: '1.5rem',
    heading: '1.875rem',
    'heading-large': '2.25rem'
  },
  lineHeight: {
    tiny: '0.75rem',
    small: '1rem',
    medium: '1.25rem',
    large: '1.5rem',
    huge: '1.75rem',
    subheading: '2rem',
    heading: '2.25rem',
    'heading-large': '2.75rem'
  },
  borderRadius: 'medium'
}

/**
 * The default themes of Tailux.
 * These themes are built-in in the Tailwind CSS configuration and can be extended.
 * So, they can be used as a starting point for the application's
 * design.
 */
export const defaultThemes: DefaultThemes = {
  light: {
    colors: {
      ...semanticColors.light
    },
    layout: defaultLayout
  },
  dark: {
    colors: {
      ...semanticColors.dark
    },
    layout: defaultLayout
  }
}
