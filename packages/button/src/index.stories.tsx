import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import README from '../README.md';
import Button from './index';

const ButtonStories = storiesOf('Button', module);

ButtonStories.addParameters({
  readme: {
    sidebar: README,
  },
});

ButtonStories.add('as button', () => (
  <Button onClick={action('clicked')} as="button" label="help" />
));

ButtonStories.add('as link', () => (
  <Button as="a" label="help" href="https://somethingnew.co" />
));
