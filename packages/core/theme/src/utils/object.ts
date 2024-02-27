import type { ColorScheme, ColorSchemeShades } from '../colors'
import type { Entries } from 'type-fest'

/**
 * Returns the shades of a given color scheme.
 * @param colorScheme - The color scheme object.
 * @returns The shades of the color scheme.
 * @throws {Error} If colorScheme is not provided.
 */
export function getColorSchemeShades(
  colorScheme: ColorScheme
): ColorSchemeShades {
  if (!colorScheme)
    throw new Error('colorScheme is required to get shades of color scheme')
  const shades: ColorSchemeShades = {}
  const keys = Object.keys(colorScheme) as Array<keyof ColorScheme>
  for (const key of keys) {
    if (!isNaN(Number(key))) {
      shades[key as keyof ColorSchemeShades] = colorScheme[key]
    }
  }
  return shades
}

/**
 * Swaps the colors in a given color scheme.
 * @param colorScheme - The color scheme to swap colors for.
 * @returns The new color scheme with swapped colors.
 * @throws Error if the colorScheme parameter is not provided.
 */
export function swapColorScheme(colorScheme: ColorScheme): ColorScheme {
  if (!colorScheme) throw new Error('colorScheme is required to swap colors')
  const colorShades = getColorSchemeShades(colorScheme)
  const colorKeys = Object.keys(colorShades) as unknown as Array<
    keyof ColorSchemeShades
  >
  const newColor: Partial<ColorScheme> = {
    BASE: colorScheme.BASE
  }
  for (let i = 0; i < colorKeys.length; i++) {
    const keyLeft = colorKeys[i]
    const keyRight = colorKeys[colorKeys.length - i - 1]
    newColor[keyLeft] = colorScheme[keyRight]
  }
  return newColor as ColorScheme
}

/**
 * Retrieves a iterable color scheme shades for a given color scheme.
 * @param colorScheme - The color scheme to retrieve the shades for.
 * @returns An array of key-value pairs representing the color scheme shades.
 */
export function getIterableColorSchemeShades(colorScheme: ColorScheme) {
  const shades = getColorSchemeShades(colorScheme)
  const entries = Object.entries(shades) as unknown as Entries<typeof shades>
  return entries
}

/**
 * Picks a color from the color scheme based on the provided color key.
 * If the color key is not found in the color scheme, the default color is returned.
 * @param colorKey - The key of the color to pick from the color scheme.
 * @param colorScheme - The color scheme object.
 * @returns The picked color.
 * @throws {Error} If the color scheme is undefined or if the color key is invalid.
 */
export function pickColor(
  colorKey: keyof ColorScheme,
  colorScheme: ColorScheme
): string {
  if (!colorScheme) throw new Error('Color scheme is required')
  if (!(colorKey in colorScheme)) throw new Error('Color key is invalid')
  return colorScheme[colorKey] ?? colorScheme.BASE
}
