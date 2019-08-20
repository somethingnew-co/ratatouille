/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { FormInput, FormInputProps } from '.';

export interface ValidatedInputCallbacks {
  onValid?: () => void;
  onInvalid?: () => void;
  onEmpty?: () => void;
}

interface ValidatedInputOwnProps {
  validator?: (value: string) => boolean;
  type?: string;
  input: FormInputProps;
}

type ValidatedInputProps = ValidatedInputCallbacks & ValidatedInputOwnProps;

interface ValidatedInputState {
  value: string;
  validated: boolean;
  invalid: boolean;
}

class ValidatedInput extends React.Component<ValidatedInputProps, ValidatedInputState> {

  private validateTimeout?: number;

  constructor(props: ValidatedInputProps) {
    super(props);

    this.state = {
      value: '',
      validated: false,
      invalid: false,
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { validator, onValid, onInvalid, onEmpty } = this.props;
    const { validated, invalid } = this.state;
    const { value } = event.currentTarget;

    if (this.validateTimeout) clearTimeout(this.validateTimeout);
    if (value.length > 0) {
      const isValid = validator ? validator(value) : true;
      if (isValid || (!validated && invalid) || (validated && !isValid)) {
        this.setState({
          value,
          validated: isValid,
          invalid: !isValid,
        });
        if (onValid) onValid();
      } else {
        this.setState({ value });

        this.validateTimeout = setTimeout(() => {
          this.setState({
            validated: isValid,
            invalid: !isValid,
          });
          if (onInvalid) onInvalid();
        }, 1250);
      }
    } else {
      this.setState({
        value,
        validated: false,
        invalid: false,
      });
      if (onEmpty) onEmpty();
    }
  }

  render(): JSX.Element {
    const { input: inputProps } = this.props;

    return (
      <FormInput
        {...this.state}
        {...inputProps}
        onChange={this.handleOnChange}
      />
    );
  }
}

export default ValidatedInput;
