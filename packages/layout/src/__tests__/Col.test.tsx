import React from 'react';
import { baseTheme, mountWithTheme } from '../../test/utils';
import { Col } from '..';
import 'jest-styled-components';

describe('Col', () => {
  it('should have correct padding', () => {
    const wrapper0 = mountWithTheme(<Col>Hello World!</Col>, baseTheme);
    expect(wrapper0).toHaveStyleRule('padding-left', `${baseTheme.grid.columnGap / 2}px`);
    expect(wrapper0).toHaveStyleRule('padding-right', `${baseTheme.grid.columnGap / 2}px`);
  });

  it('should accept layout props', () => {
    const wrapper0 = mountWithTheme(<Col>Hello World!</Col>, baseTheme);
    expect(wrapper0).toHaveStyleRule('flex', '1');

    const wrapper1 = mountWithTheme(<Col span={9}>Hello World!</Col>, baseTheme);
    expect(wrapper1).toHaveStyleRule('flex', '0 0 75%');

    const wrapper2 = mountWithTheme(
      <Col
        span={3}
        offset={3}
        push={3}
        pull={3}
        order={3}
      >
        Hello World!
      </Col>,
      baseTheme,
    );
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
