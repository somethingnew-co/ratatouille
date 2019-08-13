import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../test/setup';
import { Text } from './index';

describe('<Text>', () => {
  it('renders', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <>
          <Text>Hello World</Text>
          <Text as="h1">Testing H1</Text>
          <Text as="h2">Testing H2</Text>
          <Text as="span">Testing span</Text>
        </>
      </ThemeProvider>,
    );
    expect(wrapper.containsMatchingElement(<p>Hello World</p>)).toEqual(true);
    expect(wrapper.containsMatchingElement(<h1>Testing H1</h1>)).toEqual(true);
    expect(wrapper.containsMatchingElement(<h2>Testing H2</h2>)).toEqual(true);
    expect(wrapper.containsMatchingElement(<span>Testing span</span>)).toEqual(true);
    expect(theme.typeStyles.h1.fontSize).toEqual(24);
  });
});
