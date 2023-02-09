import { combineReducers } from 'redux'


const initialState = {
  articles: []
};

function reducers(state = {}, action) {
  switch (action.type) {
    default:
      return state
  }
}

const rootReducer = combineReducers({ reducers })

export default rootReducer




// function rootReducer(state = initialState, action) {
//   return state;
// };

// export default rootReducer;

