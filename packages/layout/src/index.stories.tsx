import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Container } from './index';
import * as Flex from './flex';
import * as Grid from './grid';

import README from '../README.md';

const Stories = storiesOf('Grid', module);


Stories.addParameters({
  readme: {
    sidebar: README,
  },
});

import styled from 'styled-components';

const ShowGrid = styled.div`
  font-family: sans-serif;
  text-align: center;

  div {
    border-radius: 5px;
  }

  .container {
    border: 1px solid black;
  }

  .box {
    box-shadow: inset 0 0 0 1px rgb(255, 128, 0);
    background: rgb(255, 128, 0, 0.2);
  }

  .grid {
    &__item {
      background: rgba(128, 0, 128, 0.2);
      box-shadow: inset 0 0 0 1px rgb(128, 0, 128);
    }
  }

  .flex {
    box-shadow: inset 0 0 0 1px rgb(128, 128, 128);
    background: rgba(128, 128, 128, 0.2);

    &__item {
      background: rgba(128, 128, 128, 0.2);
      box-shadow: inset 0 0 0 1px rgb(128, 128, 128);
    }

    &__row {
      background: rgba(0, 128, 128, 0.2);

    }
    &__col {
      box-shadow: inset 0 0 0 1px rgb(0, 128, 128);
    }
  }
`;

Stories.add('Examples', () => (
  <ShowGrid>

    <h2>Box</h2>
    <Container className="container" py={10}>
      <Box className="box" p={10} mb={10}>Hello world!</Box>
      <Box className="box" p={10} mb={10} width={'50%'}>Hello world!</Box>
      <Box className="box" p={10} mb={10} width={'50%'} ml="auto">Hello world!</Box>
      <div>
        <Box display="inline-block" className="box" p={10}>Hello world!</Box>
        <Box display="inline-block" className="box" p={10} ml={20}>Hello world!</Box>
        <Box display="inline-block" className="box" p={10} ml={20}>Hello world!</Box>
      </div>
    </Container>

    <h2>CSS Grid</h2>
    <Grid.Container className="container" py={10}>
      <Grid.Box className="grid">
        <Grid.Item py={10} className="grid__item">Hello world!</Grid.Item>
        <Grid.Item py={10} className="grid__item" start={1} end={5}>Hello world!</Grid.Item>
        <Grid.Item py={10} className="grid__item" start={5} end={9}>Hello world!</Grid.Item>
        <Grid.Item py={10} className="grid__item" start={9}>Hello world!</Grid.Item>
        <Grid.Item py={10} className="grid__item" start={1} end={7}>Hello world!</Grid.Item>
        <Grid.Item py={10} className="grid__item" start={[1, 7]} end={[-1]}>Hello world!</Grid.Item>
        <Grid.Item py={10} className="grid__item" col="5/9" row="4">Hello world!</Grid.Item>
        <Grid.Item display="flex" py={10} className="grid__item" col="1/5" row="4 / 7"><Box m="auto">Hello world!</Box></Grid.Item>
        <Grid.Item py={10} className="grid__item" col="5/9" row="6">Hello world!</Grid.Item>
        <Grid.Item py={10} className="grid__item" start={9} row="5">Hello world!</Grid.Item>
      </Grid.Box>
    </Grid.Container>

    <h2>Flex</h2>
    <Flex.Container className="container" py={10}>
      <Flex.Box className="flex" p={10} mb={10} width={[6 / 12]} mx="auto">Hello world!</Flex.Box>
      <Flex.Box className="flex" my={10} height={80} justifyContent="space-between">
        <Flex.Item className="flex__item" alignSelf="flex-start"><Box p={10}>Hello world!</Box></Flex.Item>
        <Flex.Item className="flex__item" alignSelf="center"><Box p={10}>Hello world!</Box></Flex.Item>
        <Flex.Item className="flex__item" alignSelf="flex-end"><Box p={10}>Hello world!</Box></Flex.Item>
      </Flex.Box>
      <Box px={10}>
        <Flex.Row className="flex__row">
          <Flex.Col display="flex" className="flex__col" span={6}>
            <Box py={10} m="auto">
              Hello world!
            </Box>
          </Flex.Col>
          <Flex.Col className="flex__col" span={[4, 6]} offset={[2, 0]}>
            <Box py={10}>
              Hello world!
            </Box>
            <Flex.Row className="flex__row">
              <Flex.Col className="flex__col"><Box py={10}>
                Hello world!
              </Box></Flex.Col>
              <Flex.Col className="flex__col"><Box py={10}>
                Hello world!
              </Box></Flex.Col>
            </Flex.Row>
          </Flex.Col>
        </Flex.Row >
        <Flex.Row className="flex__row">
          <Flex.Col display="flex" className="flex__col" span={4}>
            <Box py={10} m="auto">
              Hello world!
            </Box>
          </Flex.Col>
          <Flex.Col display="flex" className="flex__col" span={4}>
            <Box py={10} m="auto">
              Hello world!
            </Box>
          </Flex.Col>
          <Flex.Col display="flex" className="flex__col" span={4}>
            <Box py={10} m="auto">
              Hello world!
            </Box>
          </Flex.Col>
        </Flex.Row>

        <Flex.Row className="flex__row">
          <Flex.Col display="flex" className="flex__col" span={2} offset={2}>
            <Box py={10} m="auto">
              Hello world!
            </Box>
          </Flex.Col>
          <Flex.Col display="flex" className="flex__col" span={2} push={2}>
            <Box py={10} m="auto" color="rgba(255, 0, 0, 0.5)">
              Hello world!
            </Box>
          </Flex.Col>
          <Flex.Col display="flex" className="flex__col" span={4} pull={1}>
            <Box py={10} m="auto" color="rgba(0, 0, 255, 0.5)">
              Hello world!
            </Box>
          </Flex.Col>
        </Flex.Row>

        <Flex.Row className="flex__row">
          <Flex.Col display="flex" className="flex__col" order={3}>
            <Box py={10} m="auto">
              1
            </Box>
          </Flex.Col>
          <Flex.Col display="flex" className="flex__col" order={2}>
            <Box py={10} m="auto">
              2
            </Box>
          </Flex.Col>
          <Flex.Col display="flex" className="flex__col" order={1}>
            <Box py={10} m="auto">
              3
            </Box>
          </Flex.Col>
        </Flex.Row>
      </Box>
    </Flex.Container>
  </ShowGrid>

));
