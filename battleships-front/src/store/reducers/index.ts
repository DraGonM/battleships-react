import { combineReducers } from 'redux';
import entities from './entities';
import statuses from './statuses';

export default combineReducers({
  entities,
  statuses
});
