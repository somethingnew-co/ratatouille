import React from 'react';
import { mount } from 'enzyme';
import { Box, Container } from './index';
import { Flex, FlexItem, FlexRow, FlexCol } from './flex/Flex';
import { GridBox, GridItem } from './grid/Grid';

import { baseTheme, makePropArray, generateColumnStrings, calcFlexPercentage, calcFlexGap } from './helpers';

describe('@stnew/layout', () => {
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
  it('Renders FlexItem', () => {
    const wrapper = mount(<FlexItem>Hello World!</FlexItem>);
    expect(wrapper.containsMatchingElement(<div>Hello World!</div>)).toEqual(true);
  });
  it('Renders FlexRow', () => {
    const wrapper = mount(<FlexRow>Hello World!</FlexRow>);
    expect(wrapper.containsMatchingElement(<div>Hello World!</div>)).toEqual(true);
  });
  it('Renders FlexCol', () => {
    const wrapper = mount(<FlexCol>Hello World!</FlexCol>);
    expect(wrapper.containsMatchingElement(<div>Hello World!</div>)).toEqual(true);
  });
  it('Renders Grid', () => {
    const wrapper = mount(<GridBox>Hello World!</GridBox>);
    expect(wrapper.containsMatchingElement(<div>Hello World!</div>)).toEqual(true);
  });
  it('Renders GridItem', () => {
    const wrapper = mount(<GridBox>
      <GridItem>Hello World!</GridItem>
      <GridItem>Hola Mundo!</GridItem>
    </GridBox>);
    expect(wrapper.containsMatchingElement(<div>Hola Mundo!</div>)).toEqual(true);
  });

  it('Converts props to arrays', () => {
    const x = makePropArray(2);
    const y = makePropArray([2, 4, 8]);
    expect(x).toEqual([2]);
    expect(y).toEqual([2, 4, 8]);
  });

  it('Generates Column Strings', () => {
    const f = generateColumnStrings([1, 3], [2, 4]);
    expect(f).toEqual(['1 / 2', '3 / 4']);
  });

  it('Generates Flex percentages', () => {
    const f = calcFlexPercentage([12, 6, 3], baseTheme);
    expect(f).toEqual(['100%', '50%', '25%']);
  });

  it('Generates Flex gap', () => {
    const f = calcFlexGap(baseTheme);
    expect(f).toEqual([5, 10]);
  });
});
