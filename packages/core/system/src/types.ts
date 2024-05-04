/*
 * Part of this code has been taken from nextui and chakra-ui
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/src/system/system.types.tsx
 * https://github.com/nextui-org/nextui/blob/main/packages/core/system-rsc/src/types.ts
 */

/**
 * Represents a React Element. It accepts any React element or component.
 * If it is a component, it expects a generic type for the props.
 */
export type As<Props = any> = React.ElementType<Props>

/**
 * Represents a DOM element type. It accepts any HTML or SVG tag.
 */
export type DOMElements = keyof JSX.IntrinsicElements

/**
 * Represents a Capitalized DOM element type. It accepts any HTML or SVG tag.
 */
export type CapitalizedDOMElements = Capitalize<DOMElements>

/**
 * Represents a DOM element that extends the base `Element` interface and `HTMLOrSVGElement`.
 */
export interface DOMElement extends Element, HTMLOrSVGElement {}

/**
 * Represents a set of data attributes.
 */
type DataAttributes = Record<string, any>

/**
 * Represents the DOM attributes for a given element type.
 * This type extends React's AriaAttributes, HTMLAttributes, and DataAttributes.
 */
export type DOMAttributes<T = Element> = React.AriaAttributes &
  React.HTMLAttributes<T> &
  DataAttributes

/**
 * Utility type to omit common props from a target type.
 *
 * @template Target - The target type from which to omit the common props.
 * @template OmitAdditionalProps - The additional props to omit from the target type.
 */
export type OmitCommonProps<
  Target,
  OmitAdditionalProps extends keyof any = never
> = Omit<Target, 'transition' | 'as' | 'color' | OmitAdditionalProps>

/**
 * Represents the type for performing a right join of two objects.
 *
 * @template SourceProps - The type of the source object properties.
 * @template OverrideProps - The type of the overriding object properties.
 */
export type RightJoinProps<
  SourceProps extends object = Record<string, unknown>,
  OverrideProps extends object = Record<string, unknown>
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps

/**
 * Represents a type that merges component props with `as` props and additional props.
 *
 * @template ComponentProps - The props of the component.
 * @template AsProps - The props of the "as" component.
 * @template AdditionalProps - Additional props that can be merged.
 * @template AsComponent - The type of the "as" component.
 */
export type MergeWithAs<
  ComponentProps extends object,
  AsProps extends object,
  AdditionalProps extends object = Record<string, unknown>,
  AsComponent extends As = As
> = (
  | RightJoinProps<ComponentProps, AdditionalProps>
  | RightJoinProps<AsProps, AdditionalProps>
) & {
  as?: AsComponent
}

/**
 * Represents a function that renders a component with forwardRef.
 *
 * @template Component - The component type that can be rendered.
 * @template Props - The props object type for the component.
 * @template OmitKeys - The keys to be omitted from the props object.
 */
export interface TailuxForwardRefRenderFunction<
  Component extends As,
  Props extends object = Record<string, unknown>,
  OmitKeys extends keyof any = never
> {
  /**
   * Renders the component with forwardRef.
   *
   * @template AsComponent - The component type to be rendered.
   * @param props - The props object for the component.
   * @returns The rendered React element or null.
   */
  <AsComponent extends As = Component>(
    props: MergeWithAs<
      React.ComponentPropsWithoutRef<Component>,
      Omit<React.ComponentPropsWithoutRef<AsComponent>, OmitKeys>,
      Props,
      AsComponent
    >
  ): React.ReactElement | null

  /**
   * The symbol representing the type of the function.
   */
  readonly $$typeof: symbol

  /**
   * The default props for the component.
   */
  defaultProps?: Partial<Props> | undefined

  /**
   * The prop types for the component.
   */
  propTypes?: React.WeakValidationMap<Props> | undefined

  /**
   * The display name of the component.
   */
  displayName?: string | undefined
}

/**
 * Get the props of a component type.
 */
export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As
}

/**
 * Merges two types together.
 */
export type Merge<M, N> = N extends Record<string, unknown>
  ? M
  : Omit<M, keyof N> & N

/**
 * Represents the HTML props for a Tailux component.
 *
 * @template T - The HTML element type. Defaults to 'div'.
 * @template OmitKeys - The keys to omit from the props.
 */
export type HTMLTailuxProps<
  T extends As = 'div',
  OmitKeys extends keyof any = never
> = Omit<
  PropsOf<T>,
  | 'ref'
  | 'color'
  | 'slot'
  | 'size'
  | 'defaultChecked'
  | 'defaultValue'
  | OmitKeys
> & {
  as?: As
}

/**
 * Represents a function that generates props for a component.
 *
 * @template P - The type of the props object.
 * @template R - The type of the returned props.
 *
 * @param props - The props object to merge with DOM attributes.
 * @param ref - The ref object for the component.
 *
 * @returns The merged props object with DOM attributes, along with the ref object.
 */
export type PropGetter<P = Record<string, unknown>, R = DOMAttributes> = (
  props?: Merge<DOMAttributes, P>,
  ref?: React.Ref<any>
) => R & React.RefAttributes<any>

/**
 * Represents a React ref object. It accepts any React ref, ref object, or mutable ref object.
 */
export type ReactRef<T> =
  | React.Ref<T>
  | React.RefObject<T>
  | React.MutableRefObject<T>
