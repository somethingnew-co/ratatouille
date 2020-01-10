import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../test/setup';
import { Text } from './index';
import { render } from '@testing-library/react';
import 'jest-styled-components';

test('it works', () => {
  const { container } = render(<ThemeProvider theme={theme}>
    <>
      <Text>Hello World</Text>
      <Text typeStyle="h1" as="h1">Testing H1</Text>
      <Text typeStyle="h2" as="h2">Testing H2</Text>
    </>
  </ThemeProvider>);
  expect(container).toMatchSnapshot();
})
;
