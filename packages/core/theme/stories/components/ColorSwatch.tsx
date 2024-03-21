import { readableColor } from 'color2k'
import type { ColorItem, ColorSwatchListProps } from '../utils/colors'

function ColorSwatch(props: ColorItem) {
  const { color, className, tone } = props
  return (
    <div
      className={`
        px-4 py-2 flex flex-col items-center 
        justify-center min-w-24 h-[5.5rem] rounded-lg 
        border border-divider shadow-sm 
        ${className}
      `}
      style={{
        color: readableColor(color)
      }}
    >
      <span className="flex items-center text-medium font-semibold flex-1 justify-center">
        {tone}
      </span>
      <span className="text-small">{color}</span>
    </div>
  )
}

function SemanticSwatch(props: ColorItem) {
  const { color, className, textClassName, tone } = props
  return (
    <div
      className={`
        px-4 py-2 flex flex-col items-center 
        justify-center min-w-24 h-[5.5rem] rounded-lg 
        border border-divider shadow-sm 
        ${className}
      `}
    >
      <span
        className={`
          flex items-center text-medium 
          font-semibold flex-1 justify-center 
          ${textClassName}
        `}
      >
        {tone ?? color}
      </span>
      {tone && <span className={`${textClassName} text-sm`}>{color}</span>}
    </div>
  )
}

export function ColorSwatchList(props: ColorSwatchListProps) {
  const { colors = [], isSemantic = false } = props
  return (
    <div className="mb-5 text-foreground bg-background">
      {colors.map((color, index) => (
        <section key={index}>
          <h3
            id={color.title}
            className="text-foreground-strong text-lg font-semibold my-5"
          >
            {color.title}
          </h3>
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-3 pl-5">
            {color.items.map((item, index) =>
              !item.className?.includes('DEFAULT') ? (
                <li className="list-none m-0! mt-0!" key={index}>
                  {isSemantic ? (
                    <SemanticSwatch {...item} />
                  ) : (
                    <ColorSwatch {...item} />
                  )}
                </li>
              ) : null
            )}
          </ul>
        </section>
      ))}
    </div>
  )
}
