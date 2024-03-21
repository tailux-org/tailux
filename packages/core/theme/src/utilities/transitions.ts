const DEFAULT_TRANSITION_DURATION = '250ms'

export default {
  '.transition-opacity': {
    'transition-property': 'opacity',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION
  },
  '.transition-colors-opacity': {
    'transition-property':
      'color, background-color, border-color, text-decoration-color, fill, stroke, opacity',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION
  },
  '.transition-width': {
    'transition-property': 'width',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION
  },
  '.transition-height': {
    'transition-property': 'height',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION
  },
  '.transition-size': {
    'transition-property': 'width, height',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION
  }
}
