/**
 * Represents a color with various shades of a color.
 */
export interface ColorScheme {
  50: string
  100: string
  130: string
  160: string
  200: string
  230: string
  260: string
  300: string
  330: string
  360: string
  400: string
  430: string
  460: string
  500: string
  530: string
  560: string
  600: string
  630: string
  660: string
  700: string
  730: string
  760: string
  800: string
  830: string
  860: string
  900: string
  950: string
  DEFAULT: string
}

/**
 * Represents all common colors used in Tailux
 */
export interface ICommonColors {
  /**
   * The abbey color scheme. This color belongs primarily to the family of grays.
   */
  abbey: ColorScheme
  /**
   * The sapphire color scheme. This color belongs primarily to the family of blues.
   */
  sapphire: ColorScheme
  /**
   * The grape color scheme. This color belongs primarily to the family of purples.
   */
  grape: ColorScheme
  /**
   * The magenta color scheme. This color belongs primarily to the family of magentas.
   */
  magenta: ColorScheme
  /**
   * The jade color scheme. This color belongs primarily to the family of greens.
   */
  jade: ColorScheme
  /**
   * The sunflower color scheme. This color belongs primarily to the family of yellows.
   */
  sunflower: ColorScheme
  /**
   * The crimson color scheme. This color belongs primarily to the family of reds.
   */
  crimson: ColorScheme
}

/**
 * Represents the semantic colors used in the application theme.
 */
export interface ISemanticColors {
  /**
   * The background color.
   */
  background: string

  /**
   * The color used to indicate focus.
   */
  focus: string

  /**
   * The foreground colors.
   */
  foreground: {
    /**
     * The default foreground color.
     */
    default: string

    /**
     * The subtle foreground color.
     */
    subtle: string

    /**
     * The strong foreground color.
     */
    strong: string

    /**
     * The muted foreground color.
     */
    muted: string
  }

  /**
   * The divider colors.
   */
  divider: {
    /**
     * The default divider color.
     */
    default: string

    /**
     * The subtle divider color.
     */
    subtle: string

    /**
     * The strong divider color.
     */
    strong: string
  }

  /**
   * The first surface color.
   */
  surface1: string

  /**
   * The second surface color.
   */
  surface2: string

  /**
   * The third surface color.
   */
  surface3: string

  /**
   * The fourth surface color.
   */
  surface4: string

  /**
   * The fifth surface color.
   */
  surface5: string

  /**
   * The primary color scheme.
   */
  primary: ColorScheme

  /**
   * The secondary color scheme.
   */
  secondary: ColorScheme

  /**
   * The success color scheme.
   */
  success: ColorScheme

  /**
   * The warning color scheme.
   */
  warning: ColorScheme

  /**
   * The danger color scheme.
   */
  danger: ColorScheme
}
