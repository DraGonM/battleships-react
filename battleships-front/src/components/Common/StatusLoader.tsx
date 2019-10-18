import * as React from 'react';
import { Status } from '../../types';
import { Loader } from '../Styled';

interface Props {
  status: Status;
  children: React.ReactNode;
}

const StatusLoader: React.SFC<Props> = ({ status, children }) => {
  if (status.isRunning) return <Loader />;

  return <>{children}</>;
};

export default StatusLoader;
