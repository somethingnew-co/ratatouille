import {
  makePropArray,
  generateColumnStrings,
  calcFlexPercentage,
  calcFlexGap,
  calcFlexMargin,
} from '../utils';

import {
  columns, gap,
} from '../utils/grid';

import { baseTheme } from '../utils/theme';

describe('Utils', () => {
  it('should convert props to arrays', () => {
    const x = makePropArray(2);
    const y = makePropArray([2, 4, 8]);
    expect(x).toEqual([2]);
    expect(y).toEqual([2, 4, 8]);
  });

  it('should generate column strings', () => {
    const columns = generateColumnStrings([1, 3], [2, 4]);
    const columnsNoEnd = generateColumnStrings([1, 3]);
    const columnsNoValues = generateColumnStrings();
    expect(columns).toEqual(['1 / 2', '3 / 4']);
    expect(columnsNoEnd).toEqual(['1 / -1', '3 / -1']);
    expect(columnsNoValues).toEqual(['1 / -1']);
  });

  it('should generate flex percentages', () => {
    const widths = calcFlexPercentage([12, 6, 3], baseTheme);
    expect(widths).toEqual(['100%', '50%', '25%']);
  });

  it('should generate flex gap', () => {
    const gaps = calcFlexGap(baseTheme);
    expect(gaps).toEqual([5, 10]);
  });

  it('should generate flex row margins', () => {
    const margins = calcFlexMargin(baseTheme);
    const noMargins = calcFlexMargin(baseTheme, true);
    expect(margins).toEqual([-5, -10]);
    expect(noMargins).toEqual(0);
  });

  it('should generate grid gaps', () => {
    const gaps = gap(baseTheme);
    expect(gaps).toEqual([10, 20]);
  });

  it('should generate grid columns', () => {
    const col = columns(baseTheme);
    expect(col).toEqual('repeat(12, 1fr)');
  });
});
