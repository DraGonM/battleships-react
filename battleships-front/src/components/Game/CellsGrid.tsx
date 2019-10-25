import * as React from 'react';
import { connect } from 'react-redux';
import { DefaultFieldKeys } from '../../settings';
import { gameShot } from '../../store/actions';
import { FieldPoint, ThunkStateDispatch } from '../../types';
import { FlexColumnCenter, FlexRow } from '../Styled';
import Cell from './Cell';

interface Props {
  selector: string;
}

interface DispatchProps {
  shot: (point: FieldPoint) => void;
}

type AllProps = Props & DispatchProps;

const CellsGrid: React.FC<AllProps> = ({ selector, shot }) => {
  console.log('--CellsGrid render');

  const cellsGrid = DefaultFieldKeys.reduce((acc, y) => {
    const row = (
      <FlexRow key={`fieldRow_${selector}_${y}`}>
        {DefaultFieldKeys.map(x => (
          <Cell
            key={`fieldCell_${selector}_${x}`}
            point={{ x, y, selector }}
            onClick={shot}
          />
        ))}
      </FlexRow>
    );

    return (
      <>
        {acc}
        {row}
      </>
    );
  }, <></>);

  return <FlexColumnCenter>{cellsGrid}</FlexColumnCenter>;
};

const mapDispatchToProps = (dispatch: ThunkStateDispatch) => ({
  shot: (point: FieldPoint) => dispatch(gameShot(point))
});

export default connect<{}, DispatchProps>(
  null,
  mapDispatchToProps
)(CellsGrid);
