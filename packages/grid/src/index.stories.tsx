import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Container, Flex, Grid, GridItem } from './index';

const Stories = storiesOf('Grid', module);

Stories.add('default', () => (
  <Container>
    <Box>Hello world!</Box>
    <Grid>
      <GridItem start={[1]} end={[6]}>Hello world!</GridItem>
      <GridItem start={[7]} end={[-1]}>Hello world!</GridItem>
    </Grid>
    <Flex width={[4 / 12]}>Hello world!</Flex>
  </Container>
));
