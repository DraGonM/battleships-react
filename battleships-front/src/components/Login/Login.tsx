import { Formik } from 'formik';
import * as React from 'react';
import { IoMdLogIn } from 'react-icons/io';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { atLeast3, atLeast5 } from '../../helpers';
import { loginUser } from '../../store/actions';
import { State, ThunkStateDispatch, User } from '../../types';
import FormField from '../Common/FormField';
import { InputFormik } from '../Common/InputComponent';
import { FormColumn, PrimaryButton } from '../Styled';
import { LoginPanel } from '../Styled';
import styled, { StyledComponent, DefaultTheme } from 'styled-components';
import { IconType } from 'react-icons/lib/cjs';

interface StateProps {
  currentUser?: User;
}

interface DispatchProps {
  login: (user: User) => void;
}

type AllProps = StateProps & DispatchProps & RouteComponentProps;

class LoginPage extends React.PureComponent<AllProps, {}> {
  render() {
    const { currentUser, login } = this.props;
    console.log('LoginPage RENDER');

    return (
      <LoginPanel>
        <h2>Login</h2>
        <Formik
          initialValues={{
            name: (currentUser && currentUser.name) || '',
            pass: (currentUser && currentUser.pass) || ''
          }}
          onSubmit={values => {
            console.log(`submit:`, values);
            login(values);
          }}
        >
          {({ isSubmitting }) => (
            <FormColumn>
              <FormField
                name="name"
                label="Name"
                placeholder="name"
                component={InputFormik}
                validate={atLeast3}
              />
              <FormField
                name="pass"
                label="Password"
                type="password"
                placeholder="password"
                component={InputFormik}
                validate={atLeast5}
              />
              <PrimaryButton type="submit" disabled={isSubmitting}>
                <Icon>
                  <IoMdLogIn />
                </Icon>
                Submit
              </PrimaryButton>
            </FormColumn>
          )}
        </Formik>
      </LoginPanel>
    );
  }
}

const LoginIcon = styled(IoMdLogIn)`
  display: inline-flex;
  align-self: baseline;
  margin-right: 0.2rem;
`;

interface IconProps {
  size: number;
}

const Icon: StyledComponent<
  React.ElementType,
  DefaultTheme,
  IconProps,
  never
> = styled(({ size, ...rest }) => <div {...rest} />)<IconProps>`
  margin-right: 0.2rem;

  svg {
    height: ${p => (p.size ? p.size : 1.5)}rem;
    width: ${p => (p.size ? p.size : 1.5)}rem;
  }
`;

const mapStateToProps = (state: State): StateProps => ({
  currentUser: state.entities.currentUser
});

const mapDispatchToProps = (dispatch: ThunkStateDispatch) => ({
  login: (user: User) => dispatch(loginUser(user))
});

export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
