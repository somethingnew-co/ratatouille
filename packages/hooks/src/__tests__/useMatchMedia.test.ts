import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import useMatchMedia from '../useMatchMedia';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: query === '(min-width: 768px)',
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('useMatchMedia', () => {
  test('should match media', () => {
    const { result } = renderHook(() => useMatchMedia('(min-width: 768px)'));
    expect(result.current).toEqual(true);
  });
  test('should not match media', () => {
    const { result } = renderHook(() => useMatchMedia('(min-width: 480px)'));
    expect(result.current).toEqual(false);
  });
});
