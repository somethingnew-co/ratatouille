# Markdown

A React component for parsing and rendering a markdown string, with support for custom tags that map to React components.

## Examples

```
// string
const exampleString = "## test";

// React
<Markdown content={exampleString} />

// renders
<h2>test</h2>
```

```
//string
const exampleString = `
## test
<ComponentA />
<ComponentB className="test">children</ComponentB>
`;

// React
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

<Markdown
  content={exampleString}
  customTags={{
    ComponentA,
    ComponentB,
  }}
/>

// renders
<h2>test</h2>
<ComponentA />
<ComponentB className="test">children</ComponentB>

```
