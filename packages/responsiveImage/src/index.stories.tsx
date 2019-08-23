import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import ResponsiveImage from '.';

const ResponsiveImageStories = storiesOf('ResponsiveImage', module);

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const dummySources = [
  {
    src: '/assets/stn-new-wide.png',
    width: 1200,
  },
  {
    src: '/assets/stn-new.png',
    width: 960,
    isDefault: true,
  },
  {
    src: '/assets/stn-new-narrow.png',
    width: 600,
  },
];

ResponsiveImageStories.add('default', () => (
  <Container>
    <ResponsiveImage
      sources={dummySources}
      alt="something new graphic"
      title="this is something new"
    />
  </Container>
));
