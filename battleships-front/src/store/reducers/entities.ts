import { normalize } from 'normalizr';
import { AnyAction } from 'redux';
import { storager } from '../../helpers';
import { Entities } from '../../types';
import {
  addResultTypes,
  getResultsByUserTypes,
  getResultsTypes,
  loginTypes
} from '../actions';
import Schemes from '../schemes';

const entities = (
  state: Entities = {
    currentUser: undefined,
    users: {},
    results: {}
  },
  action: AnyAction
): Entities => {
  switch (action.type) {
    case loginTypes.success: {
      const { payload } = action;
      const normalizedEntities = normalize(payload, Schemes.User).entities;

      // TODO decide how to persist user session, encryption etc..
      storager.set('currentUser', payload);

      console.log('login.success:', payload);

      const mergedState: Entities = {
        ...state,
        ...normalizedEntities,
        currentUser: payload
      };

      console.log('mergedState:', mergedState);

      return mergedState;
    }

    case getResultsByUserTypes.success:
    case getResultsTypes.success: {
      const { payload } = action;
      const normalizedEntities = normalize(payload, Schemes.Results).entities;

      const mergedState = {
        ...state,
        ...normalizedEntities
      };

      return mergedState;
    }

    case addResultTypes.success: {
      const { payload } = action;
      const normalizedEntities = normalize(payload, Schemes.Result).entities;

      const mergedState = {
        ...state,
        ...normalizedEntities
      };

      return mergedState;
    }

    default:
      return state;
  }
};

export default entities;
