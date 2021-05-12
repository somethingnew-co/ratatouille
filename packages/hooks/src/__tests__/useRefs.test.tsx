import '@testing-library/jest-dom';
import React, { useEffect } from 'react';
import { render } from '@testing-library/react';
import useRefs from '../useRefs';

const RefTest: React.FC = () => {
  const items = ['ichi', 'ni', 'san'];
  const refs = useRefs(items);

  useEffect(() => {
    let index = 0;
    for (const ref of refs) {
      ref.current.textContent = `test${index}`;
      index += 1;
    }
  }, [refs]);

  return (
    <div>
      {items.map((item, index) => (
        <div key={item} ref={refs[index]}>{item}</div>
      ))}
    </div>
  );
};

describe('useRefs', () => {
  test('attaches refs', () => {
    const { getByText } = render(<RefTest />);
    expect(getByText('test0')).toBeInTheDocument();
    expect(getByText('test1')).toBeInTheDocument();
    expect(getByText('test2')).toBeInTheDocument();
  });
});
