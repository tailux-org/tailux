import { flatten } from 'flat'
import { type ColorScheme } from '../colors'

/**
 * Swaps all shades of a color scheme. This function takes a color scheme object
 * and returns a new color scheme object with the colors swapped.
 * For instance, the shade 100 will become the shade 900, the shade 200 will become
 * the shade 800, and so on.
 *
 * This is useful when you want to create a dark mode color scheme
 * from a light mode color scheme.
 *
 * @param colorScheme - The color scheme object to swap colors.
 * @returns The new color scheme object with swapped colors.
 * @throws {Error} If the `colorScheme` argument is not provided.
 */
export function swapColorScheme(colorScheme: ColorScheme): ColorScheme {
  if (!colorScheme)
    throw new Error('argument colorScheme is required to swap colors')
  const _colorScheme: Partial<ColorScheme> = Object.assign({}, colorScheme)
  delete _colorScheme.DEFAULT
  const keys = Object.keys(_colorScheme) as Array<keyof ColorScheme>
  const newColor: Partial<ColorScheme> = {
    DEFAULT: colorScheme.DEFAULT
  }
  for (let i = 0; i < keys.length; i++) {
    const keyLeft = keys[i]
    const keyRight = keys[keys.length - i - 1]
    newColor[keyLeft] = colorScheme[keyRight]
  }
  return newColor as ColorScheme
}

/**
 * Removes the suffix "-DEFAULT" or "-default" from the keys
 * of an object and returns a new object with the cleaned keys.
 * @param obj - The object to clean.
 * @returns A new object with the cleaned keys.
 */
export function removeDefaultKeys<T extends object>(obj: T) {
  const newObj: Record<string, any> = {}
  for (const key in obj) {
    if (key.endsWith('-DEFAULT')) {
      newObj[key.replace('-DEFAULT', '')] = obj[key]
      continue
    }
    if (key.endsWith('-default')) {
      newObj[key.replace('-default', '')] = obj[key]
      continue
    }
    newObj[key] = obj[key]
  }
  return newObj
}

/**
 * This function takes an object and returns a new object
 * with all the properties of the input object flattened into a single level.
 * The keys of the new object are the path of the original object, joined by the delimiter.
 *
 * @example
 * const obj = { a: { b: { c: 1 } } }
 * const flattenObj = flattenObject(obj) // { 'a-b-c': 1 }
 *
 * @param obj The object to flatten
 * @param delimiter The delimiter to use for the keys of the new object. Default is '-'
 * @param clean A boolean flag to remove the '-DEFAULT' and '-default'
 * suffixes from the keys of the new object. Default is true
 * @returns A new object with all the properties of the input object flattened into a single level
 */
export function flattenObject<T extends object>(
  obj: T,
  delimiter = '-',
  clean = true
) {
  const flattenObj: Record<string, any> = flatten(obj, {
    delimiter,
    safe: true
  })
  return clean ? removeDefaultKeys(flattenObj) : flattenObj
}
