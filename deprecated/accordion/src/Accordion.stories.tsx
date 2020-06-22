import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import README from '../README.md';

import { Accordion, AccordionItem } from './index';

const Header = styled.h1`
  color: blue;
  background: #eee;
  margin: 0;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
`;

const Content = styled.h1`
  background: #f5f5f5;
  margin: 0;
  padding: 1rem;
`;

const Icon = styled.div`
  padding: 1rem;
  font-size: 2rem;
`;

const Stories = storiesOf('Accordion', module);

Stories.addParameters({
  readme: {
    sidebar: README,
  },
});

const icon = {
  open: <Icon>🙉</Icon>,
  closed: <Icon>🙈</Icon>,
};

Stories.add('Basic Accordion', () => (
  <Accordion collapseAll icon={icon}>
    <AccordionItem header={<Header as="h1">Click to toggle</Header>} content={<Content>Hello world!</Content>} />
    <AccordionItem header={<Header as="h2">Click to toggle</Header>} content={<Content>Hello world!</Content>} />
    <AccordionItem header={<Header as="h3">Click to toggle</Header>} content={<Content>Hello world!</Content>} />
    <AccordionItem header={<Header as="h4">Click to toggle</Header>} content={<Content>Hello world!</Content>} />
  </Accordion>
));
