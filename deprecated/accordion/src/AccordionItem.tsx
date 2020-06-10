import React, { ReactNode } from 'react';

import { Transition } from 'react-transition-group';

import * as Styled from './Accordion.styled';
import { AccordionProps } from './Accordion';
import { AccordionContent } from './AccordionContent';

interface AccordionItemProps {
  _onClick?: () => void;
  open?: boolean;
  header: ReactNode;
  content: ReactNode;
  icon?: AccordionProps['icon'];

}

class AccordionItem extends React.Component<AccordionItemProps, {}> {
  item: React.RefObject<HTMLDivElement> = React.createRef();

  render(): JSX.Element | null {
    const { _onClick, open, header, content, icon } = this.props;

    return (
      <Styled.AccordionContainer>
        <Styled.AccordionHeader
          onClick={() => _onClick && _onClick()}
          role="button"
          aria-expanded={open}
          tabIndex={0}
        >
          {header}
          {!!icon && (
            <Styled.AccordionIcon>
              {open ? icon.open : icon.closed}
            </Styled.AccordionIcon>
          )}
        </Styled.AccordionHeader>
        <Transition in={open} timeout={300}>
          {state => <AccordionContent state={state}>{content}</AccordionContent>}
        </Transition>
      </Styled.AccordionContainer>
    );
  }
}

export default AccordionItem;
