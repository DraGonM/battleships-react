import styled from 'styled-components';
import { IconProps } from '../../types';

export const Icon = styled.div<IconProps>`
  margin-right: 0.2rem;
  max-height: ${p => (p.size ? p.size : 1.5)}em;
  max-width: ${p => (p.size ? p.size : 1.5)}em;

  svg {
    height: ${p => (p.size ? p.size : 1.5)}em;
    width: ${p => (p.size ? p.size : 1.5)}em;
  }
`;
