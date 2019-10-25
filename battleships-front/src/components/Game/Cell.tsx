import * as React from 'react';
import { connect } from 'react-redux';
import { GameStates } from '../../enums';
import { CellType, FieldPoint, State } from '../../types';
import { FieldCell } from '../Styled';
import { useDrop } from 'react-dnd';

interface Props {
  point: FieldPoint;
  onClick: (point: FieldPoint) => void;
}

interface StateProps {
  state: GameStates;
  cell: CellType;
}

type AllProps = Props & StateProps;

const accept: string[] = ['ship', 'shipCell'];

const Cell: React.FC<AllProps> = ({ point, onClick, state, cell }) => {
  console.log('---Cell render ', point);

  const [{ isOver }, drop] = useDrop({
    accept,
    collect: monitor => {
      // console.log('monitor:', monitor);

      return {
        isOver: monitor.isOver()
        // canDrop: monitor.canDrop()
      };
    },

    drop: item => console.log('onDrop:', item)
  });

  console.log('isOver:', isOver);

  return (
    <FieldCell
      ref={drop}
      shot={cell.shot}
      hover={isOver}
      onClick={() => (!cell.shot ? onClick(point) : null)}
      // onDragOver={e => e.preventDefault()}
      // onDragEnter={event =>
      //   console.log('drag enter:', point.x, point.y, event, event.target)
      // }
      // onDragLeave={event => console.log('drag leave:', point.x, point.y, event)}
      // onDrop={e => console.log('onDrop:', point.x, point.y, e)}
    >
      {`${point.x}:${point.y}`}
    </FieldCell>
  );
};

const mapStateToProps = (state: State, ownProps: Props): StateProps => ({
  state: state.game.state,
  cell:
    state.game[ownProps.point.selector].field[ownProps.point.x][
      ownProps.point.y
    ]
});

export default connect<StateProps>(mapStateToProps)(Cell);
