# @stnew/animation-wrapper

Component that wraps other content and runs an animation on the content when it becomes visible on the page. 

```sh
npm install @stnew/layout
```

```javascript
import { AnimationWrapper } from '@stnew/animation-wrapper';

const AnimatedComponent = () => (
  <AnimationWrapper>
    <p>Hello world!</p>
  </AnimationWrapper>
)
```

Props              | Type                         | Desc
------------------ | ---------------------------- | --------------------------------------
children           | `ReactNode` or `ReactNode[]` | Element(s) to be animated.
rootMargin         | `string`                     | `rootMargin` for [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Creating_an_intersection_observer).
generalClass       | `string`                     | css class to be applied at all times to the wrapper component.
finalClass         | `string`                     | css class to be applied to the wrapper component once the content comes into view.
initialClass       | `string`                     | css class to be applied to the wrapper component before the content comes into view.
delay              | `number`                     | time (in milliseconds) between when the element comes into view and when the finalClass gets applied.
heightDelayMult    | `number`                     | if multiple AnimationWrapper components are in view when the page loads, their animations are delayed by an amount relative to how far they are from the top of the page. `heightDelayMult` can increase or increase this offset. `heightDelayMult = 0` will remove the delay. Default value is 1.
