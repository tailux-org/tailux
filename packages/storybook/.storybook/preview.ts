import { Preview } from '@storybook/react'

import './style.css'

const parameters: Preview['parameters'] = {
  viewMode: 'docs',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    // disable: true,
    // expanded: true
  },
  docs: {
    toc: {
      contentsSelector: '.sbdocs-content',
      headingSelector: 'h2, h3, h4',
      disable: false
    }
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Welcome', 'Foundations', 'Components']
    }
  }
}

const globalTypes: Preview['globalTypes'] = {}

const preview: Preview = {
  parameters,
  globalTypes
}

export default preview
