import { StyledComponentProps } from 'styled-components';

/**
 * Prop types for functions that return a themed styled component.
 * satisfys "as" prop warnings, but loose typings means a lot of
 * attributes are passed through.
 */
type ComponentStyledProps = StyledComponentProps<keyof JSX.IntrinsicElements | React.ComponentType<any>, object, object, any>
export type SC = ComponentStyledProps
