# @stnew/animation-wrapper

Component that wraps other content and runs an animation on the content when it becomes visible on the page.

```sh
npm install @stnew/animation-wrapper
```

```javascript
import { AnimationWrapper } from '@stnew/animation-wrapper';

const AnimatedComponent = () => (
  <AnimationWrapper>
    <p>Hello world!</p>
  </AnimationWrapper>
)
```

Props           | Type           | Default          | Desc
--------------- | -------------- | ---------------- | ---
children        | `ReacChildren` | `undefined`      | Element(s) to be animated. *Required
root            | `Element`      | `0px`            | `root` option passed to [IntersectionObserver].
rootMargin      | `string`       | `0px`            | `rootMargin` option passed to [IntersectionObserver].
threshold       | `number`       | 0                | `threshold` option passed to [IntersectionObserver].
generalClass    | `string`       | `animation`      | css class to be applied at all times to the wrapper component.
finalClass      | `string`       | `animation-to`   | css class to be applied to the wrapper component once the content comes into view.
initialClass    | `string`       | `animation-from` | css class to be applied to the wrapper component before the content comes into view.
delay           | `number`       | `0`              | time (in milliseconds) between when the element comes into view and when the finalClass gets applied.
heightDelayMult | `number`       | `1`              | if multiple AnimationWrapper components are in view when the page loads, their animations are delayed by an amount relative to how far they are from the top of the page. `heightDelayMult` can increase or increase this offset. A value of `0` will remove the delay.

[intersectionobserver]: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Creating_an_intersection_observer
