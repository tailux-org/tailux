import { readableColor } from 'color2k'

export interface ColorPreviewProps {
  color?: string
  name: string | number
  isRounded?: boolean
}

export default function ColorPreview(props: ColorPreviewProps) {
  const { color = '#00000', name, isRounded = true } = props
  return (
    <li
      className={`flex flex-col items-center text-center py-3 px-4 min-h-20 h-full ${
        isRounded ? 'rounded-xl' : ''
      }`}
      style={{
        backgroundColor: color,
        color: readableColor(color ?? '')
      }}
    >
      <span className="flex items-center !text-sm font-semibold flex-1 ">
        {name}
      </span>
      <span className="!text-xs">{color}</span>
    </li>
  )
}
