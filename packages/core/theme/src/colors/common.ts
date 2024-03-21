import type { ICommonColors } from './types'
import abbeyColor from './abbey'
import crimsonColor from './crimson'
import grapeColor from './grape'
import jadeColor from './jade'
import magentaColor from './magenta'
import sapphireColor from './sapphire'
import sunflowerColor from './sunflower'

/**
 * All common Tailux colors.
 * These colors do not belong to a specific theme and will look the same in
 * light and dark mode or in any custom theme.
 */
const commonColors: ICommonColors = {
  abbey: abbeyColor,
  sapphire: sapphireColor,
  grape: grapeColor,
  magenta: magentaColor,
  jade: jadeColor,
  sunflower: sunflowerColor,
  crimson: crimsonColor
}

export default commonColors
