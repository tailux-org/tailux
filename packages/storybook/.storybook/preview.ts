import { Preview } from '@storybook/react'

import './style.css'

const parameters: Preview['parameters'] = {
  viewMode: 'docs',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    disable: true,
    expanded: true
  },
  docs: {
    source: {
      excludeDecorators: true,
      type: 'source'
    },
    toc: true
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Foundations', 'Components']
    }
  }
}

const globalTypes: Preview['globalTypes'] = {}

const preview: Preview = {
  parameters,
  globalTypes
}

export default preview
