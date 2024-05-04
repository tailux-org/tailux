import { forwardRef as baseForwardRef } from 'react'
import type {
  As,
  PropsOf,
  RightJoinProps,
  TailuxForwardRefRenderFunction
} from '../types'

export function canUseDOM(): boolean {
  return !!(
    typeof window !== 'undefined' &&
    typeof window.document !== 'undefined' &&
    typeof window.document.createElement !== 'undefined'
  )
}

export function forwardRef<
  Component extends As,
  Props extends object,
  OmitKeys extends keyof any = never
>(
  component: React.ForwardRefRenderFunction<
    any,
    RightJoinProps<PropsOf<Component>, Props> & {
      as?: As
    }
  >
) {
  return baseForwardRef(component) as TailuxForwardRefRenderFunction<
    Component,
    Props,
    OmitKeys
  >
}
