import { Formik } from 'formik';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Status, User } from '../../types';
import { InputFormik } from '../Common/InputComponent';
import { FormColumn, PrimaryButton } from '../Styled';
import { LoginPanel } from '../Styled';
import FormField from '../Common/FormField';
import { atLeast3, atLeast5 } from '../../helpers';

interface StateProps {
  currentUser?: User;
  addUserStatus: Status;
  loginUserStatus: Status;
}

interface ReactState {
  saveSuccess: boolean;
}

type AllProps = StateProps & RouteComponentProps;

class LoginPage extends React.PureComponent<AllProps, ReactState> {
  constructor(props: AllProps) {
    super(props)

    this.state = {
      saveSuccess: false,
    }
  }

  render() {
    console.log('LoginPage RENDER')

    return (
      <LoginPanel>
        <h2>Login</h2>
        <Formik
          initialValues={{ name: '', pass: '' }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(`submit:`, JSON.stringify(values, null, 2))
            setTimeout(() => {
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <FormColumn>
              <FormField 
                name='name' 
                label='Name'
                placeholder='name'
                component={InputFormik}
                validate={atLeast3} />
              <FormField 
                name='pass'
                label='Password'
                type='password' 
                placeholder='password'
                component={InputFormik}
                validate={atLeast5} />
              <PrimaryButton type="submit" disabled={isSubmitting}>
                Submit
              </PrimaryButton>
            </FormColumn>
          )}
        </Formik>
      </LoginPanel>
    );
  }
}

export default LoginPage;
