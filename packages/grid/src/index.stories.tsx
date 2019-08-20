import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Container, Flex, FlexItem, FlexRow, FlexCol, Grid, GridItem } from './index';

const Stories = storiesOf('Grid', module);

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
    background: rgba(128, 0, 128, 0.2);

    &__item {
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
    <Container className="container">
      <h2>Box</h2>
      <Box className="box" p={10} mb={10}>Hello world!</Box>
      <Box className="box" p={10} mb={10} width={'50%'}>Hello world!</Box>
      <Box className="box" p={10} mb={10} width={'50%'} ml="auto">Hello world!</Box>
      <div>
        <Box display="inline-block" className="box" p={10}>Hello world!</Box>
        <Box display="inline-block" className="box" p={10} ml={10}>Hello world!</Box>
        <Box display="inline-block" className="box" p={10} ml={10}>Hello world!</Box>
      </div>
      <h2>Flex</h2>
      <Flex className="flex" p={10} my={10} width={[6 / 12]} mx="auto">Hello world!</Flex>
      <Flex className="flex" my={10} height={80} justifyContent="space-between">
        <FlexItem className="flex__item" alignSelf="flex-start"><Box p={10}>Hello world!</Box></FlexItem>
        <FlexItem className="flex__item" alignSelf="center"><Box p={10}>Hello world!</Box></FlexItem>
        <FlexItem className="flex__item" alignSelf="flex-end"><Box p={10}>Hello world!</Box></FlexItem>
      </Flex>

      <Box px={10}>
        <FlexRow className="flex__row">
          <FlexCol display="flex" className="flex__col" span={6}>
            <Box py={10} m="auto">
              Hello world!
            </Box>
          </FlexCol>
          <FlexCol className="flex__col" span={[4, 6]} offset={[2, 0]}>
            <Box py={10}>
              Hello world!
            </Box>
            <FlexRow className="flex__row">
              <FlexCol className="flex__col"><Box py={10}>
                Hello world!
              </Box></FlexCol>
              <FlexCol className="flex__col"><Box py={10}>
                Hello world!
              </Box></FlexCol>
            </FlexRow>
          </FlexCol>
        </FlexRow >
        <FlexRow className="flex__row">
          <FlexCol display="flex" className="flex__col" span={4}>
            <Box py={10} m="auto">
              Hello world!
            </Box>
          </FlexCol>
          <FlexCol display="flex" className="flex__col" span={4}>
            <Box py={10} m="auto">
              Hello world!
            </Box>
          </FlexCol>
          <FlexCol display="flex" className="flex__col" span={4}>
            <Box py={10} m="auto">
              Hello world!
            </Box>
          </FlexCol>
        </FlexRow>
      </Box>

      <h2>Grid</h2>
      <Grid my={10} className="grid">
        <GridItem py={10} className="grid__item">Hello world!</GridItem>
        <GridItem py={10} className="grid__item" start={1} end={5}>Hello world!</GridItem>
        <GridItem py={10} className="grid__item" start={5} end={9}>Hello world!</GridItem>
        <GridItem py={10} className="grid__item" start={9}>Hello world!</GridItem>
        <GridItem py={10} className="grid__item" start={1} end={7}>Hello world!</GridItem>
        <GridItem py={10} className="grid__item" start={[1, 7]} end={[-1]}>Hello world!</GridItem>
        <GridItem py={10} className="grid__item" col="5/9" row="4">Hello world!</GridItem>
        <GridItem display="flex" py={10} className="grid__item" col="1/5" row="4 / 7"><Box m="auto">Hello world!</Box></GridItem>
        <GridItem py={10} className="grid__item" col="5/9" row="6">Hello world!</GridItem>
        <GridItem py={10} className="grid__item" start={9} row="5">Hello world!</GridItem>
      </Grid>
    </Container>
  </ShowGrid>

));
