import { swapColorScheme } from '../utils'
import commonColors from './common'
import type { ISemanticColors } from './types'

/**
 * Represents the default semantic colors based on light and dark mode.
 */
export interface DefaultSemanticColors {
  /**
   * The semantic colors for light mode.
   */
  light: ISemanticColors
  /**
   * The semantic colors for dark mode.
   */
  dark: ISemanticColors
}

/**
 * All semantic colors used in Tailux.
 * These colors are used to define the look and feel of the application.
 * They are used in all themes and can be customized to fit the application's
 * design.
 *
 * Unlike the common colors, semantic colors are dynamic and can change based
 * on the theme mode (light or dark).
 */
const semanticColors: DefaultSemanticColors = {
  light: {
    background: '#FFFFFF',
    focus: commonColors.sapphire.DEFAULT,
    foreground: {
      default: '#313338',
      subtle: '#4E5058',
      strong: '#111214',
      muted: '#80848E'
    },
    divider: {
      default: '#00000014',
      strong: '#00000029',
      subtle: '#0000000A'
    },
    surface1: commonColors.abbey[50],
    surface2: commonColors.abbey[100],
    surface3: commonColors.abbey[130],
    surface4: commonColors.abbey[160],
    surface5: commonColors.abbey[200],
    primary: commonColors.sapphire,
    secondary: commonColors.grape,
    success: commonColors.jade,
    warning: commonColors.sunflower,
    danger: commonColors.crimson
  },
  dark: {
    background: '#111214',
    focus: commonColors.sapphire.DEFAULT,
    foreground: {
      default: '#DBDEE1',
      subtle: '#B5BAC1',
      strong: '#F2F3F5',
      muted: '#80848E'
    },
    divider: {
      default: '#FFFFFF14',
      strong: '#FFFFFF29',
      subtle: '#FFFFFF0A'
    },
    surface1: commonColors.abbey[760],
    surface2: commonColors.abbey[730],
    surface3: commonColors.abbey[700],
    surface4: commonColors.abbey[660],
    surface5: commonColors.abbey[630],
    primary: swapColorScheme(commonColors.sapphire),
    secondary: swapColorScheme(commonColors.grape),
    success: swapColorScheme(commonColors.jade),
    warning: swapColorScheme(commonColors.sunflower),
    danger: swapColorScheme(commonColors.crimson)
  }
}

export default semanticColors
