import { tv } from './tv'

describe('tv', () => {
  it('should merge shadow correctly', () => {
    const componentClassNames = [
      'shadow-small',
      'shadow-md',
      'shadow-medium',
      'shadow-sm',
      'shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]',
      'shadow-large'
    ]
    const classNames = tv({
      base: componentClassNames.join(' ')
    })
    const result = classNames()
    expect(result).toEqual('shadow-large')
  })

  it('should merge font-size correctly', () => {
    const componentClassNames = [
      'text-small',
      'text-huge',
      'text-subheading',
      'text-[300px]',
      'text-sm',
      'text-heading'
    ]
    const classNames = tv({
      base: componentClassNames.join(' ')
    })
    const result = classNames()
    expect(result).toEqual('text-heading')
  })

  it('should merge background correctly', () => {
    const componentClassNames = [
      'bg-slate',
      'bg-gray-500',
      'bg-[#f00]',
      'bg-secondary-400',
      'bg-primary/20',
      'bg-primary'
    ]
    const classNames = tv({
      base: componentClassNames.join(' ')
    })
    const result = classNames()
    expect(result).toEqual('bg-primary')
  })

  it('should merge border-radius correctly', () => {
    const componentClassNames = [
      'rounded-sm',
      'rounded-[20px]',
      'rounded-medium',
      'rounded-large',
      'rounded-2xl',
      'rounded-medium'
    ]
    const classNames = tv({
      base: componentClassNames.join(' ')
    })
    const result = classNames()
    expect(result).toEqual('rounded-medium')
  })

  it('should merge line-height correctly', () => {
    const componentClassNames = [
      'leading-small',
      'leading-[3rem]',
      'leading-10',
      'leading-none',
      'leading-normal',
      'leading-tight',
      'leading-subheading',
      'leading-relaxed',
      'leading-tiny'
    ]
    const classNames = tv({
      base: componentClassNames.join(' ')
    })
    const result = classNames()
    expect(result).toEqual('leading-tiny')
  })
})
