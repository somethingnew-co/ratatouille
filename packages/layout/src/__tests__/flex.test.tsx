import React from 'react';
import { mount } from 'enzyme';
import * as Flex from '../flex';
import 'jest-styled-components';

describe('Flex', () => {
  it('should render Flex.Box', () => {
    const wrapper = mount(<Flex.Box>Hello World!</Flex.Box>);
    expect(wrapper.containsMatchingElement(<div>Hello World!</div>)).toEqual(true);
  });
  it('should render Flex.Item', () => {
    const wrapper = mount(<Flex.Item>Hello World!</Flex.Item>);
    expect(wrapper.containsMatchingElement(<div>Hello World!</div>)).toEqual(true);
  });
  it('should render Flex.Row', () => {
    const wrapper = mount(<Flex.Row>Hello World!</Flex.Row>);
    expect(wrapper.containsMatchingElement(<div>Hello World!</div>)).toEqual(true);
  });
  it('should render Flex.Col', () => {
    const wrapper = mount(<Flex.Col>Hello World!</Flex.Col>);
    expect(wrapper.containsMatchingElement(<div>Hello World!</div>)).toEqual(true);
  });
});

describe('Flex.Box', () => {
  it('should have "display: flex" css property', () => {
    const wrapper = mount(<Flex.Box
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
    >Hello World!</Flex.Box>);
    expect(wrapper).toHaveStyleRule('display', 'flex');
    expect(wrapper).toHaveStyleRule('flex-direction', 'column');
    expect(wrapper).toHaveStyleRule('align-items', 'center');
    expect(wrapper).toHaveStyleRule('justify-content', 'space-between');
  });
});


describe('Flex.Item', () => {
  it('should accept flex properties', () => {
    const wrapper = mount(<Flex.Item flex="1 1 auto">Hello World!</Flex.Item>);
    expect(wrapper).toHaveStyleRule('flex', '1 1 auto');
  });
});

describe('Flex.Row', () => {
  it('should have "display: flex" css property', () => {
    const wrapper = mount(<Flex.Row>Hello World!</Flex.Row>);
    expect(wrapper).toHaveStyleRule('display', 'flex');
  });
});

describe('Flex.Col', () => {
  it('should accept layout props', () => {
    const wrapper1 = mount(<Flex.Col span={9}>Hello World!</Flex.Col>);
    expect(wrapper1).toHaveStyleRule('width', '75%');

    const wrapper2 = mount(<Flex.Col
      span={3}
      offset={3}
      push={3}
      pull={3}
      order={3}
    >Hello World!</Flex.Col>);
    expect(wrapper2).toHaveStyleRule('width', '25%');
    expect(wrapper2).toHaveStyleRule('margin-left', '25%');
    expect(wrapper2).toHaveStyleRule('left', '25%');
    expect(wrapper2).toHaveStyleRule('right', '25%');
    expect(wrapper2).toHaveStyleRule('order', '3');
  });

  it('should accept responsive layout props', () => {
    const wrapper = mount(<Flex.Col span={[3, 6, 9, 12]}>Hello World!</Flex.Col>);

    expect(wrapper).toHaveStyleRule('width', '25%');

    expect(wrapper).toHaveStyleRule('width', '50%', {
      media: 'screen and (min-width: 40em)',
    });
    expect(wrapper).toHaveStyleRule('width', '75%', {
      media: 'screen and (min-width: 52em)',
    });
    expect(wrapper).toHaveStyleRule('width', '100%', {
      media: 'screen and (min-width: 64em)',
    });
  });
});
