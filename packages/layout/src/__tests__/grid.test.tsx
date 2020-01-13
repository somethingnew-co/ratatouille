import React from 'react';
import { mount } from 'enzyme';
import { Grid } from '..';
import 'jest-styled-components';

describe('Grid', () => {
  it('should render Grid.Box', () => {
    const wrapper = mount(<Grid.Box>Hello World!</Grid.Box>);
    expect(wrapper.containsMatchingElement(<div>Hello World!</div>)).toEqual(true);
  });
  it('should render Grid.Item', () => {
    const wrapper = mount(
      <Grid.Box>
        <Grid.Item>Hello World!</Grid.Item>
        <Grid.Item>Hola Mundo!</Grid.Item>
      </Grid.Box>
    );
    expect(wrapper.containsMatchingElement(<div>Hello World!</div>)).toEqual(true);
    expect(wrapper.containsMatchingElement(<div>Hola Mundo!</div>)).toEqual(true);
  });
});

describe('Grid.Box', () => {
  it('should have "display: flex" css property', () => {
    const wrapper = mount(<Grid.Box>Hello World!</Grid.Box>);
    expect(wrapper).toHaveStyleRule('display', 'grid');
  });
  it('should accept grid props', () => {
    const wrapper = mount(<Grid.Box
      gridTemplateColumns={'1fr 2fr'}
      gridTemplateAreas='a b'
    >Hello World!</Grid.Box>);
    expect(wrapper).toHaveStyleRule('grid-template-columns', '1fr 2fr');
    expect(wrapper).toHaveStyleRule('grid-template-areas', 'a b');
  });
});

describe('Grid.Item', () => {
  it('should accept props', () => {
    const wrapper1 = mount(<Grid.Item start={6}>Hello World!</Grid.Item>);
    expect(wrapper1).toHaveStyleRule('grid-column', '6 / -1');

    const wrapper2 = mount(<Grid.Item start={1} end={7} row={3}>Hello World!</Grid.Item>);
    expect(wrapper2).toHaveStyleRule('grid-column', '1 / 7');
    expect(wrapper2).toHaveStyleRule('grid-row', '3');

    const wrapper3 = mount(<Grid.Item col="3 / 9" row='1 / 3'>Hello World!</Grid.Item>);
    expect(wrapper3).toHaveStyleRule('grid-column', '3 / 9');
    expect(wrapper3).toHaveStyleRule('grid-row', '1 / 3');
  });

  it('should accept responsive props', () => {
    const wrapper = mount(<Grid.Item start={[1, 3, 5, 7]} end={[-1, -1, 9, 12]}>Hello World!</Grid.Item>);

    expect(wrapper).toHaveStyleRule('grid-column', '1 / -1');

    expect(wrapper).toHaveStyleRule('grid-column', '3 / -1', {
      media: 'screen and (min-width: 40em)',
    });
    expect(wrapper).toHaveStyleRule('grid-column', '5 / 9', {
      media: 'screen and (min-width: 52em)',
    });
    expect(wrapper).toHaveStyleRule('grid-column', '7 / 12', {
      media: 'screen and (min-width: 64em)',
    });
  });
});
