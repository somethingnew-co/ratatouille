# Accordion

The Accordion component collapses content in areas with limited space. It consists of a clickable header item and a content area that shows/hides when the header is clicked. The Accordion will render a `+`/`-` icon for close/expanded sections in the header and add a border between them, but otherwise make no assumptions about style.

## Example

```javascript
<Accordion>
  {items.map(item => {
    return <AccordionItem header={item.header} content={item.content} />
  })}
</Accordion>
```

## Props

_Note_: The `<Accordion>` wrapper will only accept `<AccordionItem>` components.

By default, the first AccordionItem is toggled open.

- `collapseAll`: Will default all AccordionItems to closed

prop        | type
----------- | -------
collapseAll | boolean

### AccordionItem Props

- `header`: The component for the header
- `content`: The component for the content that will toggle when you click on the header.
- `open`: If set to `true`, the AccordionItem will default to expanded

prop    | type
------- | ------------
header  | ReactElement
content | ReactElement
open    | boolean
