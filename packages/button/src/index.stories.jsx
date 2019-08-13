/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable import/no-extraneous-dependencies */

import Readme from '../README.md';
import Button from '.';

const ButtonStories = storiesOf('Button', module);

ButtonStories.addParameters({
  readme: {
    sidebar: Readme,
  },
});

ButtonStories.add('as button', () => (
  <Button onClick={action('clicked')} as="button" label="help" />
));

ButtonStories.add('as link', () => (
  <Button as="a" label="help" href="https://somethingnew.co" />
));
