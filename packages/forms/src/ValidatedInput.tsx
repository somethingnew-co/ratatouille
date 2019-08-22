import React from 'react';
import _ from 'lodash';
import FormInput, { FormInputProps } from './FormInput';

export interface ValidatedInputProps extends FormInputProps {
  validator?: (value: string) => boolean;
  onValid?: () => void;
  onInvalid?: () => void;
  onEmpty?: () => void;
}

interface ValidatedInputState {
  value: string;
  validated: boolean;
  invalid: boolean;
}

class ValidatedInput extends React.Component<ValidatedInputProps & React.HTMLProps<HTMLInputElement>
, ValidatedInputState> {
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
    const inputProps = _.omit(this.props, ['validator', 'onValid', 'onInvalid', 'onEmpty']);

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
