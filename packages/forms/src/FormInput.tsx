import React from 'react';

export interface FormInputOwnProps {
  id?: string;
  name?: string;
  className?: string;
  required?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
  customInputIndicator?: React.ReactNode;
  disableIndicator?: boolean;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

interface FormInputControlledProps {
  type?: string;
  value?: string;
  invalid?: boolean;
  validated?: boolean;
}

type FormInputProps = FormInputOwnProps & FormInputControlledProps;

const FormInput = ({
  autoFocus,
  placeholder,
  id,
  className = 'form-input',
  name,
  value,
  onChange,
  onFocus,
  onBlur,
  invalid,
  validated,
  type = 'text',
  required,
  customInputIndicator,
  disableIndicator,
}: FormInputProps): JSX.Element | null => {
  // ensure invalid state overrides valid state
  const valid = validated && !invalid;

  const wrapperClassList = [`${className}-wrapper`];
  const indicatorClassList = [`${className}-indicator`];
  if (invalid) {
    wrapperClassList.push('invalid');
    indicatorClassList.push('invalid');
  }
  if (valid) {
    wrapperClassList.push('valid');
    indicatorClassList.push('valid');
  }

  return (
    <div className={wrapperClassList.join(' ')}>
      <input
        className={className}
        id={id}
        name={name}
        autoFocus={autoFocus}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        type={type}
        required={required}
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
