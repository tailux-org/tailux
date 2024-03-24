import { type ColorScheme, commonColors } from '../../src'

export interface ColorItem {
  color: string
  tone?: string
  className?: string
  textClassName?: string
}

export interface ColorsSwatch {
  title: string
  items: ColorItem[]
}

export interface ColorSwatchListProps {
  colors: ColorsSwatch[]
  isSemantic?: boolean
}

function getCommonColors() {
  const entries = Object.entries(commonColors) as Array<[string, ColorScheme]>
  const colors = entries.map(([colorName, colorScheme]) => {
    const schemeEntries = Object.entries(colorScheme) as Array<[string, string]>
    return {
      title: capitalCase(colorName),
      items: schemeEntries.map(([tone, color]) => {
        return {
          color,
          tone,
          className: `bg-${colorName}-${tone}`
        } satisfies ColorItem
      })
    } satisfies ColorsSwatch
  })
  return colors
}

function getSemanticColors() {
  const secureZones = {
    default: {
      scope: [430, 560],
      secureColor: 'text-white'
    },
    primary: {
      scope: [500, 500],
      secureColor: 'text-white'
    },
    secondary: {
      scope: [430, 560],
      secureColor: 'text-white'
    },
    success: {
      scope: [400, 600],
      secureColor: 'text-black'
    },
    warning: {
      scope: [400, 600],
      secureColor: 'text-black'
    },
    danger: {
      scope: [500, 500],
      secureColor: 'text-black'
    }
  }
  const colorsEnum = Object.keys(secureZones) as Array<keyof typeof secureZones>
  const colorScale = Object.keys(commonColors.abbey).filter(
    (key) => !isNaN(Number(key))
  )
  const colors = colorsEnum.map((colorName) => {
    return {
      title: capitalCase(colorName),
      items: colorScale.map((tone) => {
        const zone = secureZones[colorName]
        const min = zone.scope[0]
        const max = zone.scope[1]
        const numberTone = Number(tone)
        const colorText =
          numberTone >= min && numberTone <= max
            ? zone.secureColor
            : numberTone < min
              ? 'text-foreground-neutral'
              : 'text-foreground-inverted'
        return {
          color: '',
          tone: `${colorName}-${tone}`,
          className: `bg-${colorName}-${tone}`,
          textClassName: colorText
        } satisfies ColorItem
      })
    } satisfies ColorsSwatch
  })
  return colors
}

function capitalCase(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const commonSwatch: ColorSwatchListProps = {
  colors: [...getCommonColors()]
}

export const semanticSwatch: ColorSwatchListProps = {
  isSemantic: true,
  colors: [
    {
      title: 'Layout',
      items: [
        {
          color: 'background',
          className: 'bg-background',
          textClassName: 'text-foreground'
        },
        {
          color: 'divider-subtle',
          className: 'bg-divider-subtle',
          textClassName: 'text-foreground'
        },
        {
          color: 'divider',
          className: 'bg-divider',
          textClassName: 'text-foreground'
        },
        {
          color: 'divider-strong',
          className: 'bg-divider-strong',
          textClassName: 'text-foreground'
        },
        {
          color: 'focus',
          className: 'bg-focus',
          textClassName: 'text-white'
        }
      ]
    },
    {
      title: 'Surfaces',
      items: [
        {
          color: 'surface1',
          className: 'bg-surface1',
          textClassName: 'text-foreground'
        },
        {
          color: 'surface2',
          className: 'bg-surface2',
          textClassName: 'text-foreground'
        },
        {
          color: 'surface3',
          className: 'bg-surface3',
          textClassName: 'text-foreground'
        },
        {
          color: 'surface4',
          className: 'bg-surface4',
          textClassName: 'text-foreground'
        },
        {
          color: 'surface5',
          className: 'bg-surface5',
          textClassName: 'text-foreground'
        }
      ]
    },
    {
      title: 'Foreground',
      items: [
        {
          color: 'foreground',
          className: 'bg-foreground',
          textClassName: 'text-foreground-inverted'
        },
        {
          color: 'subtle',
          className: 'bg-foreground-subtle',
          textClassName: 'text-foreground-inverted'
        },
        {
          color: 'strong',
          className: 'bg-foreground-strong',
          textClassName: 'text-foreground-inverted'
        },
        {
          color: 'muted',
          className: 'bg-foreground-muted',
          textClassName: 'text-foreground-inverted'
        }
      ]
    },
    {
      title: 'Base Colors',
      items: [
        {
          color: 'primary',
          className: 'bg-primary',
          textClassName: 'text-white'
        },
        {
          color: 'secondary',
          className: 'bg-secondary',
          textClassName: 'text-white'
        },
        {
          color: 'success',
          className: 'bg-success',
          textClassName: 'text-black'
        },
        {
          color: 'warning',
          className: 'bg-warning',
          textClassName: 'text-black'
        },
        {
          color: 'danger',
          className: 'bg-danger',
          textClassName: 'text-white'
        },
        {
          color: 'default',
          className: 'bg-default',
          textClassName: 'text-white'
        }
      ]
    },
    ...getSemanticColors()
  ]
}
