import { defaultThemes, defaultLayout } from './themes'
import type { TailuxPluginConfig } from './types'

const DEFAULT_PLUGIN_PREFIX = 'tx'

export const defaultPluginConfig: Required<TailuxPluginConfig> = {
  prefix: DEFAULT_PLUGIN_PREFIX,
  defaultTheme: 'light',
  addCommonColors: true,
  layout: defaultLayout,
  themes: {
    ...defaultThemes
  }
}
