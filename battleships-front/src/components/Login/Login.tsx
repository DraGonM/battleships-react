import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import { Status, User } from '../../types';

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
  render() {
    return (
      <LoginPanel>
        <h2>Login</h2>
        <Formik
          initialValues={{ userName: '', password: '' }}
          // validate={values => {
          //   let errors = {};
          //   if (!values.email) {
          //     errors.email = 'Required';
          //   } else if (
          //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          //   ) {
          //     errors.email = 'Invalid email address';
          //   }
          //   return errors;
          // }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="input" name="userName" />
              <ErrorMessage name="email" component="div" />
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </LoginPanel>
    );
  }
}

export default LoginPage;

export const LoginPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 2rem;
  padding-left: 2rem;
  padding-bottom: 2rem;
  background-color: #eaeaea;
  border-radius: 1rem;
`;
