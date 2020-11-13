import '@testing-library/jest-dom';
import React, { useEffect } from 'react';
import { render, waitFor } from '@testing-library/react';
import useRefs from '../useRefs';

const RefTest: React.FC = () => {
  const items = ['ichi', 'ni', 'san'];
  const refs = useRefs(items);

  useEffect(() => {
    refs.forEach((ref, i) => {
      ref.current.innerText = `test${i}`;
    });
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
    expect(getByText('ichi')).toBeInTheDocument();
    expect(getByText('ni')).toBeInTheDocument();
    expect(getByText('san')).toBeInTheDocument();

    waitFor(() => {
      expect(getByText('test1')).toBeInTheDocument();
      expect(getByText('test2')).toBeInTheDocument();
      expect(getByText('test3')).toBeInTheDocument();
    });


  });
});
