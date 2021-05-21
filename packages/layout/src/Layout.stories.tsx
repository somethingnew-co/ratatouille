import React from 'react';
import { storiesOf } from '@storybook/react';
import styled, { ThemeProvider } from 'styled-components';
import { Box, Container, Grid, Flex, Row, Col } from './index';
import { BoxProps } from './types';

const Stories = storiesOf('Layout', module);

const StyledTestBox = styled(Box)`
  color: lime;
`;
const StyledTestFlex = styled(Flex)`
  color: red;
`;
const StyledTestGrid = styled(Grid)`
  color: blue;
`;
const StyledTestRow = styled(Row)`
  color: yellow;
`;
const StyledTestCol = styled(Col)`
  color: pink;
`;
const StyledTestContainer = styled(Container)`
  color: orange;
`;

interface WrapperTest extends BoxProps {
  isTest: boolean
}

const WrapperTest = ({ isTest, ...rest }: WrapperTest): JSX.Element => (
  <>
    <StyledTestBox {...rest}>{isTest ? 'Test!' : ' No test...'}</StyledTestBox>
    <StyledTestFlex {...rest}>{isTest ? 'Test!' : ' No test...'}</StyledTestFlex>
    <StyledTestGrid {...rest}>{isTest ? 'Test!' : ' No test...'}</StyledTestGrid>
    <StyledTestRow {...rest}>{isTest ? 'Test!' : ' No test...'}</StyledTestRow>
    <StyledTestCol {...rest}>{isTest ? 'Test!' : ' No test...'}</StyledTestCol>
    <StyledTestContainer {...rest}>{isTest ? 'Test!' : ' No test...'}</StyledTestContainer>
  </>
);

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

  section div {
    background-color: rgba(128,0,0,0.35);
    font-family: monospace;
    position: relative;

    &:nth-child(even) {
      background-color: rgba(0,0,128,0.35);
    }

    &:after {
      content: counter(section);
      position: absolute;
      display: block;
      counter-increment: section;
      background: white;
      width: 1rem;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
      top: 0;
      right: 0;
    }
  }
`;

const breakpoints = ['600px', '900px', '1200px', '1440px'];

Stories.add('Smoketest', () => (
  <ThemeProvider theme={{
    grid: {
      columns: 12,
      columnGap: 20,
      maxWidth: breakpoints,
      margins: 10,
    },
    breakpoints,
  }}
  >
    <Styling>
      <WrapperTest isTest={true} />
      <WrapperTest isTest={true} mx={40} />
      <WrapperTest isTest={true} backgroundColor="green" />
      <Flex spaceX={[0, '32px', 64]}>
        <Box bg="grey">Hello</Box>
        <Box bg="grey">World</Box>
        <Box bg="grey">World</Box>
      </Flex>
      <Flex flexDirection={['row-reverse']} spaceX={[0, '32px', 64]}>
        <Box bg="grey">Hello</Box>
        <Box bg="grey">World</Box>
        <Box bg="grey">World</Box>
      </Flex>
      <Flex spaceX={[0, '32px', 64]}>
        <Box bg="grey" flex="1">Hello</Box>
        <Box bg="grey" flex="1">World</Box>
        <Box bg="grey" flex="1">World</Box>
      </Flex>
      <Box sy={3}>
        <Box bg="grey">Hello</Box>
        <Box bg="grey">World</Box>
        <Box bg="grey">World</Box>
      </Box>
      <Container>
        <Row as="section">
          <Col
            order={[1, 1, 0, 1]}
            span={[12, 10, 6, 4]}
            mx="auto"
          >
            Test
          </Col>
          <Col
            order={[0, 0, 1, 0]}
            span={[12, 10, 6, 4]}
            mx="auto"
          >
            Test
          </Col>
        </Row>
      </Container>
      <Container as="section">
        <h1>Basic</h1>
        <Box width={['100%', '50%']} />
        <Box mx="20px" />
        <Box mx="40px" />
        <Box mx="60px" />
      </Container>

      <Container as="section">
        <h1>Test</h1>
        <Row>
          <Col span={4} mx="auto">Test</Col>
          <Col span={4} mx="auto">Test</Col>
        </Row>
        <Row justifyContent="space-around">
          <Col span={4}>Test</Col>
          <Col span={4}>Test</Col>
        </Row>
        <Row>
          <Col span={[4, 6]} mx="auto">Test</Col>
        </Row>
        <Row>
          <Col span={4} marginX="auto">Test</Col>
        </Row>
      </Container>

      <Container as="section">
        <h1>Flex</h1>

        <Flex justifyContent="space-around">
          <Box>Test</Box>
          <Box>Test</Box>
          <Box>Test</Box>
        </Flex>

        <Row>
          <Col />
          <Col />
          <Col />
          <Col />
        </Row>
        <Row>
          <Col span="2" />
          <Col />
          <Col span="2" />
        </Row>

        <Row>
          <Col span={[12, 6]} />
          <Col as="header" span={[12, 5]}>
            <Row>
              <Col span={6} />
              <Col span={6} />
            </Row>
          </Col>
          <Col span={1} display={['none', 'block']} />
        </Row>

        <Row>
          <Col span={4} />
          <Col pull={2} />
          <Col span={4} />
        </Row>

        <Row>
          <Col span={9} />
          <Col span={2} offset={1} />
        </Row>
      </Container>

      <Container as="section">
        <h1>Grid</h1>

        <Grid mb={20}>
          <Box gridColumn="span 8"></Box>
          <Box gridColumn="span 4"></Box>
          <Box gridColumn="span 4"></Box>
          <Box gridColumn="span 4"></Box>
          <Box gridColumn="span 4"></Box>
          <Box gridColumn="2 / span 10"></Box>
        </Grid>

        <Grid>
          <Box gridColumn={['span 12', 'span 6']} />
          <Box gridColumn="7 / 13" />
          <Box gridColumn="7 / -1" gridRow="2" />
          <Box gridColumn="2 / 4" gridRow="2 / 5" />
          <Box gridColumn="1 / 9" gridRow={3} />
          <Box gridColumn="5 / 10" gridRow="4 / 4" />
          <Box gridColumn="5 / 10" gridRow="2 / 4" />
          <Box gridColumn="12" gridRow="4" />
        </Grid>

        <Grid gridTemplateRows="repeat(6, 50px)" mt="100px">
          <Box gridColumn="1 / span 1" gridRow="1/6" />
          <Box gridColumn="1 / span 3" gridRow="1" />
          <Box gridColumn="1 / span 3" gridRow="5" />

          <Box gridColumn="4 / span 3" gridRow="1" />
          <Box gridColumn="4" gridRow="1 / span 5" />
          <Box gridColumn="4 / span 3" gridRow="3" />
          <Box gridColumn="6" gridRow="1 / span 5" />

          <Box gridColumn="7 / span 3" gridRow="1" />
          <Box gridColumn="7 / span 3" gridRow="3" />
          <Box gridColumn="7 / span 3" gridRow="5" />
          <Box gridColumn="7" gridRow="1 / span 5" />
          <Box gridColumn="9" gridRow="1 / span 5" />

          <Box gridColumn="10 / span 3" gridRow="1" />
          <Box gridColumn="10 / span 3" gridRow="3" />
          <Box gridColumn="10 / span 3" gridRow="5" />
          <Box gridColumn="10" gridRow="1 / span 5" />

        </Grid>
      </Container>
    </Styling>
  </ThemeProvider>
));
