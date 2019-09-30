import { AnyAction } from 'redux'
import { Entities } from '../../types'

const entities = (
  state: Entities = {
    users: {},
    results: {}
  },
  action: AnyAction,
): Entities => {
  switch (action.type) {

    default:
      return state
  }
}

export default entities
