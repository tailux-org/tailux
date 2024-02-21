import { type ColorScheme, getIterableColorSchemeShades } from '@tailux/theme'
import ColorPreview from './ColorPreview'

interface ColorSchemePreviewProps {
  colorScheme: ColorScheme
}

function ColorSchemePreview({ colorScheme }: ColorSchemePreviewProps) {
  const iterableColor = getIterableColorSchemeShades(colorScheme)
  return (
    <div>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(110px,1fr))] gap-3 pl-5">
        {iterableColor.map(([tone, color], index) => (
          <ColorPreview key={index} color={color} name={tone}></ColorPreview>
        ))}
      </ul>
    </div>
  )
}

export default ColorSchemePreview
