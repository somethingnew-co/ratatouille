import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { mount, ReactWrapper, MountRendererProps } from 'enzyme';
import { Theme } from '../src/utils/theme';
import 'jest-styled-components';

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
    { wrappingComponent: WrappingThemeProvider } as MountRendererProps
  );
};
