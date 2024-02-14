import { abbeyColor } from './palette/abbey'
import { crimsonColor } from './palette/crimson'
import { grapeColor } from './palette/grape'
import { jadeColor } from './palette/jade'
import { magentaColor } from './palette/magenta'
import { sapphireColor } from './palette/sapphire'
import { sunflowerColor } from './palette/sunflower'
import { type ColorScheme } from './types'

export interface StaticColors {
  abbey: ColorScheme
  sapphire: ColorScheme
  grape: ColorScheme
  magenta: ColorScheme
  crimson: ColorScheme
  sunflower: ColorScheme
  jade: ColorScheme
}

export const staticColors: StaticColors = {
  abbey: abbeyColor,
  sapphire: sapphireColor,
  grape: grapeColor,
  magenta: magentaColor,
  crimson: crimsonColor,
  sunflower: sunflowerColor,
  jade: jadeColor
}
