import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import README from '../README.md';
import AnimationWrapper from '.';

const range = (n: number): Array<number> => Array.from({ length: n }, (x, i) => i);

const AnimationWrapperStories = storiesOf('AnimationWrapper', module);

AnimationWrapperStories.addParameters({
  readme: {
    sidebar: README,
  },
});

const Container = styled.div`
  .animation-general {
    display: block;
    transition: transform 0.3s, opacity 0.3s;
    transition-delay: 0.3s;
    transition-timing-function: ease-out;
  }

  .animation-final {
    opacity: 1;
    transform: translateY(0);
  }

  .animation-initial {
    opacity: 0;
    transform: translateY(100px);
  }
`;

const Item = styled.p`
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
`;

AnimationWrapperStories.add('default', () => (
  <Container>
    {range(200).map((ind: number): JSX.Element => (
      <AnimationWrapper key={`example_${ind}`} heightDelayMult={10}>
        <Item>example {ind}</Item>
      </AnimationWrapper>
    ))}
  </Container>
));

AnimationWrapperStories.add('by letter', () => (
  <Container>
    {range(200).map((ind: number): JSX.Element => {
      const content = `example ${ind}`;
      const toks = content.split('');
      return (
        <Item key={`example_${ind}`}>
          {toks.map((tok, i) => (
            <AnimationWrapper key={`tok_${ind}_${i}`} delay={i * 100} heightDelayMult={10}>
              {tok}
            </AnimationWrapper>
          ))}
        </Item>
      );
    })}
  </Container>
));
