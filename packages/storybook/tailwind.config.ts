import type { Config } from 'tailwindcss'
import { tailux } from '@tailux/theme/plugin'
import {
  flattenObject,
  commonColors,
  semanticColors,
  type ICommonColors,
  type ISemanticColors
} from '@tailux/theme'

const getSafeListColors = (colors: ICommonColors | ISemanticColors) => {
  const entries = Object.entries(flattenObject(colors))
  return entries
    .map((pair) => {
      const [key] = pair
      return [`bg-${key}`, `text-${key}`]
    })
    .flat()
}

const safeCommon = getSafeListColors(commonColors)
const safeSemantic = getSafeListColors(semanticColors.light)

const config: Config = {
  darkMode: 'class',
  content: [
    './**/*.{js,jsx,ts,tsx,mdx}',
    './stories/**/*.{js,jsx,ts,tsx,mdx}',
    '../core/theme/src/**/*.{js,jsx,ts,tsx}',
    '../core/theme/stories/**/*.{js,jsx,ts,tsx,mdx}',
    '../components/*/src/**/*.{js,jsx,ts,tsx}',
    '../components/*/stories/**/*.{js,jsx,ts,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {}
    }
  },
  safelist: [...safeCommon, ...safeSemantic],
  plugins: [
    tailux({
      layout: {},
      themes: {
        light: {
          colors: {
            'foreground-inverted': '#fff',
            'foreground-neutral': '#000'
          }
        },
        dark: {
          colors: {
            'foreground-inverted': '#000',
            'foreground-neutral': '#fff'
          }
        },
        custom: {
          forest: {
            dark: {},
            light: {}
          },
          sky: {
            light: {
              colors: {}
            }
          }
        }
      }
    })
  ]
}

export default config
