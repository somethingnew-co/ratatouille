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
    const wrapper1 = mount(<Grid.Item colStart={6}>Hello World!</Grid.Item>);
    expect(wrapper1).toHaveStyleRule('grid-column-start', '6');

    const wrapper2 = mount(<Grid.Item colStart={1} colEnd={7} row={3}>Hello World!</Grid.Item>);
    expect(wrapper2).toHaveStyleRule('grid-column-start', '1');
    expect(wrapper2).toHaveStyleRule('grid-column-end', '7');
    expect(wrapper2).toHaveStyleRule('grid-row', '3');

    const wrapper3 = mount(<Grid.Item col="3 / 9" row='1 / 3'>Hello World!</Grid.Item>);
    expect(wrapper3).toHaveStyleRule('grid-column', '3 / 9');
    expect(wrapper3).toHaveStyleRule('grid-row', '1 / 3');

    const wrapper4 = mount(<Grid.Item colStart={4} colEnd={9} rowStart={3} rowEnd={8}>Hello World!</Grid.Item>);
    expect(wrapper4).toHaveStyleRule('grid-column-start', '4');
    expect(wrapper4).toHaveStyleRule('grid-column-end', '9');
    expect(wrapper4).toHaveStyleRule('grid-row-start', '3');
    expect(wrapper4).toHaveStyleRule('grid-row-end', '8');
  });

  it('should accept responsive props', () => {
    const wrapper = mount(<Grid.Item colStart={[1, 3, 5, 7]} colEnd={[-1, -1, 9, 12]} rowStart={[1, 3, 5, 7]} rowEnd={[-1, -1, 9, 12]} >Hello World!</Grid.Item>);

    expect(wrapper).toHaveStyleRule('grid-column-start', '1');
    expect(wrapper).toHaveStyleRule('grid-column-end', '-1');
    expect(wrapper).toHaveStyleRule('grid-column-start', '3', {
      media: 'screen and (min-width: 40em)',
    });
    expect(wrapper).toHaveStyleRule('grid-column-end', '-1', {
      media: 'screen and (min-width: 40em)',
    });
    expect(wrapper).toHaveStyleRule('grid-column-start', '5', {
      media: 'screen and (min-width: 52em)',
    });
    expect(wrapper).toHaveStyleRule('grid-column-end', '9', {
      media: 'screen and (min-width: 52em)',
    });
    expect(wrapper).toHaveStyleRule('grid-column-start', '7', {
      media: 'screen and (min-width: 64em)',
    });
    expect(wrapper).toHaveStyleRule('grid-column-end', '12', {
      media: 'screen and (min-width: 64em)',
    });

    expect(wrapper).toHaveStyleRule('grid-row-start', '1');
    expect(wrapper).toHaveStyleRule('grid-row-end', '-1');
    expect(wrapper).toHaveStyleRule('grid-row-start', '3', {
      media: 'screen and (min-width: 40em)',
    });
    expect(wrapper).toHaveStyleRule('grid-row-end', '-1', {
      media: 'screen and (min-width: 40em)',
    });
    expect(wrapper).toHaveStyleRule('grid-row-start', '5', {
      media: 'screen and (min-width: 52em)',
    });
    expect(wrapper).toHaveStyleRule('grid-row-end', '9', {
      media: 'screen and (min-width: 52em)',
    });
    expect(wrapper).toHaveStyleRule('grid-row-start', '7', {
      media: 'screen and (min-width: 64em)',
    });
    expect(wrapper).toHaveStyleRule('grid-row-end', '12', {
      media: 'screen and (min-width: 64em)',
    });
  });
});
