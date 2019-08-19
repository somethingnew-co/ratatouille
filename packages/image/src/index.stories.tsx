import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Image from '.';

const ImageStories = storiesOf('Image', module);

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

ImageStories.add('default', () => (
  <Container>
    <Image src={'/assets/stn-new.png'} />
  </Container>
));
