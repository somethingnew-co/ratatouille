import React from 'react';
import { mount } from 'enzyme';
import { Box, Container, Flex, Grid, GridItem } from './index';
import { generateColumnStrings } from './helpers';

describe('@stnew/grid', () => {
  it('Renders Box', () => {
    const wrapper = mount(<Box>Hello World!</Box>);
    expect(wrapper.containsMatchingElement(<div>Hello World!</div>)).toEqual(true);
  });
  it('Renders Container', () => {
    const wrapper = mount(<Container as="main">Hello World!</Container>);
    expect(wrapper.containsMatchingElement(<main>Hello World!</main>)).toEqual(true);
  });
  it('Renders Flex', () => {
    const wrapper = mount(<Flex>Hello World!</Flex>);
    expect(wrapper.containsMatchingElement(<div>Hello World!</div>)).toEqual(true);
  });
  it('Renders Grid', () => {
    const wrapper = mount(<Grid>Hello World!</Grid>);
    expect(wrapper.containsMatchingElement(<div>Hello World!</div>)).toEqual(true);
  });
  it('Renders GridItem', () => {
    const wrapper = mount(<Grid>
      <GridItem>Hello World!</GridItem>
      <GridItem>Hola Mundo!</GridItem>
    </Grid>);
    expect(wrapper.containsMatchingElement(<div>Hola Mundo!</div>)).toEqual(true);
  });
  it('Generates Column Strings', () => {
    const f = generateColumnStrings([1, 2], [3, 4]);
    expect(f).toEqual(['1 / 3', '2 / 4']);
  });
});
