import React, { ReactNode, RefObject } from 'react';
import { TransitionStatus } from 'react-transition-group/Transition';

import * as Styled from './Accordion.styled';

interface AccordionContentProps {
  children: ReactNode;
  state: TransitionStatus;
}

const Contents = React.forwardRef<HTMLDivElement, AccordionContentProps>((props, ref) => (
  <div ref={ref}>{props.children}</div>
));

Contents.displayName = 'ForwardedAccordionChild';

export class AccordionContent extends React.Component<AccordionContentProps, { height: number }> {
  container: RefObject<HTMLDivElement>;

  constructor(props: AccordionContentProps) {
    super(props);

    this.state = {
      height: 0,
    };

    this.handleResize = this.handleResize.bind(this);
    this.container = React.createRef();
  }

  componentDidMount(): void {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount(): void {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize(): void {
    if (this.container && this.container.current) {
      const { offsetHeight, firstChild } = this.container.current;
      const styles = window.getComputedStyle(firstChild as Element);
      const { marginTop, marginBottom } = styles;
      const margin = parseFloat(marginTop || '0') + parseFloat(marginBottom || '0');
      const height = Math.ceil(offsetHeight + margin);

      this.setHeight(this.container ? height : 0);
    }
  }

  setHeight = (height: number) => {
    this.setState({ height });
  };

  render(): JSX.Element | null {
    const { height } = this.state;
    const { state, children } = this.props;
    return (
      <Styled.AccordionContent height={height} state={state}>
        <Contents state={state} ref={this.container}>
          {children}
        </Contents>
      </Styled.AccordionContent>
    );
  }
}
