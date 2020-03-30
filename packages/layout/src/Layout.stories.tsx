import React from 'react';
import { storiesOf } from '@storybook/react';
import styled, { ThemeProvider } from 'styled-components';
import { Box, Container, Grid, Flex } from './index';

const Stories = storiesOf('Layout', module);

const Styling = styled.div`
  div div {
    background: rgba(128,0,0,0.1);
  }

  div div:nth-of-type(even) {
    background: rgba(0,0,128,0.15);
  }
`;

Stories.add('Layout tests', () => (
  <ThemeProvider theme={{
    grid: {
      columns: 12,
      columnGap: '1rem',
      maxWidth: 720,
      margins: 20,
    },
    breakpoints: ['550px', '600px', '700px'],
  }}>
    <Styling>
      <Container>
        <h1>Basic</h1>

        <Box>Hola</Box>
        <Box>Hola</Box>
        <Box>Hola</Box>
      </Container>

      <Flex.Container>
        <h1>Flex</h1>
        <Flex.Box>TEST!</Flex.Box>

        <Flex.Row>
          <Flex.Col span={6}>Hola</Flex.Col>
          <Flex.Col span={6}>
            <Flex.Row>
              <Flex.Col span={6}>Hola</Flex.Col>
              <Flex.Col span={6}>Hola</Flex.Col>
            </Flex.Row>
          </Flex.Col>
        </Flex.Row>

        <Flex.Row>
          <Flex.Col span={4}>Hola</Flex.Col>
          <Flex.Col>Hola</Flex.Col>
          <Flex.Col span={4}>Hola</Flex.Col>
        </Flex.Row>
        <Flex.Row>
          <Flex.Col span={9}>Hola</Flex.Col>
          <Flex.Col span={2} offset={1}>Hola</Flex.Col>
        </Flex.Row>
      </Flex.Container>

      <Grid.Container>
        <h1>Grid</h1>

        <Grid.Box>
          <Grid.Item col={'1 / 7'}>Hello world!</Grid.Item>
          <Grid.Item col={'7 / 13'}>Hello world!</Grid.Item>
          <Grid.Item col={'2 / 4'} row={'2/4'}>Hello world!</Grid.Item>
          <Grid.Item colStart={5} colEnd={9} row={3}>Hello world!</Grid.Item>
          <Grid.Item colStart={5} colEnd={9} rowStart={4} rowEnd={4}>Hello world!</Grid.Item>
        </Grid.Box>
      </Grid.Container>
    </Styling>
  </ThemeProvider>
));
