import React from 'react';
import { mountWithTheme, baseTheme } from '../../test/utils';
import { Flex, Row, Col, Box } from '..';
import 'jest-styled-components';

describe('Flex', () => {
  it('should render Flex', () => {
    const wrapper = mountWithTheme(<Flex>Hello World!</Flex>, baseTheme);
    expect(wrapper.containsMatchingElement(<div>Hello World!</div>)).toEqual(true);
  });
  it('should render Box', () => {
    const wrapper = mountWithTheme(<Box>Hello World!</Box>, baseTheme);
    expect(wrapper.containsMatchingElement(<div>Hello World!</div>)).toEqual(true);
  });
  it('should render Row', () => {
    const wrapper = mountWithTheme(<Row>Hello World!</Row>, baseTheme);
    expect(wrapper.containsMatchingElement(<div>Hello World!</div>)).toEqual(true);
  });
  it('should render Col', () => {
    const wrapper = mountWithTheme(<Col>Hello World!</Col>, baseTheme);
    expect(wrapper.containsMatchingElement(<div>Hello World!</div>)).toEqual(true);
  });
});

describe('Flex', () => {
  it('should have "display: flex" css property', () => {
    const wrapper = mountWithTheme(<Flex
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
    >Hello World!</Flex>, baseTheme);
    expect(wrapper).toHaveStyleRule('display', 'flex');
    expect(wrapper).toHaveStyleRule('flex-direction', 'column');
    expect(wrapper).toHaveStyleRule('align-items', 'center');
    expect(wrapper).toHaveStyleRule('justify-content', 'space-between');
  });
});


describe('Box', () => {
  it('should accept flex properties', () => {
    const wrapper = mountWithTheme(<Box flex="1 1 auto">Hello World!</Box>, baseTheme);
    expect(wrapper).toHaveStyleRule('flex', '1 1 auto');
  });
});

describe('Row', () => {
  it('should have "display: flex" css property', () => {
    const wrapper = mountWithTheme(<Row>Hello World!</Row>, baseTheme);
    expect(wrapper).toHaveStyleRule('display', 'flex');
  });
});

describe('Col', () => {
  it('should accept layout props', () => {
    const wrapper0 = mountWithTheme(<Col>Hello World!</Col>, baseTheme);
    expect(wrapper0).toHaveStyleRule('flex', '1');


    const wrapper1 = mountWithTheme(<Col span={9}>Hello World!</Col>, baseTheme);
    expect(wrapper1).toHaveStyleRule('flex', '0 0 75%');

    const wrapper2 = mountWithTheme(<Col
      span={3}
      offset={3}
      push={3}
      pull={3}
      order={3}
    >Hello World!</Col>, baseTheme);
    expect(wrapper2).toHaveStyleRule('flex', '0 0 25%');
    expect(wrapper2).toHaveStyleRule('margin-left', '25%');
    expect(wrapper2).toHaveStyleRule('left', '25%');
    expect(wrapper2).toHaveStyleRule('right', '25%');
    expect(wrapper2).toHaveStyleRule('order', '3');
  });

  it('should accept responsive layout props', () => {
    const wrapper = mountWithTheme(<Col span={[3, 6, 9, 12]}>Hello World!</Col>, baseTheme);

    expect(wrapper).toHaveStyleRule('flex', '0 0 25%');

    expect(wrapper).toHaveStyleRule('flex', '0 0 50%', {
      media: 'screen and (min-width: 40em)',
    });
    expect(wrapper).toHaveStyleRule('flex', '0 0 75%', {
      media: 'screen and (min-width: 52em)',
    });
    expect(wrapper).toHaveStyleRule('flex', '0 0 100%', {
      media: 'screen and (min-width: 64em)',
    });
  });
});
