import React, { FC } from 'react';

import ValidatedInput, { ValidatedInputProps } from './ValidatedInput';

const validator = (value: string): boolean => /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value);

const ZipCodeInput: FC<ValidatedInputProps> = ({
  type = 'text',
  placeholder = 'zipcode',
  ...rest
}) => (
  <ValidatedInput
    pattern="[0-9]{5}"
    validator={validator}
    {...{
      type,
      placeholder,
      ...rest,
    }}
  />
);

export default ZipCodeInput;
