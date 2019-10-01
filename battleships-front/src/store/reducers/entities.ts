import { AnyAction } from 'redux';
import { storager } from '../../helpers';
import { Entities } from '../../types';

const entities = (
  state: Entities = {
    currentUser: storager.get('currentUser'),
    users: {},
    results: {}
  },
  action: AnyAction
): Entities => {
  switch (action.type) {
    default:
      return state;
  }
};

export default entities;
