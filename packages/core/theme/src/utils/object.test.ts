import type { ColorScheme } from '../colors'
import { commonColors } from '../colors/common'
import {
  getColorSchemeShades,
  getIterableColorSchemeShades,
  swapColorScheme
} from './object'

describe('utils object', () => {
  test('getColorSchemeShades should get only the shades of a color scheme', () => {
    const shades = getColorSchemeShades(commonColors.abbey)
    const clearedColor = Object.entries(commonColors.abbey).filter(
      ([key]) => !isNaN(Number(key))
    )
    expect(shades).toEqual(Object.fromEntries(clearedColor))
  })

  test('swapColorScheme should swap the color scheme correctly', () => {
    const originalColor = Object.assign({}, commonColors.abbey)
    const swappedColor = swapColorScheme(commonColors.abbey)
    const expectedColor: ColorScheme = {
      50: originalColor[950],
      100: originalColor[900],
      130: originalColor[860],
      160: originalColor[830],
      200: originalColor[800],
      230: originalColor[760],
      260: originalColor[730],
      300: originalColor[700],
      330: originalColor[660],
      360: originalColor[630],
      400: originalColor[600],
      430: originalColor[560],
      460: originalColor[530],
      500: originalColor[500],
      530: originalColor[460],
      560: originalColor[430],
      600: originalColor[400],
      630: originalColor[360],
      660: originalColor[330],
      700: originalColor[300],
      730: originalColor[260],
      760: originalColor[230],
      800: originalColor[200],
      830: originalColor[160],
      860: originalColor[130],
      900: originalColor[100],
      950: originalColor[50],
      BASE: originalColor.BASE
    }
    expect(swappedColor).toEqual(expectedColor)
  })

  test('getIterableColorSchemeShades should return the color scheme shades as an iterable', () => {
    const iterableColor = getIterableColorSchemeShades(commonColors.abbey)
    const shades = getColorSchemeShades(commonColors.abbey)
    expect(iterableColor).toEqual(Object.entries(shades))
  })
})
