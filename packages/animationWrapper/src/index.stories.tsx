import React from 'react';
import { storiesOf } from '@storybook/react';

import AnimationWrapper from '.';

const AnimationWrapperStories = storiesOf('AnimationWrapper', module);

AnimationWrapperStories.add('default', () => (
  <AnimationWrapper />
));
