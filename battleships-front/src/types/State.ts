import { Entities, GameState } from '.';
import { StatusesState } from './StatusesState';

export interface State {
  readonly entities: Entities;
  readonly statuses: StatusesState;
  readonly game: GameState;
}
