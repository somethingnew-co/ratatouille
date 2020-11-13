/* eslint-disable multiline-comment-style */
import { renderHook } from '@testing-library/react-hooks';
import useInterval from '../useInterval';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe('useInterval', () => {
  test('should not call timer if delay not provided', () => {
    const callback = jest.fn();
    renderHook(() => useInterval(callback));

    expect(setInterval).not.toHaveBeenCalled();
  });

  test('should init hook with timer', () => {
    const callback = jest.fn();
    renderHook(() => useInterval(callback, 1000));

    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 1000);

    expect(callback).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(5000);
    expect(callback).toHaveBeenCalledTimes(5);
  });

  test('should clear timer on unmount', () => {
    const callback = jest.fn();
    const { unmount } = renderHook(() => useInterval(callback, 1000));
    const initialTimerCount = jest.getTimerCount();
    expect(clearInterval).not.toHaveBeenCalled();

    unmount();

    expect(clearInterval).toHaveBeenCalledTimes(1);
    expect(jest.getTimerCount()).toBe(initialTimerCount - 1);
  });

  test('should not restart timer if callback is updated', () => {
    const callback1 = jest.fn();
    const callback2 = jest.fn();
    let callback = callback1;
    const delay = 1000;

    const { rerender } = renderHook(() => useInterval(callback, delay));
    jest.advanceTimersByTime(delay / 2);

    callback = callback2;
    rerender();

    jest.advanceTimersByTime(delay / 2);
    expect(callback1).toHaveBeenCalledTimes(0);
    expect(callback2).toHaveBeenCalledTimes(1);
  });

  test('should update timer when delay is updated', () => {
    let delay = 1000;

    const callback = jest.fn();
    const { rerender } = renderHook(() => useInterval(callback, delay));
    expect(callback).not.toHaveBeenCalled();

    // fast-forward initial delay
    jest.advanceTimersByTime(1000);
    expect(callback).toHaveBeenCalledTimes(1);

    // update delay by increasing previous one
    delay = 1500;
    rerender();

    // fast-forward initial delay again but this time it should not execute the cb
    jest.advanceTimersByTime(1000);
    expect(callback).toHaveBeenCalledTimes(1);

    // fast-forward remaining time for new delay
    jest.advanceTimersByTime(500);
    expect(callback).toHaveBeenCalledTimes(2);

    // pause timer if delay is null
    delay = null;
    rerender();

    // fast-forward by 3 more seconds
    jest.advanceTimersByTime(3000);
    expect(callback).toHaveBeenCalledTimes(2);
  });
});
