import { renderHook, act } from '@testing-library/react-hooks';
import useCarousel from '../useCarousel';

const testItems = Array(10);

beforeAll(() => {
  jest.useFakeTimers();
});
afterAll(() => {
  jest.useRealTimers();
});


describe('useCarousel', () => {
  test('should manually carousel through items', () => {
    const { result } = renderHook(() => useCarousel(testItems.length));

    expect(result.current[0]).toBe(0);

    act(() => {
      result.current[1].next();
    });

    expect(result.current[2]).toBe(0);
    expect(result.current[0]).toBe(1);

    act(() => {
      result.current[1].set(5);
    });

    expect(result.current[2]).toBe(1);
    expect(result.current[0]).toBe(5);

    act(() => {
      result.current[1].prev();
    });

    expect(result.current[2]).toBe(5);
    expect(result.current[0]).toBe(4);

    act(() => {
      result.current[1].set(testItems.length - 1);
    });

    expect(result.current[0]).toBe(9);

    act(() => {
      result.current[1].next();
    });

    expect(result.current[0]).toBe(0);

    act(() => {
      result.current[1].prev();
    });

    expect(result.current[0]).toBe(9);
  });

  test('should auto rotate', async () => {
    const { result } = renderHook(() => useCarousel(3, {
      auto: true,
      interval: 1000,
    }));

    expect(result.current[0]).toBe(0);
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(await result.current[0]).toBe(1);
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(await result.current[0]).toBe(2);
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(await result.current[0]).toBe(0);
  });

  test('should continute auto rotate after a timeout', async () => {
    const { result } = renderHook(() => useCarousel(3, {
      auto: true,
      interval: 1000,
      // autoTimeout: 5000,
    }));

    expect(result.current[0]).toBe(0);
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(await result.current[0]).toBe(1);
    act(() => {
      result.current[1].prev();
    });
    expect(await result.current[0]).toBe(0);
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(await result.current[0]).toBe(0);
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(await result.current[0]).toBe(1);
  });


  test('should update if config changes', async () => {
    let auto = true;
    let interval = 1000;
    const { result, rerender } = renderHook(() => useCarousel(3, {
      auto,
      interval,
    }));

    expect(result.current[0]).toBe(0);
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(await result.current[0]).toBe(1);
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(await result.current[0]).toBe(2);

    interval = 2000;
    rerender();

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(await result.current[0]).toBe(2);
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(await result.current[0]).toBe(0);

    auto = false;
    rerender();

    act(() => {
      jest.advanceTimersByTime(4000);
    });
    expect(await result.current[0]).toBe(0);
  });

});
