import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface Props {
  component: React.ElementType;
  redirectTo: string;
  redirectIf: boolean;
}

type AllProps = Props & RouteProps;

const PrivateRoute: React.SFC<AllProps> = ({
  component: Component,
  redirectIf,
  redirectTo,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      redirectIf ? <Redirect to={redirectTo} /> : <Component {...props} />
    }
  />
);

export default PrivateRoute;
