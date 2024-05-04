/*
  This plugin implementation is based on L-Blondy's tw-colors and jrgarciadev's nextui approach.
  @see https://github.com/L-Blondy/tw-colors
  @see https://github.com/nextui-org/nextui/blob/main/packages/core/theme/src/plugin.ts
*/

import deepmerge from 'deepmerge'
import get from 'lodash.get'
import plugin from 'tailwindcss/plugin'
import { commonColors } from './colors'
import { defaultPluginConfig as defaultConfig } from './config'
import { resolveConfig } from './config-resolution'
import type {
  BaseTheme,
  CustomThemes,
  DefaultThemes,
  TailuxPluginConfig,
  ThemesConfig
} from './types'
import { utilities } from './utilities'
import { baseStyles, getPrefixFromConfig } from './utils/internal'

export type TailuxPluginResult = ReturnType<typeof plugin>

/**
 * The Tailux plugin to extend the Tailwind CSS configuration.
 *
 * Pass a partial object to override the default configuration.
 * @param config The configuration for the Tailux plugin.
 *
 * @example `tailwind.config.js`
 *
 * ```js
 * export default {
 *  darkMode: 'class',
 *  plugins: [tailux()]
 * }
 *
 * ```
 *
 */
export const tailux = (config: TailuxPluginConfig = {}): TailuxPluginResult => {
  const {
    defaultTheme = defaultConfig.defaultTheme,
    addCommonColors = defaultConfig.addCommonColors,
    layout: configLayout = {},
    themes: configThemes = {}
  } = config

  // The prefix that is going to be used for the css variables
  const prefix = getPrefixFromConfig(config)

  // Verifying that the default theme is defined in the themes configuration
  verifyDefaultTheme(defaultTheme, configThemes)

  // Getting the default light and dark themes from the default config
  const defaultLightTheme = defaultConfig.themes.light as BaseTheme
  const defaultDarkTheme = defaultConfig.themes.dark as BaseTheme
  const defaultLightColors = defaultLightTheme.colors
  const defaultDarkColors = defaultDarkTheme.colors

  // Merging the default global layout with the custom layout defined
  // in the config if it exists
  const layout = deepmerge(defaultConfig.layout, configLayout)

  // Getting the custom dark and light themes layout from the config
  const configLightLayout = get(configThemes, 'light.layout', {})
  const configDarkLayout = get(configThemes, 'dark.layout', {})

  // Getting the custom dark and light themes layout from the config
  const configLightColors = get(configThemes, 'light.colors', {})
  const configDarkColors = get(configThemes, 'dark.colors', {})

  // Merging the default light theme with the custom light theme defined in the config
  const lightTheme: BaseTheme = {
    layout: deepmerge(layout, configLightLayout),
    colors: deepmerge(defaultLightColors, configLightColors)
  }

  // Merging the default dark theme with the custom dark theme defined in the config
  const darkTheme: BaseTheme = {
    layout: deepmerge(layout, configDarkLayout),
    colors: deepmerge(defaultDarkColors, configDarkColors)
  }

  // Getting and merging all the custom themes defined in the config
  const customThemes = getCustomThemes(configThemes.custom ?? {}, {
    dark: darkTheme,
    light: lightTheme
  })

  const themes: ThemesConfig = {
    light: lightTheme,
    dark: darkTheme,
    custom: {
      ...customThemes
    }
  }

  return corePlugin(prefix, defaultTheme, themes, addCommonColors)
}

/**
 * Returns the Tailwind CSS plugin with the Tailux configuration resolved.
 */
function corePlugin(
  prefix: string,
  defaultTheme: string,
  themes: ThemesConfig,
  addCommonColors: boolean = true
) {
  const resolved = resolveConfig(themes, defaultTheme, prefix)

  return plugin(
    // Plugin creator
    ({ addBase, addUtilities, addVariant }) => {
      addBase({
        ':root, [data-theme]': {
          ...baseStyles(prefix)
        }
      })

      // Add the css variables to @layer utilities
      // eg. --tx-primary-500: 212 100% 44%;
      addUtilities({ ...resolved?.utilities, ...utilities })

      // Add each variant to the tailwindcss configuration
      // Each theme is added as variant e.g. "[theme-name]:text-md"
      resolved?.variants.forEach((variant) => {
        addVariant(variant.name, variant.definition)
      })
    },

    // Tailwind CSS configuration
    {
      theme: {
        extend: {
          // @ts-expect-error tailwind types are broken
          colors: {
            ...(addCommonColors ? commonColors : {}),
            ...resolved?.colors
          },
          fontSize: {
            tiny: [
              `var(--${prefix}-font-size-tiny)`,
              `var(--${prefix}-line-height-tiny)`
            ],
            small: [
              `var(--${prefix}-font-size-small)`,
              `var(--${prefix}-line-height-small)`
            ],
            medium: [
              `var(--${prefix}-font-size-medium)`,
              `var(--${prefix}-line-height-medium)`
            ],
            large: [
              `var(--${prefix}-font-size-large)`,
              `var(--${prefix}-line-height-large)`
            ],
            huge: [
              `var(--${prefix}-font-size-huge)`,
              `var(--${prefix}-line-height-huge)`
            ],
            subheading: [
              `var(--${prefix}-font-size-subheading)`,
              `var(--${prefix}-line-height-subheading)`
            ],
            heading: [
              `var(--${prefix}-font-size-heading)`,
              `var(--${prefix}-line-height-heading)`
            ],
            'heading-large': [
              `var(--${prefix}-font-size-heading-large)`,
              `var(--${prefix}-line-height-heading-large)`
            ]
          },
          lineHeight: {
            tiny: `var(--${prefix}-line-height-tiny)`,
            small: `var(--${prefix}-line-height-small)`,
            medium: `var(--${prefix}-line-height-medium)`,
            large: `var(--${prefix}-line-height-large)`,
            huge: `var(--${prefix}-line-height-huge)`,
            subheading: `var(--${prefix}-line-height-subheading)`,
            heading: `var(--${prefix}-line-height-heading)`,
            'heading-large': `var(--${prefix}-line-height-heading-large)`
          },
          borderRadius: {
            // small: `var(--${prefix}-border-radius-small)`,
            // medium: `var(--${prefix}-border-radius-medium)`,
            // large: `var(--${prefix}-border-radius-large)`
            small: `calc(var(--${prefix}-radius) - 4px)`,
            medium: `calc(var(--${prefix}-radius) - 2px)`,
            large: `var(--${prefix}-radius)`
          }
        }
      }
    }
  )
}

const getCustomThemes = (
  themes: CustomThemes,
  defaultThemes: DefaultThemes
) => {
  const customThemes: CustomThemes = {}
  const { dark: darkTheme, light: lightTheme } = defaultThemes
  for (const [themeName, theme] of Object.entries(themes)) {
    const customLightTheme = getCustomTheme(theme.light ?? {}, lightTheme)
    const customDarkTheme = getCustomTheme(theme.dark ?? {}, darkTheme)
    customThemes[themeName] = {
      light: customLightTheme,
      dark: customDarkTheme
    }
  }
  return customThemes
}

const getCustomTheme = (
  customTheme: Partial<BaseTheme>,
  rootTheme?: BaseTheme
): Partial<BaseTheme> => {
  const customLayout = customTheme?.layout ?? {}
  const customColors = customTheme?.colors ?? {}
  return {
    layout: deepmerge(rootTheme?.layout ?? {}, customLayout),
    colors: deepmerge(rootTheme?.colors ?? {}, customColors)
  }
}

/**
 * Verifies if the default theme is valid based on the provided themes configuration.
 * @throws {Error} - Throws an error if the default theme is not defined in the themes configuration.
 */
function verifyDefaultTheme(theme: string, themes: ThemesConfig) {
  const custom = themes.custom ?? {}
  const customKeys = Object.keys(custom)
  const themeNames = customKeys.reduce<string[]>(
    (acc, themeName) => [...acc, `${themeName}-light`, `${themeName}-dark`],
    []
  )

  if (theme === 'light' || theme === 'dark') {
    return
  }
  if (themeNames.includes(theme)) {
    return
  }
  throw new Error(
    `The default theme "${theme}" is not defined in the themes configuration.`
  )
}
