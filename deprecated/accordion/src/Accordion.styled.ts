import styled from 'styled-components';
import { TransitionStatus } from 'react-transition-group/Transition';

interface AccordionContentProps {
  height: number;
  state?: TransitionStatus;
}

export const AccordionContainer = styled.div`
  transition: height 1s ease;
`;

export const AccordionHeader = styled.div`
  position: relative;
  padding: 0;
  outline: 0;
  cursor: pointer;

  &::-webkit-details-marker {
    display: none;
  }
`;

export const AccordionContent = styled.div<AccordionContentProps>`
  overflow: hidden;
  height: ${({ state, height }): number => state === 'entering' || state === 'entered' ? height : 0}px;
  transition: height 300ms ease;
`;

export const AccordionIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
`;
