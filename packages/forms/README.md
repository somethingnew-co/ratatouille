# @stnew/forms

Modular form components with some pre-configured form inputs for common use-cases.

```sh
npm install @stnew/forms
```

## FormInput

A [controlled component](https://reactjs.org/docs/forms.html#controlled-components) that composes an input element with a wrapper element and an optional and extendable indicator component. The indicator component is meant to provide visual indication of valid/invalid states.

```javascript
import { FormInput } from '@stnew/forms';
```

Controlled Props     | Type        | Desc
-------------------- | ----------- | -------------------------------------------
type                 | `string`    | type of the input field
value                | `string`    | current value of the input field
invalid              | `boolean`   | should be true if the current value is invalid
validated            | `boolean`   | should be true if the current value is valid

General Props        | Type        | Desc
-------------------- | ----------- | -------------------------------------------
id                   | `string`    | id of the input element
name                 | `string`    | name of the input element
className            | `string`    | class of the input element
required             | `boolean`   | toggle to make the input field required
autoFocus            | `boolean`   | toggle to make the input field focused by default
placeholder          | `string`    | placeholder text for the input field
customInputIndicator | `ReactNode` | Element to be nested in the existing indicator `div` element
disableIndicator     | `boolean`   | if `true`, the indicator `div` element will not be rendered
onChange             | `function`  | onChange callback function
onFocus              | `function`  | onFocus callback function
onBlur               | `function`  | onBlur callback function

## ValidatedInput

Component that wraps FormInput and handles validation and state management.

```javascript
import { ValidatedInput } from '@stnew/forms';
```

Props                | Type        | Desc
-------------------- | ----------- | -------------------------------------------
onValid              | `function`  | callback for when the input's value is valid
onInvalid            | `function`  | callback for when the input's value is invalid
onEmpty              | `function`  | callback for when the input's value is empty
validator            | `function`  | function that takes in the value of the input and returns true if valid, false otherwise
type                 | `string`    | type of the input element
input                | `object`    | object will all attributes listed under 'General Props' for FormInput

## Others

The package also includes some extentions of ValidatedInput that have built-in validation functions for common use cases. Each of these are the same, but with different validation functions.
- EmailInput
- ZipCodeInput

```javascript
import { EmailInput, ZipCodeInput } from '@stnew/forms';
```

Props                | Type        | Desc
-------------------- | ----------- | -------------------------------------------
onValid              | `function`  | callback for when the input's value is valid
onInvalid            | `function`  | callback for when the input's value is invalid
onEmpty              | `function`  | callback for when the input's value is empty
* also includes all props listed under 'General Props' for FormInput
