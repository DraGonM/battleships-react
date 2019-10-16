import * as React from 'react';
import { Field } from 'formik';
import { FormLabel, FormFieldContainer, FormError } from '../Styled';
import { FormFieldProps } from '../../types';

const FormField: React.SFC<FormFieldProps> = ({ name, label, component, validate, ...rest }) => {
  return <FormFieldContainer>
    <FormLabel htmlFor={name}>
        {label}
        {/* {validate && <sup>*</sup>} */}
    </FormLabel>
    <Field id={name} name={name} component={component} validate={validate} {...rest} />
    <FormError name={name} component="div" />
  </FormFieldContainer>;
};

export default FormField