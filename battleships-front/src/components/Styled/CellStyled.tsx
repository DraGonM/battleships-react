import styled from 'styled-components';
import { CellProps } from '../../types/CellProps';

export const CommonCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
`;

export const FieldCell = styled(CommonCell)<CellProps>`
  cursor: ${props => !props.shot && `pointer`};
  ${props => props.hover && `filter: brightness(90%);`};

  background-color: ${props =>
    props.shot ? props.theme.colors.secondary : props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius};
  margin: 0.1em;

  &:hover {
    ${props => !props.shot && `filter: brightness(90%);`}
  }

  &:active {
    ${props => !props.shot && `filter: brightness(85%);`}
  }
`;

export const ShipCell = styled(CommonCell)`
  background-color: ${props => props.theme.colors.error};
`;
