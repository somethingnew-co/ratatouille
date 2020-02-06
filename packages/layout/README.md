# @stnew/layout

Layout system built with [styled-components] and [styled-system]. Features basic box-model components, flexbox components (including a bootstrap-style grid implementation), and CSS grid components.

```sh
npm install @stnew/layout
```

## Box

Basic layout building block. Includes `layout`, `space`, `position`, `typography`, and `color` props from [styled-system]. All [`<Box>`] components are un-styled except for `box-sizing: border-box`.

```javascript
import { Box } from '@stnew/layout';

const Component = () => (
  <Box>Hello world!</Box>
)
```

## Container

Extension of [`<Box>`] with max-width applied that corresponds to theme breakpoints.

```javascript
import { Container } from '@stnew/layout';

const Component = () => (
  <Container>Hello world!</Container>
)
```

## CSS Grid Layout

```javascript
import { Grid } from '@stnew/layout';
```

### Grid.Container

Identical to [`<Container>`], intended to wrap CSS grid.

### Grid.Box

CSS grid layout block extending [`<Box>`]. Includes `grid` props from [styled-system].

## Grid.Item

Basic layout block with `grid` props from [styled-system]. Identical to `<Grid.Box>` besides exclusion of `display: grid`, and intended to be used inside a `<Grid.Box>` container.

| Props    | Type                                             | Desc                       |
| -------- | ------------------------------------------------ | -------------------------- |
| row      | `string` or `number` or `string[]` or `number[]` | CSS prop `grid-row`        |
| rowStart | `string` or `number` or `string[]` or `number[]` | CSS prop `grid-row-start`  |
| rowEnd   | `string` or `number` or `string[]` or `number[]` | CSS prop `grid-row-end`    |
| col      | `string` or `number` or `string[]` or `number[]` | CSS prop `grid-column`     |
| colStart | `string` or `number` or `string[]` or `number[]` | CSS prop `grid-column-end` |
| colEnd   | `string` or `number` or `string[]` or `number[]` | CSS prop `grid-column-end` |

```javascript
import { Grid } from '@stnew/layout';

const Component = () => (
  <Grid.Container>
    <Grid.Box>
      <Grid.Item col="1/7">Hello world!</Grid.Item>
      <Grid.Item col="7/12">Hello world!</Grid.Item>
      <Grid.Item start={5} end={9}>Hello world!</Grid.Item>
    </Grid.Box>
  </Grid.Container>
)
```

## Flex Layout

```javascript
import { Flex}  from '@stnew/layout';
```

### Flex.Box

Extension of [`<Box>`] with `flexbox` props from [styled-system]. Intended to be used as a wrapper around `<Flex.Item>`.

### Flex.Item

Basic layout block identical to `<Flex.Box>` besides exclusion of `display: flex`, and intended to be used inside a flexbox container.

```javascript
import { Flex}  from '@stnew/layout';

const Component = () => (
  <Flex.Box>
    <Flex.Item>Hello world!</Flex.Item>
  </Flex.Box>
)
```

## Bootstrap-style Flex Grid

### Flex.Container

Identical to [`<Container>`], intended to wrap bootstrap-style grid.

### Flex.Row

Extension of `<Flex.Box>` with negative margins. Intended to wrap `<Flex.Col>` components for bootstrap-style flexbox grid. Must be inside `<Flex.Container>`, otherwise use `<Flex.Box>`.

### Flex.Col

Child of `<Flex.Row>` with built in padding and bootstrap-style flexbox grid props. Otherwise identical to `<Flex.Item>`.

| Props  | Type                   | Desc                                   |
| ------ | ---------------------- | -------------------------------------- |
| span   | `number` or `number[]` | spans `n` number of columns            |
| offset | `number` or `number[]` | offset column by `n` number of columns |
| push   | `number` or `number[]` | move col left `n` number of columns    |
| pull   | `number` or `number[]` | move col right `n` number of columns   |
| order  | `number` or `number[]` | specify order of columns               |

```javascript
import { Flex}  from '@stnew/layout';

const Component = () => (
  <Flex.Container>
    <Flex.Row>
      <Flex.Col span={4}>Hello world!</Flex.Col>
      <Flex.Col span={4}>Hello world!</Flex.Col>
      <Flex.Col span={2} offset={4}>Hello world!</Flex.Col>
    </FlexRow>
  </Flex.Container>
)
```

[`<Box>`]: #box
[`<Container>`]: #container
[styled-system]: https://styled-system.com/api
