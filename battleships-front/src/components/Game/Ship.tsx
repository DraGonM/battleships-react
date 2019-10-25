import * as React from 'react';
import { useDrag } from 'react-dnd';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Directions } from '../../enums';
import { gamePlaceShip } from '../../store/actions';
import { ShipProps, ShipType, ThunkStateDispatch } from '../../types';
import { FlexColumn } from '../Styled';
import { ShipCell } from '../Styled';

interface Props {
  size: number;
  draggable: boolean;
}

interface DispatchProps {
  placeShip: (ship: ShipType) => void;
}

type AllProps = Props & DispatchProps;

const defaultDirection: Directions = Directions.Down;

const Ship: React.FC<AllProps> = ({ size, draggable }) => {
  console.log('---Ship render');
  const [hoveredCell, setHover] = React.useState();

  const shipCells = Array.from({ length: size }).map((x, i) => (
    <ShipCell onMouseOver={() => setHover(i)} />
  ));

  const [{ isDragging }, drag] = useDrag({
    item: {
      id: size,
      type: 'ship',
      cell: hoveredCell,
      direction: defaultDirection
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  console.log('isDragging:', isDragging);

  return (
    <ShipBlock
      ref={draggable ? drag : null}
      draggable={draggable}
      // onDragStart={e => console.log('ship drag start', size, e)}
      // onDragEnd={e => console.log('ship drag stop', size, e)}
    >
      {shipCells}
    </ShipBlock>
  );
};

const mapDispatchToProps = (dispatch: ThunkStateDispatch) => ({
  placeShip: (ship: ShipType) => dispatch(gamePlaceShip(ship))
});

export default connect<{}, DispatchProps>(
  null,
  mapDispatchToProps
)(Ship);

const ShipBlock = styled(FlexColumn)<ShipProps>`
  cursor: ${props => props.draggable && `pointer`};

  > div {
    ${props =>
      !props.draggable && `background-color: ${props.theme.colors.secondary}`};
  }

  &:hover {
    ${props => props.draggable && `filter: brightness(90%);`}
  }
`;
