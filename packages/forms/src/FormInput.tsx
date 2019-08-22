import React, { FC } from 'react';

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
  validated?: boolean;
  autoFocus?: boolean;
  customInputIndicator?: React.ReactNode;
  disableIndicator?: boolean;
}

const FormInput: FC<FormInputProps> = ({
  type = 'text',
  className = 'form-input',
  invalid,
  validated,
  customInputIndicator,
  disableIndicator,
  ...rest
}) => {
  const wrapperClassList = [`${className}-wrapper`];
  const indicatorClassList = [`${className}-indicator`];

  // ensure invalid state overrides valid state
  if (invalid) {
    wrapperClassList.push('invalid');
    indicatorClassList.push('invalid');
  } else if (validated) {
    wrapperClassList.push('valid');
    indicatorClassList.push('valid');
  }

  return (
    <div className={wrapperClassList.join(' ')}>
      <input
        type={type}
        className={className}
        {...rest}
      />
      {!disableIndicator && (
        <div className={indicatorClassList.join(' ')}>
          {!!customInputIndicator && customInputIndicator}
        </div>
      )}
    </div>
  );
};

export default FormInput;
