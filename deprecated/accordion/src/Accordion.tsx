import React, { ReactElement } from 'react';

export interface AccordionProps {
  collapseAll?: boolean;
  icon?: {
    open: ReactElement;
    closed: ReactElement;
  };
}

interface State {
  activeItems: number[];
}

class Accordion extends React.Component<AccordionProps, State> {
  constructor(props: AccordionProps) {
    super(props);
    this.state = {
      activeItems: props.collapseAll ? [] : [0],
    };
  }

  componentDidMount(): void {
    const { children } = this.props;

    if (children) {
      this.accordionItems(children as ReactElement).map(this.checkProps);
    }
  }

  checkProps = (child: ReactElement, index: number) => {
    const { activeItems } = this.state;

    if (child.props.open && activeItems.indexOf(index) === -1) this.toggleItem(index);
  };

  accordionItems = (children: ReactElement | ReactElement[]): ReactElement[] => {
    if (!Array.isArray(children)) {
      return [children];
    }
    return children;
  };

  toggleItem = (index: number) => {
    const { activeItems } = this.state;
    const indexPosition = activeItems.indexOf(index);

    if (indexPosition !== -1) {
      activeItems.splice(indexPosition, 1);
    } else {
      activeItems.push(index);
    }

    this.setState({ activeItems });
  };

  render(): JSX.Element | null {
    const { children, icon } = this.props;
    const { activeItems } = this.state;

    if (!children) return null;

    const items = this.accordionItems(children as ReactElement);

    const accordionItems = items.map((child: ReactElement, index: number) =>
      React.cloneElement(child, {
        // eslint-disable-next-line react/no-array-index-key
        key: index,
        index,
        open: activeItems.indexOf(index) !== -1,
        icon,
        _onClick: () => this.toggleItem(index),
      }),);
    return <section>{accordionItems}</section>;
  }
}

export default Accordion;
