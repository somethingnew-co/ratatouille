import React from 'react';
import { Row } from '..';
import { mountWithTheme, baseTheme } from '../../test/utils';
import 'jest-styled-components';

describe('Row', () => {
  it('should have "display: flex" css property', () => {
    const wrapper = mountWithTheme(<Row>Hello World!</Row>, baseTheme);
    expect(wrapper).toHaveStyleRule('display', 'flex');
  });

  it('should have negative margins', () => {
    const wrapper = mountWithTheme(<Row>Hello World!</Row>, baseTheme);
    expect(wrapper).toHaveStyleRule('margin-left', `${-(baseTheme.grid.columnGap / 2)}px`);
    expect(wrapper).toHaveStyleRule('margin-right', `${-(baseTheme.grid.columnGap / 2)}px`);
  });
});
