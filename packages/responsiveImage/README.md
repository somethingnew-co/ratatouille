
# @stnew/responsive-image

Responsive Image component that wraps the HTML [picture] element and handles lazy loading the media.

## Props

| Props | Type | Optional | Default | Desc |
| ----- | ----- | ----- | ----- | ----- |
| sources | `SourceProps[]` | no | n/a | Objects defining the media sources and the breakpoints at which they should be used |
| indexBy | `'min-width'` or `'max-width'` | yes | `'min-width'` | Rule by which breakpoints are decided |
| indexUnit | `'px'` or `'rem'` or `'vw'` | yes | `'px'` | Unit used when parsing breakpoints |
| lazyTimeout | `number` | yes | n/a | If defined, this is the number of milliseconds before the image starts to load |
| lazy | `boolean` | yes | `false` | If true, the image will load when the [intersection-observer] marks the element as "in view" |
| nativeLazy | `boolean` | yes | `false` | If true, enables [native lazy loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading) |
| rootMargin | `string` | yes | `'500px'` | Root Margin for the [intersection-observer] |
| onLoad | `function` | yes | n/a | Callback for when the image is loaded |
| alt | `string` | yes | n/a | value for the alt tag for the `img` element |
| title | `string` | yes | n/a | value for the title tag for the `img` element (will be used for alt if alt is not otherwise defined |

**SourceProps**

| Props | Type | Optional | Desc |
| ----- | ----- | ----- | ----- |
| src | `string` | no | Media source string |
| width | `number` | yes | Screen width at which to use this media source |
| isDefault | `boolean` | yes | If true, this media source will be used as default | 

## Usage

```javascript
import React from 'react'
import { ResponsiveImage } from '@stnew/responsive-image'

const sources = [
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

funtion ImageExample() {
	return (
		<ResponsiveImage
	      sources={sources}
	      alt="something new graphic"
	      title="this is something new"
	    />
	)
}
```

[picture]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture
[intersection-observer]: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
