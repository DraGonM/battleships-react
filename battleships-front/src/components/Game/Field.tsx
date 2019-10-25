import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { GameStates } from '../../enums';
import { gamePlaceShip } from '../../store/actions';
import { ShipType, State, ThunkStateDispatch } from '../../types';
import { FlexRow } from '../Styled';
import CellsGrid from './CellsGrid';
import ShipSelect from './ShipSelect';

interface Props {
  selector: string;
}

interface StateProps {
  state: GameStates;
  score: number;
  time: string;
}

interface DispatchProps {
  placeShip: (ship: ShipType) => void;
}

interface ReactState {
  checked: boolean;
}

type AllProps = Props & StateProps & DispatchProps;

class Field extends React.PureComponent<AllProps, ReactState> {
  constructor(props: AllProps) {
    super(props);

    this.state = { checked: false };
  }

  render() {
    const { selector } = this.props;
    const { checked } = this.state;
    console.log('-Field render ', selector);

    return (
      <FieldForm>
        <ShipSelect />
        <CellsGrid selector={selector} />
        {/* <button onClick={() => this.setState({ checked: !checked })}>
          Click
        </button> */}
      </FieldForm>
    );
  }
}

const mapStateToProps = (state: State): StateProps => ({
  state: state.game.state,
  score: state.game.score,
  time: state.game.time
});

const mapDispatchToProps = (dispatch: ThunkStateDispatch, ownProps: Props) => ({
  placeShip: (ship: ShipType) => dispatch(gamePlaceShip(ship))
});

export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Field);

const FieldForm = styled(FlexRow)`
  background-color: ${props => props.theme.colors.input};
  margin: ${props => props.theme.margin};
  padding: ${props => props.theme.padding};
  border-radius: ${props => props.theme.borderRadius};
`;
