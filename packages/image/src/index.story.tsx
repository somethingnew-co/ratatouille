import React from 'react';
import { storiesOf } from '@storybook/react';

import Image from '.';

const ImageStories = storiesOf('Image', module);

ImageStories.add('default', () => (
  <Image />
));
