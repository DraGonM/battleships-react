import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  top: 45%;
  left: 45%;
  position: fixed;
  border: 8px solid ${props => props.theme.colors.secondary};
  border-top: 8px solid ${props => props.theme.colors.darkPrimary};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  animation: ${rotate} 1s linear infinite;
`;
