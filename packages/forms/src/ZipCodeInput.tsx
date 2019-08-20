import React from 'react';

import { ValidatedInput, ValidatedInputCallbacks, FormInputProps } from '.';

type ZipCodeInputProps = FormInputProps & ValidatedInputCallbacks;

const validator = (value: string): boolean => /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value);

const ZipCodeInput = (props: ZipCodeInputProps): JSX.Element => {
  const { onValid, onInvalid, onEmpty, ...inputProps } = props;
  inputProps.placeholder = inputProps.placeholder || 'zip code';
  return (
    <ValidatedInput
      validator={validator}
      onValid={onValid}
      onInvalid={onInvalid}
      onEmpty={onEmpty}
      input={inputProps}
      type="text"
    />
  );
};

export default ZipCodeInput;
