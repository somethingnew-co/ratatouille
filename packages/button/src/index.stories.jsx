import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import Button from '.';

const buttonStories = storiesOf('Button', module);

buttonStories.add('default', () => (
  <Button label="help" />
));
