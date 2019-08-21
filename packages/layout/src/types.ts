/* eslint-disable @typescript-eslint/indent */
import { StyledComponentProps } from 'styled-components';

/**
 * Prop types for functions that return a themed styled component.
 * Satisfies "as" prop warning, but loose typings means a lot of
 * attributes are passed through.
 */
type ComponentWithStyledProps = StyledComponentProps<
  // The Component from whose props are derived
  keyof JSX.IntrinsicElements | React.ComponentType<any>,
  // The Theme from the current context
  object,
  // The other props added by the template
  object,
  // The props that are made optional by .attrs
  any
>
export type SC = ComponentWithStyledProps
