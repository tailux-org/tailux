import { staticColors } from './static'
import type { DynamicColors } from './types'

export const baseColors: DynamicColors = {
  light: {
    background: '#FFFFFF',
    focus: staticColors.abbey.BASE,
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
    surface1: staticColors.abbey[50],
    surface2: staticColors.abbey[100],
    surface3: staticColors.abbey[130],
    surface4: staticColors.abbey[160],
    surface5: staticColors.abbey[200],
    surface6: staticColors.abbey[230]
  },
  dark: {
    background: '#111214',
    focus: staticColors.abbey.BASE,
    foreground: {
      default: '#DBDEE1',
      subtle: '#B5BAC1',
      strong: '#FFFFFF',
      muted: '#80848E'
    },
    divider: {
      default: '#FFFFFF14',
      strong: '#FFFFFF29',
      subtle: '#FFFFFF0A'
    },
    surface1: staticColors.abbey[760],
    surface2: staticColors.abbey[730],
    surface3: staticColors.abbey[700],
    surface4: staticColors.abbey[660],
    surface5: staticColors.abbey[630],
    surface6: staticColors.abbey[600]
  }
}
