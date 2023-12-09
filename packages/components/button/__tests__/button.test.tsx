import * as React from 'react'
import { render } from '@testing-library/react'
import { Button } from '../src'

describe('ButtonComponent', () => {
  it('should render correctly', () => {
    const wrapper = render(<Button />)

    expect(() => {
      wrapper.unmount()
    }).not.toThrow()
  })

  it('should forward ref', () => {
    const ref = React.createRef<HTMLButtonElement>()

    render(<Button ref={ref} />)
    expect(ref.current).not.toBeNull()
  })
})
