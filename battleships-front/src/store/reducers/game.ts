import { AnyAction } from 'redux';
import { GameStates } from '../../enums';
import { DefaultField } from '../../settings';
import { FieldPoint, GameState } from '../../types';
import { gameActions } from '../actions/gameActions';

const initialGameState: GameState = {
  state: GameStates.Setup,
  score: 0,
  time: 'time',

  player: {
    field: { ...DefaultField },
    ships: []
  },
  enemy: {
    field: { ...DefaultField },
    ships: []
  }
};

const game = (
  state: GameState = initialGameState,
  action: AnyAction
): GameState => {
  switch (action.type) {
    case gameActions.start: {
      return { ...state, state: GameStates.PlayerTurn };
    }

    case gameActions.setup: {
      return { ...initialGameState };
    }

    case gameActions.placeShip: {
      return { ...initialGameState };
    }

    case gameActions.shot: {
      const { payload } = action;
      const { x, y, selector } = payload as FieldPoint;
      const field = state[selector].field;

      return {
        ...state,
        [selector]: {
          ...state[selector],
          field: {
            ...field,
            [x]: {
              ...field[x],
              [y]: { ...field[x][y], shot: true }
            }
          }
        }
      };
    }

    default:
      return state;
  }
};

export default game;
