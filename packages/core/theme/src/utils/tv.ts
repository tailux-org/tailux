import { type TV, tv as tvBase } from 'tailwind-variants'

const baseScales = ['small', 'medium', 'large']
const extendedScales = [
  'tiny',
  'huge',
  'subheading',
  'heading',
  'heading-large'
]
const scales = [...baseScales, ...extendedScales]

export const tv: TV = (options, config) => {
  return tvBase(options, {
    ...config,
    twMerge: config?.twMerge ?? true,
    twMergeConfig: {
      ...config?.twMergeConfig,
      theme: {
        ...config?.twMergeConfig?.theme,
        borderRadius: baseScales,
        lineHeight: scales
      },
      // See DefaultClassGroupId https://github.com/dcastil/tailwind-merge/blob/main/src/lib/types.ts#L129
      classGroups: {
        ...config?.twMergeConfig?.classGroups,
        'font-size': [{ text: [...scales] }],
        leading: [{ leading: [...scales] }],
        shadow: [{ shadow: [...baseScales] }]
      }
    }
  })
}
