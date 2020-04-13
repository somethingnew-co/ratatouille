import React from 'react';
import { storiesOf } from '@storybook/react';
import styled, { ThemeProvider } from 'styled-components';
import { Box, Container, Grid, Flex, Row, Col } from './index';

const Stories = storiesOf('Layout', module);

const Styling = styled.div`
  * {
    box-sizing: border-box;
  }

  section * {
    min-height: 3rem;
  }

  section, main {
    counter-reset: section;
  }

  main main {
    background: rgba(128,128,128,0.35);
  }

  div {
    background-color: rgba(128,0,0,0.35);
    font-family: monospace;

    &:nth-child(even) {
      background-color: rgba(0,0,128,0.35);
    }

    &:after {
      content: counter(section);
      display: block;
      counter-increment: section;
      background: white;
      width: 1rem;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
    }
  }
`;

const breakpoints = ['600px', '900px', '1200px'];

Stories.add('Smoketest', () => (
  <ThemeProvider theme={{
    grid: {
      columns: 12,
      columnGap: 20,
      maxWidth: breakpoints,
      margins: 10,
    },
    breakpoints,
  }}>
    <Styling>
      <Container as="section" width={['100%', '50%']}>
        <h1>Basic</h1>
        <Box/>
        <Box mx="20px" />
        <Box mx="40px" />
        <Box mx="60px" />
      </Container>

      <Container as="section">
        <h1>Flex</h1>
        <Flex as="main" justifyContent="space-around">
          <Box px="20px" />
          <Box px="20px" />
          <Box px="20px" />
        </Flex>

        <Row as="main">
          <Col />
          <Col />
          <Col />
          <Col />
        </Row>
        <Row as="main">
          <Col span="2" />
          <Col />
          <Col span="2" />
        </Row>

        <Row as="main">
          <Col span={[12, 6]}/>
          <Col as="header" span={[12, 5]}>
            <Row as="main">
              <Col span={6} />
              <Col span={6} />
            </Row>
          </Col>
          <Col span={1} display={['none', 'block']}/>
        </Row>

        <Row as="main">
          <Col span={4} />
          <Col pull={2}/>
          <Col span={4} />
        </Row>

        <Row as="main">
          <Col span={9} />
          <Col span={2} offset={1} />
        </Row>
      </Container>

      <Container as="section">
        <h1>Grid</h1>

        <Grid as="main" mb={20}>
          <Box gridColumn="span 8"></Box>
          <Box gridColumn="span 4"></Box>
          <Box gridColumn="span 4"></Box>
          <Box gridColumn="span 4"></Box>
          <Box gridColumn="span 4"></Box>
          <Box gridColumn="2 / span 10"></Box>
        </Grid>

        <Grid as="main">
          <Box gridColumn={['span 12', 'span 6']} />
          <Box gridColumn={'7 / 13'} />
          <Box gridColumn={'7 / -1'} gridRow="2" />
          <Box gridColumn={'2 / 4'} gridRow={'2 / 5'} />
          <Box gridColumn={'1 / 9'} gridRow={3} />
          <Box gridColumn={'5 / 10'} gridRow={'4 / 4'} />
          <Box gridColumn={'5 / 10'} gridRow={'2 / 4'} />
          <Box gridColumn={'12'} gridRow={'4'} />
        </Grid>

        <Grid as="main" gridTemplateRows="repeat(6, 50px)" mt="100px">
          <Box gridColumn="1 / span 1" gridRow="1/6"/>
          <Box gridColumn="1 / span 3" gridRow="1"/>
          <Box gridColumn="1 / span 3" gridRow="5"/>

          <Box gridColumn="4 / span 3" gridRow="1"/>
          <Box gridColumn="4" gridRow="1 / span 5"/>
          <Box gridColumn="4 / span 3" gridRow="3"/>
          <Box gridColumn="6" gridRow="1 / span 5"/>

          <Box gridColumn="7 / span 3" gridRow="1"/>
          <Box gridColumn="7 / span 3" gridRow="3"/>
          <Box gridColumn="7 / span 3" gridRow="5"/>
          <Box gridColumn="7" gridRow="1 / span 5"/>
          <Box gridColumn="9" gridRow="1 / span 5"/>

          <Box gridColumn="10 / span 3" gridRow="1"/>
          <Box gridColumn="10 / span 3" gridRow="3"/>
          <Box gridColumn="10 / span 3" gridRow="5"/>
          <Box gridColumn="10" gridRow="1 / span 5"/>

        </Grid>
      </Container>
    </Styling>
  </ThemeProvider>
));
