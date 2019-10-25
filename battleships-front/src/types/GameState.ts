import { PlayerState } from '.';
import { GameStates } from '../enums';

export interface GameState {
  state: GameStates;
  score: number;
  time: string;
  player: PlayerState;
  enemy: PlayerState;
}
