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
import { FlexColumnCenter, FormColumn, Icon, PrimaryButton } from '../Styled';
import { LoginPanel } from '../Styled';

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

    return (
      <FlexColumnCenter>
        <LoginPanel>
          <h2>Login</h2>
          <Formik
            initialValues={{
              name: (currentUser && currentUser.name) || '',
              pass: (currentUser && currentUser.pass) || ''
            }}
            onSubmit={values => login(values)}
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
                  Log in
                </PrimaryButton>
              </FormColumn>
            )}
          </Formik>
        </LoginPanel>
      </FlexColumnCenter>
    );
  }
}

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
