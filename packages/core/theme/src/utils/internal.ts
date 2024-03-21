import type { TailuxPluginConfig } from '../types'
import { defaultPluginConfig } from '../config'
import Color from 'color'

/**
 * Retrieves the prefix from the Tailux plugin configuration.
 * If it is an invalid prefix, it will return the default prefix.
 *
 * @param config - The Tailux plugin configuration.
 * @returns The prefix from the configuration or the default prefix.
 */
export const getPrefixFromConfig = (config: TailuxPluginConfig) => {
  if (
    config.prefix &&
    typeof config.prefix === 'string' &&
    config.prefix.trim()
  ) {
    return config.prefix.replaceAll(' ', '_')
  }
  return defaultPluginConfig.prefix
}

/**
 * Converts a hexadecimal color code to an HSL array.
 * @param hex - The hexadecimal color code to convert.
 * @returns The HSL array representation of the color.
 */
export const hexToHslArray = (hex: string) => {
  return Color(hex).hsl().round().array()
}

/**
 * Returns the base styles.
 * These styles are meant to be used in the root element
 * with the `addBase` function from Tailwind CSS.
 */
export const baseStyles = (prefix: string) => ({
  color: `hsl(var(--${prefix}-foreground))`,
  backgroundColor: `hsl(var(--${prefix}-background))`
})

/**
 * Converts a string to kebab case.
 *
 * @example
 * kebabCase('helloWorld') // hello-world
 * kebabCase('hello world') // hello-world
 * kebabCase('hello_world') // hello-world
 *
 */
export const kebabCase = (str: string) => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
}

/**
 * Maps the keys of an object to new keys based on a mapping function.
 *
 * @template TObject - The type of the object.
 * @param obj - The object to map the keys of.
 * @param fn - The mapping function that takes a key and value and returns a new key.
 * @returns - The new object with mapped keys.
 */
export function mapKeys<
  TObject extends Record<string, any> = Record<string, any>
>(
  obj: TObject,
  fn: (key: keyof TObject, value: TObject[keyof TObject]) => string | number
) {
  const result: Record<string, any> = {}
  for (const key in obj) {
    result[fn(key, obj[key])] = obj[key]
  }
  return result
}

/**
 * Creates a new object by omitting specified keys from the input object.
 *
 * @template T - The type of the input object.
 * @template K - The type of the keys to be omitted.
 * @param obj - The input object.
 * @param keys - An array of keys to be omitted from the input object.
 * @returns A new object with the specified keys omitted.
 */
export function omit<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const shallowCopy = Object.assign({}, obj)
  for (const key of keys) {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete shallowCopy[key]
  }
  return shallowCopy
}
