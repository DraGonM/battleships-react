import { AnyAction } from 'redux';
import { FieldPoint, GameActions, ShipType } from '../../types';

const gamePrefix: string = 'GAME_';

export const gameActions: GameActions = {
  start: `${gamePrefix}START`,
  setup: `${gamePrefix}SETUP`,
  placeShip: `${gamePrefix}PLACE_SHIP`,
  shot: `${gamePrefix}SHOT`
};

export const gameStart = (): AnyAction => ({
  type: gameActions.start
});

export const gameSetup = (): AnyAction => ({
  type: gameActions.setup
});

export const gamePlaceShip = (ship: ShipType): AnyAction => ({
  type: gameActions.placeShip,
  payload: ship
});

export const gameShot = (shot: FieldPoint): AnyAction => ({
  type: gameActions.shot,
  payload: shot
});
