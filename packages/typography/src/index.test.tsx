import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Text } from './index';
import { render } from '@testing-library/react';
import 'jest-styled-components';

const theme = {
  typeStyles: {
    h1: {
      fontSize: [16, 24],
    },
    h2: {
      color: 'red',
    },
  },
};

test('render Text with styles', () => {
  const { container } = render(
    <ThemeProvider theme={theme}>
      <>
        <Text>Hello World</Text>
        <Text typeStyle="body" as="h1">Testing H1</Text>
        <Text typeStyle="h1" as="h1">Testing H1</Text>
        <Text typeStyle="h2" as="h2">Testing H2</Text>
      </>
    </ThemeProvider>,
  );
  expect(container).toMatchSnapshot();
})
;
