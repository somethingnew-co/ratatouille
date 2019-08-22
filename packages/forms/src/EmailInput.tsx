import React, { FC } from 'react';

import ValidatedInput, { ValidatedInputProps } from './ValidatedInput';

const validator = (value: string): boolean => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
};

const EmailInput: FC<ValidatedInputProps> = ({
  type = 'email',
  placeholder = 'enter email',
  ...rest
}) => (
  <ValidatedInput
    type="email"
    validator={validator}
    {...{
      type,
      placeholder,
      ...rest,
    }} />
);

export default EmailInput;
