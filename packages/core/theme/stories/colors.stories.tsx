import { readableColor } from 'color2k'
import type { Meta, StoryObj } from '@storybook/react'
import type { ColorSchemeShades } from '../src/colors'
import { commonColors } from '../src/colors/common'
import { getColorSchemeShades } from '../src/utils/object'

interface ColorItemProps {
  bgColor: string
  textColor: string
  name: string
}

function ColorItem(props: ColorItemProps) {
  const { bgColor, textColor, name } = props
  return (
    <li
      className={`flex h-[110px] rounded-xl items-center justify-center shadow-inner`}
      style={{
        backgroundColor: bgColor,
        color: textColor
      }}
    >
      <div className="flex flex-col justify-center text-center">
        <span className="text-sm font-semibold">{name}</span>
        <span className="text-xs">{bgColor}</span>
      </div>
    </li>
  )
}

interface ColorSchemePreviewProps {
  colorScheme: ColorSchemeShades
  colorName: string
}

function ColorSchemePreview(props: ColorSchemePreviewProps) {
  const { colorScheme, colorName } = props
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">{colorName}</h2>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-3">
        {Object.entries(colorScheme).map(([tone, color]) => (
          <ColorItem
            key={tone}
            bgColor={color}
            textColor={readableColor(color)}
            name={`${colorName}-${tone}`}
          />
        ))}
      </ul>
    </section>
  )
}

interface ColorsPreviewProps {
  colors: ColorSchemePreviewProps[]
}

function ColorsPreview(props: ColorsPreviewProps) {
  const { colors } = props
  return (
    <div className="space-y-8">
      {colors.map((color) => (
        <ColorSchemePreview key={color.colorName} {...color} />
      ))}
    </div>
  )
}

const meta: Meta<typeof ColorsPreview> = {
  title: 'Foundations/Colors',
  component: ColorsPreview
}

export default meta

type Story = StoryObj<typeof ColorsPreview>

export const CommonColors: Story = {
  args: {
    colors: Object.entries(commonColors).map(([colorName, colorScheme]) => ({
      colorName,
      colorScheme: getColorSchemeShades(colorScheme)
    }))
  } satisfies ColorsPreviewProps
}
