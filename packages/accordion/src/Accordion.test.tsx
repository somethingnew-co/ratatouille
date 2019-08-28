import React from 'react';
import { mount } from 'enzyme';

import { Accordion, AccordionItem } from './index';
import { AccordionProps } from './Accordion';

const header = <h1>Click to toggle</h1>;
const content = <h2>Hello world!</h2>;
const icon = {
  open: <div>-</div>,
  closed: <div>+</div>,
};

const TestAccordion: React.FC<AccordionProps> = props => (
  <Accordion {...props} icon={icon}>
    <AccordionItem header={header} content={content} />
    <AccordionItem header={header} content={content} />
    <AccordionItem header={header} content={content} open />
    <AccordionItem header={header} content={content} />
  </Accordion>
);

describe('Accordion component', () => {
  it('should render a header and content', () => {
    const accordion = mount(<TestAccordion />);
    expect(accordion.containsAllMatchingElements([header, content])).toEqual(true);
  });

  it('should render all AccordionItems', () => {
    const accordion = mount(<TestAccordion />);
    expect(accordion.find('section').children().length).toBe(4);
  });

  it('expanded item should have open prop', () => {
    const accordion = mount(<TestAccordion />);
    expect(
      accordion
        .find('section')
        .childAt(2)
        .props().open,
    ).toEqual(true);
    expect(
      accordion
        .find('section')
        .childAt(1)
        .props().open,
    ).toEqual(false);
  });

  it('expanded item should accessibility label', () => {
    const accordion = mount(<TestAccordion />);
    expect(
      accordion
        .find('section')
        .childAt(2)
        .getDOMNode()
        .querySelector('div')
        .getAttribute('aria-expanded'),
    ).toEqual('true');
  });

  it('collapseAll prop should collapse all items', () => {
    const accordion = mount(<TestAccordion collapseAll />);
    expect(
      accordion
        .find('section')
        .childAt(0)
        .getDOMNode()
        .querySelector('div')
        .getAttribute('aria-expanded'),
    ).toEqual('false');
  });
});
