/**
 * Base color scheme with 11 shades.
 * BASE color is required.
 */
export interface ColorBaseScheme {
  50?: string
  100?: string
  200?: string
  300?: string
  400?: string
  500?: string
  600?: string
  700?: string
  800?: string
  900?: string
  950?: string
  BASE: string
}

/**
 * Extended color scheme, adds additional shades to the base color scheme.
 * BASE color is required.
 */
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

/**
 * All the shades of a color scheme, excluding the BASE color.
 */
export type ColorSchemeShades = {
  [K in keyof ColorScheme as Exclude<K, 'BASE'>]: ColorScheme[K]
}

/**
 * Font colors used in a theme.
 */
export interface FontColors {
  /**
   * The default font color
   */
  default: ColorScheme | string
  /**
   * The subtle font color
   */
  subtle: ColorScheme | string
  /**
   * The strong font color
   */
  strong: ColorScheme | string
  /**
   * The muted font color
   */
  muted: ColorScheme | string
}

/**
 * The colors for dividers.
 */
export interface DividerColors {
  /**
   * The default divider color
   */
  default: ColorScheme | string
  /**
   * The subtle divider color
   */
  subtle: ColorScheme | string
  /**
   * The strong divider color
   */
  strong: ColorScheme | string
}

/**
 * The layout colors used in the theme.
 */
export interface LayoutColors {
  /**
   * Colors for dividers
   */
  divider: DividerColors
  /**
   * The surface1 color
   */
  surface1: ColorScheme | string
  /**
   * The surface2 color
   */
  surface2: ColorScheme | string
  /**
   * The surface3 color
   */
  surface3: ColorScheme | string
  /**
   * The surface4 color
   */
  surface4: ColorScheme | string
  /**
   * The surface5 color
   */
  surface5: ColorScheme | string
}

/**
 * The base colors used in the semantic theme.
 */
export type SemanticBaseColors = LayoutColors & {
  /**
   * The background color scheme or string value.
   */
  background: ColorScheme | string
  /**
   * The font colors used for the foreground.
   */
  foreground: FontColors
  /**
   * The focus color scheme or string value.
   */
  focus: ColorScheme | string
}

/**
 * The colors used in a theme.
 */
export type ThemeColors = SemanticBaseColors & {
  /**
   * The primary color scheme used in the theme.
   */
  primary: ColorScheme | string
  /**
   * The secondary color scheme used in the theme.
   */
  secondary: ColorScheme | string
  /**
   * The success color scheme used in the theme.
   */
  success: ColorScheme | string
  /**
   * The warning color scheme used in the theme.
   */
  warning: ColorScheme | string
  /**
   * The danger color scheme used in the theme.
   */
  danger: ColorScheme | string
}

/**
 * Represents the semantic colors for a theme. Define the colors for the light and dark color schemes.
 */
export interface SemanticColors {
  light: ThemeColors
  dark: ThemeColors
}
