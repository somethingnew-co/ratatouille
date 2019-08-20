import React from 'react';

import { ValidatedInput, ValidatedInputCallbacks, FormInputProps } from '.';

type EmailInputProps = FormInputProps & ValidatedInputCallbacks;

const validator = (value: string): boolean => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
};

const EmailInput = (props: EmailInputProps): JSX.Element => {
  const { onValid, onInvalid, onEmpty, ...inputProps } = props;
  inputProps.placeholder = inputProps.placeholder || 'email';
  return (
    <ValidatedInput
      validator={validator}
      onValid={onValid}
      onInvalid={onInvalid}
      onEmpty={onEmpty}
      input={inputProps}
      type="email"
    />
  );
};

export default EmailInput;
