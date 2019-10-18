import * as React from 'react';
import styled from 'styled-components';

export const Icon = styled(({ IconCmp: IconCmp, ...rest }) => (
  <IconCmp {...rest} />
))`
  color: red;
`;
