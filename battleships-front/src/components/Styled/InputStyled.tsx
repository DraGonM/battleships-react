import * as React from 'react';
import styled from 'styled-components';

export const Input = styled(({ ...rest }) => <input {...rest} />)`
  background: ${props => props.theme.colors.input};
  border: 1px solid white;
  border-radius: ${props => props.theme.borderRadius};
  font-size: 24px;
  line-height: 1.2;
  margin: ${props => props.theme.margin};
  padding: ${props => props.theme.padding};
  outline: none;
  text-align: center;
  max-width: 100%;
`;
