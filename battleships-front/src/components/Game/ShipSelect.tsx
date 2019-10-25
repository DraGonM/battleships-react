import * as React from 'react';
import { connect } from 'react-redux';
import { GameStates } from '../../enums';
import { DefaultShips } from '../../settings';
import { gamePlaceShip } from '../../store/actions';
import { ShipType, State, ThunkStateDispatch } from '../../types';
import { FlexColumn, FlexColumnCenter } from '../Styled';
import Ship from './Ship';

interface Props {}

interface StateProps {
  state: GameStates;
  shipsOnField: ShipType[];
}

interface DispatchProps {
  placeShip: (ship: ShipType) => void;
}

interface ReactState {
  checked: boolean;
}

type AllProps = Props & StateProps & DispatchProps;

class ShipSelect extends React.PureComponent<AllProps, ReactState> {
  constructor(props: AllProps) {
    super(props);

    this.state = { checked: false };
  }

  render() {
    const { shipsOnField } = this.props;
    const { checked } = this.state;
    console.log('--ShipSelect render');

    return (
      <FlexColumn>
        {DefaultShips.map(x => {
          const freeQuantity =
            x.count - shipsOnField.filter(y => y.size === x.size).length;
          const draggable = freeQuantity > 0;

          return (
            <FlexColumnCenter>
              <label>{freeQuantity}</label>
              <Ship size={x.size} draggable={draggable} />
            </FlexColumnCenter>
          );
        })}
      </FlexColumn>
    );
  }
}

const mapStateToProps = (state: State, ownProps: Props): StateProps => ({
  state: state.game.state,
  shipsOnField: state.game.player.ships
});

const mapDispatchToProps = (dispatch: ThunkStateDispatch, ownProps: Props) => ({
  placeShip: (ship: ShipType) => dispatch(gamePlaceShip(ship))
});

export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(ShipSelect);
