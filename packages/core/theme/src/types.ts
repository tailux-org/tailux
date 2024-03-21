import type { ISemanticColors } from './colors'

/**
 * The base unit sizes for any token that uses a small, medium and large size.
 */
export interface BaseUnit {
  /**
   * Small font size
   */
  small: string
  /**
   * Medium font size
   */
  medium: string
  /**
   * Large font size
   */
  large: string
}

/**
 * Font scale with different sizes for text elements.
 */
export interface FontScale extends BaseUnit {
  /**
   * The smallest font size.
   *
   * Used for small text elements like labels and captions.
   */
  tiny: string
  /**
   * Handles the font size for large text elements
   */
  huge: string
  /**
   * Handles the font size for subheadings
   */
  subheading: string
  /**
   * Handles the font size for headings
   */
  heading: string
  /**
   * Handles the font size for extra large headings
   */
  'heading-large': string
}

/**
 * The layout theme configuration.
 */
export interface LayoutTheme {
  /**
   * The font sizes for text elements
   */
  fontSize: Partial<FontScale>
  /**
   * The line height for text elements
   */
  lineHeight: Partial<FontScale>
}

export type ColorsTheme = ISemanticColors &
  Record<string, string | Record<string, any>>

/**
 * The base theme interface. All themes extend from this interface.
 */
export interface BaseTheme {
  /**
   * The global layout tokens for the theme.
   */
  layout: Partial<LayoutTheme>
  /**
   * The semantic colors for the theme.
   */
  colors: Partial<ColorsTheme>
}

/**
 * Represents a dynamic theme.
 * Can be either 'light' or 'dark'.
 */
export interface DynamicTheme<
  T extends Partial<BaseTheme> = Partial<BaseTheme>
> {
  light?: T
  dark?: T
}

/**
 * Represents the type of default themes.
 * Can be either 'light' or 'dark'.
 */
export type DefaultThemesType = 'light' | 'dark'

/**
 * The default themes of the Tailux design system
 */
export type DefaultThemes = DynamicTheme<BaseTheme>

// export interface CustomTheme extends Partial<BaseTheme> {
//   /**
//    * Specifies the default theme to extend from.
//    */
//   extendFrom?: DefaultThemesType
// }

/**
 * Custom theme configuration. Represents a dynamic theme that can be either 'light' or 'dark'.
 */
export type CustomTheme = Partial<DynamicTheme>

/**
 * Record of custom themes.
 */
// export type CustomThemes = Record<string, Partial<CustomTheme>>
export type CustomThemes = Record<string, CustomTheme>

/**
 * Configuration object for defining custom themes and extending the default themes
 */
export interface ThemesConfig {
  /**
   * Definitions for the light theme.
   * Place here the custom configurations to override the default theme.
   */
  light?: Partial<BaseTheme>
  /**
   * Definitions for the dark theme.
   * Place here the custom configurations to override the default theme.
   */
  dark?: Partial<BaseTheme>
  /**
   * Definitions for custom themes.
   * Key-value pairs where the key is the theme name and the value is the partial configuration for that theme.
   *
   * It is not necessary to define all the properties for custom themes.
   * The missing properties will be extended from the default themes.
   *
   * @example
   * ```js
   * themes = { opaque: { } }
   * ```
   *
   * The `opaque` theme will extend from the default light theme and it can be used as a tailwind utility class.
   *
   * @example
   * ```jsx
   * <div class="text-base dark:test-lg opaque:text-xl" />
   * ```
   */
  custom?: CustomThemes
}

/**
 * The configuration for the Tailux plugin.
 */
export interface TailuxPluginConfig {
  /**
   * The prefix to be used in the generated css.
   * All the css variables will be prefixed with this value.
   *
   * All blank spaces will be replaced with a _ character.
   * If an invalid prefix is provided, it will fallback to 'tx'
   *
   * @example
   * 'tx': '--tx-primary-100'
   * 'mi custom prefix': '--mi_custom_prefix-primary-100'
   * ' ': '--tx-primary-100'
   * @default 'tx'
   */
  prefix?: string
  /**
   * The default theme that is going to be used.
   *
   * @default 'light'
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  defaultTheme?: 'light' | 'dark' | (string & {})
  /**
   * Wheter common colors should be added.
   * If true, the common colors will be added as tailwind utility classes and css variables.
   *
   * @example
   * ```css
   * :root { --abbey-100: 'color' }
   * ```
   * @example
   * ```html
   * <div class="bg-abbey-100"></div>
   * ```
   *
   * @default true
   */
  addCommonColors?: boolean
  /**
   * The global layout tokens that all themes extend by default.
   * Any changes made here will be reflected in all themes and will be merged
   * with the default layout configuration.
   *
   * @example
   * ```js
   * defaultLayout = {
   *   ...
   *   fontSize: {
   *     ...
   *     'small': '5rem',
   *     'medium': '6rem',
   *   }
   * }
   *
   * customLayout = {
   *   fontSize: {
   *     'small': '7rem'
   *   }
   * }
   * ```
   *
   * The final layout configuration will be:
   *
   * ```js
   * layout = {
   *   ...
   *   fontSize: {
   *     ...
   *     'small': '7rem',
   *     'medium': '6rem',
   *   }
   * }
   *```
   */
  layout?: Partial<LayoutTheme>
  /**
   * All the themes available as tailwind utility classes.
   * You can extend the default themes `light` and `dark`.
   *
   * New themes can be created by defining them within the `custom` property.
   */
  themes?: ThemesConfig
}
