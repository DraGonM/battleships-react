import { combineReducers } from 'redux';
import entities from './entities';
import game from './game';
import statuses from './statuses';

export default combineReducers({
  entities,
  statuses,
  game
});
