import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Carousel from '.';

const CarouselStories = storiesOf('Carousel', module);

const Container = styled.div`
  .carousel-container {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    outline: 2px solid black;

    .carousel-button {
      outline: none;
      appearance: none;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      height: 50px;
      width: 50px;
      background-color: black;
      color: white;

      display: flex;
      flex-direction: column;
      justify-content: center;
      

      border: 0;
      padding: 0;
      margin: 0;

      border-radius: 50%;

      :hover {
        background-color: #333;
        cursor: pointer;
      }
    }

    .carousel-button.next {
      right: 50px;
      z-index: 1;
      :before {
        content: ">";
        margin: 0 auto;
      }
    }

    .carousel-button.prev {
      left: 50px;
      z-index: 1;
      :before {
        content: "<";
        margin: 0 auto;
      }
    }

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

    .carousel-indicators {
      display: none;
      user-select: none;
    }
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
