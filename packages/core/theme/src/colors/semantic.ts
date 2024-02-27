import { swapColorScheme, pickColor } from '../utils/object'
import { commonColors } from './common'
import type { SemanticBaseColors, SemanticColors, ThemeColors } from './types'

export const baseLightColors: SemanticBaseColors = {
  background: '#FFFFFF',
  focus: commonColors.abbey.BASE,
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
  surface1: pickColor(50, commonColors.abbey),
  surface2: pickColor(100, commonColors.abbey),
  surface3: pickColor(130, commonColors.abbey),
  surface4: pickColor(160, commonColors.abbey),
  surface5: pickColor(200, commonColors.abbey)
}

export const baseDarkColors: SemanticBaseColors = {
  background: '#111214',
  focus: commonColors.abbey.BASE,
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
  surface1: pickColor(760, commonColors.abbey),
  surface2: pickColor(730, commonColors.abbey),
  surface3: pickColor(700, commonColors.abbey),
  surface4: pickColor(660, commonColors.abbey),
  surface5: pickColor(630, commonColors.abbey)
}

export const themeLightColors: ThemeColors = {
  ...baseLightColors,
  primary: commonColors.sapphire,
  secondary: commonColors.grape,
  success: commonColors.jade,
  warning: commonColors.sunflower,
  danger: commonColors.crimson
}

export const themeDarkColors: ThemeColors = {
  ...baseDarkColors,
  primary: swapColorScheme(commonColors.sapphire),
  secondary: swapColorScheme(commonColors.grape),
  success: swapColorScheme(commonColors.jade),
  warning: swapColorScheme(commonColors.sunflower),
  danger: swapColorScheme(commonColors.crimson)
}

export const semanticColors: SemanticColors = {
  light: themeLightColors,
  dark: themeDarkColors
}
