import { debounce } from 'debounce';
import { FieldProps } from 'formik';
import * as React from 'react';
import { Input } from '../Styled';

interface Props {
  onChange: (value: string) => any;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  value: string;
  focus?: boolean;
  placeholder?: string;
  disabled?: boolean;
  debounceDelay?: number;
  [key: string]: any;
}

interface ReactState {
  value: string;
  parentValue: string;
}

class InputComponent extends React.PureComponent<Props, ReactState> {
  static getDerivedStateFromProps(props: Props, state: ReactState) {
    const { value } = props;
    const { parentValue } = state;

    if (value !== parentValue)
      return {
        value,
        parentValue: value
      };

    return null;
  }

  constructor(props: Props) {
    super(props);

    const { debounceDelay } = props;

    this.state = {
      value: props.value,
      parentValue: props.value
    };
    this.onChangeCallback = debounce(
      this.onChangeCallback,
      debounceDelay || 250
    );
  }

  onChangeCallback = (value: string) => {
    this.props.onChange(value);
  };

  onChange = (value: string) => {
    this.setState({ value });
    this.onChangeCallback(value);
  };

  render() {
    const { focus, value, onChange, onKeyDown, ...rest } = this.props;

    return (
      <Input
        autoFocus={focus}
        value={this.state.value || ''}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          this.onChange(event.target.value)
        }
        onKeyDown={onKeyDown}
        {...rest}
      />
    );
  }
}

export default InputComponent;

export const InputFormik: React.SFC<FieldProps> = ({
  field,
  form: { touched, errors, setFieldValue, setFieldTouched },
  ...props
}) => {
  return (
    <InputComponent
      {...field}
      {...props}
      onChange={(value: string) => {
        setFieldValue(field.name, value);
        setFieldTouched(field.name, true);
      }}
    />
  );
};
