import { commonColors, type ColorScheme } from '../colors'
import {
  flattenObject,
  removeDefaultKeys,
  swapColorScheme
} from '../utils/object'

describe('utils object', () => {
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
      DEFAULT: originalColor.DEFAULT
    }
    expect(swappedColor).toEqual(expectedColor)
  })

  test('cleanObject should remove the -DEFAULT suffix from the keys', () => {
    const obj = {
      'key-DEFAULT': 'value',
      'key1-DEFAULT': 'value1',
      key2: 'value2'
    }
    const expectedObj = {
      key: 'value',
      key1: 'value1',
      key2: 'value2'
    }
    expect(removeDefaultKeys(obj)).toEqual(expectedObj)
  })

  test('flattenObject should flatten the object correctly', () => {
    const obj = {
      key: {
        key1: 'value1',
        key2: 'value2',
        DEFAULT: 'default-value'
      }
    }
    const expectedObj = {
      'key-key1': 'value1',
      'key-key2': 'value2',
      key: 'default-value'
    }
    expect(flattenObject(obj)).toEqual(expectedObj)
  })
})
