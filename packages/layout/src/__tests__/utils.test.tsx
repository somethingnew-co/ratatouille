import {
  makePropArray,
  calcFlexPercentage,
  calcFlexGap,
  calcFlexMargin,
} from '../utils';

import {
  columns, gap,
} from '../utils/grid';

import {
  baseTheme,
  responsiveTheme,
} from '../utils/theme';

describe('Utils', () => {
  it('should convert props to arrays', () => {
    const x = makePropArray(2);
    const y = makePropArray([2, 4, 8]);
    expect(x).toEqual([2]);
    expect(y).toEqual([2, 4, 8]);
  });

  it('should generate flex percentages', () => {
    const widths = calcFlexPercentage([12, 6, 3], baseTheme);
    expect(widths).toEqual(['100%', '50%', '25%']);
  });

  it('should generate flex gap', () => {
    const gaps = calcFlexGap(baseTheme);
    expect(gaps).toEqual([10]); // half
    const gapsArray = calcFlexGap(responsiveTheme);
    expect(gapsArray).toEqual(['0.5rem', 10, '2.5%']); // half
  });

  it('should generate flex row margins', () => {
    const margins = calcFlexMargin(baseTheme);
    const noMargins = calcFlexMargin(baseTheme, true);
    const marginArray = calcFlexMargin(responsiveTheme);
    expect(margins).toEqual([-10]);
    expect(noMargins).toEqual(0);
    expect(marginArray).toEqual(['-0.5rem', -10, '-2.5%']); // half

  });

  it('should generate grid gaps', () => {
    const gaps = gap(baseTheme);
    const gapsArray = gap(responsiveTheme);
    expect(gaps).toEqual([20]);
    expect(gapsArray).toEqual(['1rem', 20, '5%']);
  });

  it('should generate grid columns', () => {
    const col = columns(baseTheme);
    expect(col).toEqual('repeat(12, 1fr)');
  });
});
