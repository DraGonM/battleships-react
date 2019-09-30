import { combineReducers } from 'redux'
import entities from './entities'
import statuses from './statuses'

export default (history) => combineReducers({
  entities,
  statuses
})
