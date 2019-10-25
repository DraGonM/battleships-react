import * as React from 'react';
import { connect } from 'react-redux';
import { GameStates } from '../../enums';
import {
  gamePlaceShip,
  gameSetup,
  gameShot,
  gameStart
} from '../../store/actions';
import { FieldPoint, ShipType, State, ThunkStateDispatch } from '../../types';
import { FlexColumnCenter, FlexRow } from '../Styled';
import Field from './Field';

interface StateProps {
  state: GameStates;
  score: number;
  time: string;
}

interface DispatchProps {
  start: () => void;
  setup: () => void;
  placeShip: (ship: ShipType) => void;
  shot: (point: FieldPoint) => void;
}

type AllProps = StateProps & DispatchProps;

class Game extends React.PureComponent<AllProps, {}> {
  constructor(props: AllProps) {
    super(props);
  }

  render() {
    console.log('-----GAME RENDER-----');

    return (
      <FlexColumnCenter>
        Game page
        <FlexRow>
          <Field selector="player" />
          <Field selector="enemy" />
        </FlexRow>
      </FlexColumnCenter>
    );
  }
}

const mapStateToProps = (state: State): StateProps => ({
  state: state.game.state,
  score: state.game.score,
  time: state.game.time
});

const mapDispatchToProps = (dispatch: ThunkStateDispatch) => ({
  start: () => dispatch(gameStart()),
  setup: () => dispatch(gameSetup()),
  placeShip: (ship: ShipType) => dispatch(gamePlaceShip(ship)),
  shot: (point: FieldPoint) => dispatch(gameShot(point))
});

export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Game);
