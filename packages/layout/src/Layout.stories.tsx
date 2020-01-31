import React from 'react';
import { storiesOf } from '@storybook/react';

import README from '../README.md';

import { Box, Container, Grid, Flex } from './index';

const Stories = storiesOf('Layout', module);

Stories.addParameters({
  readme: {
    sidebar: README,
  },
});

Stories.add('Basic Accordion', () => (
  <>
    <h1>Basic</h1>
    <Container>
      <Box>Hola</Box>
      <Box>Hola</Box>
      <Box>Hola</Box>
    </Container>

    <h1>Flex</h1>
    <Flex.Container>
      <Flex.Row>
        <Flex.Col span={4}>Hola</Flex.Col>
        <Flex.Col>Hola</Flex.Col>
        <Flex.Col span={4}>Hola</Flex.Col>
      </Flex.Row>
    </Flex.Container>

    <h1>Grid</h1>
    <Grid.Container>
      <Grid.Box>
        <Grid.Item col="1/7">Hello world!</Grid.Item>
        <Grid.Item col="7/12">Hello world!</Grid.Item>
        <Grid.Item start={5} end={9}>Hello world!</Grid.Item>
      </Grid.Box>
    </Grid.Container>
  </>
));
