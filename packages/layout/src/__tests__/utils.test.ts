import { calcGutter, calcSpan, transformProp, trimUnit } from '../utils';

describe('trimUnit', () => {
  it('should trim unit', () => {
    const value = '138px';
    expect(trimUnit(value)).toEqual('px');
  });
});

describe('calcGutter', () => {
  it('should output correct gutter', () => {
    const row = calcGutter(true);
    const col = calcGutter(false);
    expect(row(100)).toEqual(-50);
    expect(col(100)).toEqual(50);
    expect(row('10rem')).toEqual('-5rem');
    expect(col('10ch')).toEqual('5ch');
  });
});

describe('calcSpan', () => {
  it('should output correct gutter', () => {
    const span = calcSpan(12);

    expect(span(6)).toEqual('50%');
    expect(span('6.5')).toEqual('50%');

    expect(span(12)).toEqual('100%');
    expect(span('12px')).toEqual('100%');
  });
});

describe('transformProp', () => {
  it('should trasnform number prop', () => {
    const prop = 20;
    const testFunction = transformProp(n => n * 2);
    expect(testFunction(prop)).toEqual(40);
  });

  it('should trasnform string prop', () => {
    const prop = '20px';
    const testFunction = transformProp(n => Number.parseFloat(n) * 2 + trimUnit(n));
    expect(testFunction(prop)).toEqual('40px');
  });

  it('should trasnform array prop', () => {
    const prop = [20, 30, 40];
    const testFunction = transformProp(n => n * 2);
    expect(testFunction(prop)).toEqual([40, 60, 80]);
  });

  it('should trasnform object prop', () => {
    const prop = { _: 20, sm: 30, xl: 40 };
    const testFunction = transformProp(n => n * 2);
    expect(testFunction(prop)).toEqual({ _: 40, sm: 60, xl: 80 });
  });

  it('should ignore undefined props', () => {
    const prop = { _: 20, sm: undefined, xl: 40 };
    const testFunction = transformProp(n => n * 2);
    expect(testFunction(prop)).toEqual({ _: 40, xl: 80 });
  });
});
