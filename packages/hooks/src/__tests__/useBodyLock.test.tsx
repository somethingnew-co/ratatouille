import '@testing-library/jest-dom';
import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import useBodyLock from '../useBodyLock';

const MountTest: React.FC = () => {
  useBodyLock();
  return <div />;
};

const PropTest: React.FC<{ locked?: boolean }> = ({ locked }) => {
  useBodyLock(locked);
  return <div />;
};

const StateTest: React.FC = () => {
  const [locked, setLocked] = useState(false);
  useBodyLock(locked);

  const handleClick = (): void => {
    setLocked(!locked);
  };

  return <input type="button" onClick={handleClick} />;
};
describe('useBodyLock', () => {
  test('should lock body on mount, unlock on umount', () => {
    const { unmount } = render(<MountTest />);
    expect(document.body).toHaveStyle('overflow: hidden');
    unmount();
    expect(document.body).not.toHaveStyle('overflow: hidden');
  });

  test('should lock body with prop', () => {
    render(<PropTest locked={true} />);
    expect(document.body).toHaveStyle('overflow: hidden');
  });

  test('should unlock body with prop', () => {
    render(<PropTest locked={false} />);
    expect(document.body).not.toHaveStyle('overflow: hidden');
  });

  test('should toggle lock on click', () => {
    const { getByRole } = render(<StateTest />);
    expect(document.body).not.toHaveStyle('overflow: hidden');
    fireEvent.click(getByRole('button'));
    expect(document.body).toHaveStyle('overflow: hidden');
  });
});
