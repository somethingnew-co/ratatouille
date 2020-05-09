import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { mount, ReactWrapper, MountRendererProps } from 'enzyme';
import { Theme } from '../src/utils/theme';
import 'jest-styled-components';

const breakpoints = ['600px', '900px', '1200px'];

/**
 * Base theme for tests
 */
export const baseTheme: Theme = {
  grid: {
    columns: 12,
    columnGap: 20,
    maxWidth: 960,
    margins: 20,
  },
};

export const responsiveTheme: Theme = {
  grid: {
    columns: 12,
    columnGap: ['1rem', 20, '5%'],
    maxWidth: breakpoints,
    margins: ['1rem', 20, '5%'],
  },
  breakpoints,
};

export const mountWithTheme = (tree: ReactElement<any>, theme: Theme): ReactWrapper => {
  const WrappingThemeProvider: React.FC<{children: React.ReactChild}> = props => (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  );

  /*
   * Override typing because @types/enzyme doesn't have wrappingComponent yet
   * https://github.com/DefinitelyTyped/DefinitelyTyped/pull/36667
   */
  return mount(
    tree,
    { wrappingComponent: WrappingThemeProvider } as MountRendererProps,
  );
};
