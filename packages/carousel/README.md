# `@stnew/carousel`

An unstyled carousel component for React projects that allows for custom styling after import.

## Usage

```
// require.js
const carousel = require('@stnew/carousel');

// es6
import Carousel from '@stnew/carousel';

```

### Props
* `items` - _ReactNode[]_ Elements that will be cycled through and displayed. Must have at least 3 elements (otherwise, why are you using a carousel?).
* `prevButton` - _ReactNode_ Element used as the 'previous item' 
* `nextButton` - _ReactNode_ Element used as the 'next item' button.button.
* `startIndex` - _number_ index of the element that will be shown first.
* `autoRotate` - _boolean_ toggle for the carousel to auto-rotate.
* `autoRotateTimeout` - _number_ time between auto-rotating (in milliseconds)

### Element classes
* `carousel-container` - outer-most container for the carousel.
* `carousel-button` - div element to which click handlers are attached. Acts as a wrapper for an optional element to act as the button.
  * `carousel-button next` - the button wrapper element that cycles forward.
  * `carousel-button prev` - the button wrapper element that cycles backward.
* `carousel-items` - wrapper for all carousel items.
* `carousel-item-wrapper` - wrapper for each carousel item.
  * `carousel-item-wrapper active` - the active carousel item
  * `carousel-item-wrapper prev` - the previously active carousel item
  * `carousel-item-wrapper next` - the next active carousel item
* `carousel-indicators` - wrapper for all carousel indicators (meant to be optional visual indicators for progress through the carousel items).
* `carousel-indicator` - individual carousel indicator
  * `carousel-indicator active` - indicates the item that is currently active
