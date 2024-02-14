export type ColorBaseScheme = Partial<{
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  950: string
  BASE: string
  DEFAULT: string
}>

export type ColorScheme = ColorBaseScheme &
  Partial<{
    130: string
    160: string
    230: string
    260: string
    330: string
    360: string
    430: string
    460: string
    530: string
    560: string
    630: string
    660: string
    730: string
    760: string
    830: string
    860: string
  }>

export type Color = ColorScheme | string | undefined

export interface FontColors {
  default: Color
  subtle: Color
  strong: Color
  muted: Color
}

export interface DividerColors {
  default: Color
  subtle: Color
  strong: Color
}

export interface LayoutColors {
  divider: DividerColors
  surface1: Color
  surface2: Color
  surface3: Color
  surface4: Color
  surface5: Color
  surface6: Color
}

export type DynamicBaseColors = LayoutColors & {
  background: Color
  foreground: FontColors
  focus: Color
}

export type ThemeColors = DynamicBaseColors & {
  primary: Color
  secondary: Color
  success: Color
  warning: Color
  danger: Color
}

export interface DynamicColors {
  light: DynamicBaseColors
  dark: DynamicBaseColors
}
