/*
 *
 * AddSignedDocument reducer
 *
 */

import { fromJS } from 'immutable';

import { MERGE_DATA } from './constants';

export const initialState = fromJS({
  reload: false,
  kanbanStatus: 0,
  name: '',
});

function loginPage(state = initialState, action) {
  switch (action.type) {
    case MERGE_DATA:
      return state.merge(action.data);

    default:
      return state;

  }
}

export default loginPage;