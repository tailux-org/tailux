import type { BaseTheme, ThemesConfig } from './types'
import { flattenObject } from './utils'
import { hexToHslArray, kebabCase, mapKeys, omit } from './utils/internal'

/**
 * All resolved configurations for the custom tailwindcss plugin.
 */
interface ResolvedConfig {
  variants: ResolvedVariants
  utilities: ResolvedUtilities
  colors: ResolvedColors
}

/**
 * The props that are going to be used to resolve the color alpha.
 */
interface ColorAlphaProps {
  opacityValue: string
  opacityVariable: string
}

/**
 * All definitions of a custom tailwindcss variant.
 * They are meant to be used in the "addVariant" function.
 *
 * @example
 * const variant = {
 *  name: 'inverted-colors',
 *  definition: ['@media (inverted-colors: inverted)']
 * }
 */
interface VariantDefinitions {
  name: string
  definition: string[]
}

/**
 * All the resolved variants for the custom tailwindcss plugin.
 */
type ResolvedVariants = VariantDefinitions[]

/**
 * All the resolved utilities for the custom tailwindcss plugin.
 */
type ResolvedUtilities = Record<string, Record<string, any>>

/**
 * All the resolved colors for the custom tailwindcss plugin.
 */
type ResolvedColors = Record<string, (alphaProps: ColorAlphaProps) => string>

export const resolveConfig = (
  themes: ThemesConfig,
  defaultTheme: string,
  prefix: string
) => {
  const resolved: ResolvedConfig = {
    variants: [],
    utilities: {},
    colors: {}
  }
  const defaultThemes = omit(themes, ['custom'])
  const defaultThemesEntries = Object.entries(defaultThemes)
  const customThemesEntries = Object.entries(themes.custom ?? {})
  const customThemesParsed = customThemesEntries.reduce((acc, curr) => {
    const themeName = curr[0]
    const themeLight = curr[1].light ?? {}
    const themeDark = curr[1].dark ?? {}
    return {
      ...acc,
      [`${themeName}-light`]: themeLight,
      [`${themeName}-dark`]: themeDark
    }
  }, {})
  const themesEntries = [
    ...defaultThemesEntries,
    ...Object.entries(customThemesParsed ?? {})
  ] as Array<[string, Partial<BaseTheme>]>
  const parsedColors: Record<string, number[]> = {}

  for (const [themeName, { colors, layout }] of themesEntries) {
    const cssSelector = getThemeCssSelector(themeName, defaultTheme)
    const colorScheme = themeName.match(/(dark|light)$/g)?.[0] ?? 'light'

    resolved.utilities[cssSelector] = {
      '--color-scheme': colorScheme,
      'color-scheme': 'var(--color-scheme)'
    }

    // set the resolved.variants
    resolved.variants.push({
      name: themeName,
      definition: [`&.${themeName}`, `&[data-theme='${themeName}']`]
    })

    // Flatten all the colors and layout tokens
    const flatColors = flattenObject(colors ?? {}) as Record<string, string>
    const flatLayout = layout ? mapKeys(layout, (key) => kebabCase(key)) : {}

    // Colors
    for (const color of Object.entries(flatColors)) {
      const [colorName, colorValue] = color
      try {
        const hslaArray = parsedColors[colorValue] || hexToHslArray(colorValue)
        parsedColors[colorValue] = hslaArray

        const [h, s, l, defaultAlphaValue] = hslaArray
        const tailuxColorVariable = `--${prefix}-${colorName}`
        const tailuxOpacityVariable = `--${prefix}-${colorName}-opacity`

        const hslValues = `${h} ${s}% ${l}%`

        // Add the css variables in "@layer utilities" for the hsl values
        resolved.utilities[cssSelector][tailuxColorVariable] = hslValues

        // If an alpha value was provided in the color definition, store it in a css variable
        if (defaultAlphaValue && typeof defaultAlphaValue === 'number') {
          resolved.utilities[cssSelector][tailuxOpacityVariable] =
            defaultAlphaValue.toFixed(2)
        }

        // set the dynamic color in tailwind config theme.colors
        resolved.colors[colorName] = ({ opacityValue, opacityVariable }) => {
          // If the opacity is set with a slash (e.g. bg-primary/90), use the provided value
          if (!isNaN(+opacityValue)) {
            return `hsl(var(${tailuxColorVariable}) / ${opacityValue})`
          }
          // if no opacityValue was provided
          // the tailuxOpacityVariable (opacity defined in the color definition rgb(0, 0, 0, 0.5)) should have the priority
          // over the tw class based opacity(e.g. "bg-opacity-90")
          // This is how tailwind behaves as for v3.2.4
          if (opacityVariable) {
            return `hsl(var(${tailuxColorVariable}) / var(${tailuxOpacityVariable}, var(${opacityVariable})))`
          }
          return `hsl(var(${tailuxColorVariable}) / var(${tailuxOpacityVariable}, 1))`
        }
      } catch (error) {
        console.error(
          `An error occurred while trying to resolve the color ${colorName}: `,
          error
        )
      }
    }

    // Layout
    // eg. key = 'font-size', value = { ..., 'heading-large': '2rem' }
    for (const [key, value] of Object.entries(flatLayout)) {
      if (!value) {
        console.log(
          'An error occurred while trying to resolve the layout property: ',
          key
        )
        return
      }
      // eg. --tx-font-size
      const layoutVariable = `--${prefix}-${key}`
      // eg. value = { ..., 'heading-large': '2rem' }
      if (typeof value === 'object') {
        // eg. nestedKey = 'large', nestedValue = '2rem'
        for (const [nestedKey, nestedValue] of Object.entries(value)) {
          // eg. --tx-font-size-heading-large
          const nestedLayoutVariable = `${layoutVariable}-${nestedKey}`
          resolved.utilities[cssSelector][nestedLayoutVariable] = nestedValue
        }
      } else {
        // Handle opacity values and other layout values
        const formattedValue =
          layoutVariable.includes('opacity') && typeof value === 'number'
            ? value.toString().replace(/^0\./, '.')
            : value

        resolved.utilities[cssSelector][layoutVariable] = formattedValue
      }
    }
  }

  return resolved
}

const getThemeCssSelector = (themeName: string, defaultTheme: string) => {
  let selector = `.${themeName},[data-theme="${themeName}"]`
  if (themeName === defaultTheme) {
    selector = `:root,${selector}`
  }
  return selector
}
