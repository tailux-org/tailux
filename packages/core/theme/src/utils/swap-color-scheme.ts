import type { ColorScheme } from '../colors'

export default function swapColorScheme(color: ColorScheme): ColorScheme {
  if (!color) throw new Error('Color is required')
  const flatColor = Object.assign({}, color)
  delete flatColor.DEFAULT
  delete flatColor.BASE
  const keys = Object.keys(flatColor) as Array<keyof ColorScheme>
  const length = keys.length
  const newColor: ColorScheme = {
    BASE: color.DEFAULT,
    DEFAULT: color.BASE
  }
  for (let i = 0; i < length; i++) {
    const keyLeft = keys[i]
    const keyRight = keys[length - i - 1]
    newColor[keyLeft] = flatColor[keyRight]
  }
  return newColor
}
