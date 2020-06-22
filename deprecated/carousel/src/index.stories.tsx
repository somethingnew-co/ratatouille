import React from 'react';
import { storiesOf } from '@storybook/react';
import styled, { css } from 'styled-components';

import README from '../README.md';
import Carousel from '.';

const CarouselStories = storiesOf('Carousel', module);

CarouselStories.addParameters({
  readme: {
    sidebar: README,
  },
});

const carouselControls = css`
  .carousel-button {
    outline: none;
    appearance: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 50px;
    width: 50px;
    background-color: #222;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 0;
    padding: 0;
    margin: 0;
    border-radius: 50%;
    z-index: 1;

    :hover {
      background-color: #333;
      cursor: pointer;
    }

    ::after,
    ::before {
      font-family: monospace;
      font-size: 20px;
      margin: auto;
      line-height: 0;
      display:block;
      width: 12px;
      height: 0;

    }
  }

  .carousel-button.next {
    right: 50px;
    :before {
      content: ">";
    }
  }

  .carousel-button.prev {
    left: 50px;
    :before {
      content: "<";
    }
  }

  .carousel-indicators {
    display: none;
    user-select: none;
  }
`;

const Container = styled.div`
  .carousel-container {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    outline: 2px solid black;

    .carousel-item-wrapper {
      position: absolute;
      z-index: 0;
      top: 50%;
      left: 50%;
      transition: transform 0.5s, opacity 0.5s;
      user-select: none;
    }

    .carousel-item-wrapper.active {
      transform: translateX(-50%);
      opacity: 1;
      user-select: auto;
    }

    .carousel-item-wrapper.prev {
      opacity: 0;
      transform: translateX(-200px);
    }

    .carousel-item-wrapper.next {
      opacity: 0;
      transform: translateX(200px);
    }

    ${carouselControls}
  }
`;

const dummyCarouselItems = [
  <span key="imagining">imagining</span>,
  <span key="the">the</span>,
  <span key="pieces">pieces</span>,
  <span key="seeing">seeing</span>,
  <span key="the2">the</span>,
  <span key="whole">whole</span>,
];

CarouselStories.add('default', () => (
  <Container>
    <Carousel items={dummyCarouselItems} />
  </Container>
));

CarouselStories.add('auto rotate', () => (
  <Container>
    <Carousel autoRotate items={dummyCarouselItems} />
  </Container>
));

// Image Example
const ImageCarousel = styled.div`
  .carousel-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: ${(2 / 3) * 100}%;
    overflow: hidden;

    .carousel-item-wrapper {
      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;
      right: 0;
      transition: transform 1s ease-in-out;
      user-select: none;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        user-select: none;
      }
    }

    .carousel-item-wrapper.active {
      transform: translateX(0);
      user-select: auto;
    }

    .carousel-item-wrapper.prev {
      transform: translateX(-100%);
    }

    .carousel-item-wrapper.next {
      transform: translateX(100%);
    }

    ${carouselControls}
  }
`;

const dummyCarouselImages = [
  <img src="https://dummyimage.com/600x400/000/fff&text=1" key={1} />,
  <img src="https://dummyimage.com/600x400/000/fff&text=2" key={2} />,
  <img src="https://dummyimage.com/600x400/000/fff&text=3" key={3} />,
  <img src="https://dummyimage.com/600x400/000/fff&text=4" key={4} />,
  <img src="https://dummyimage.com/600x400/000/fff&text=5" key={5} />,
];

CarouselStories.add('with images', () => (
  <ImageCarousel>
    <Carousel items={dummyCarouselImages} />
  </ImageCarousel>
));
