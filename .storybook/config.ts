import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { addReadme } from 'storybook-readme';

const viewportOptions = {
  defaultViewport: 'desktop'
};

// automatically import all files ending in *.stories.tsx
const req = require.context('../packages', true, /\.stories\.(js|jsx|ts|tsx)$/);
function loadStories() {
  req.keys().forEach(req);
}

addParameters({ viewport: viewportOptions });
addDecorator(withA11y);
addDecorator(addReadme);
configure(loadStories, module);
