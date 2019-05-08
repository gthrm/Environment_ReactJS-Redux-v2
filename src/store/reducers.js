import constants from "./constants/index.js";
import { combineReducers } from 'redux';
import { initialState } from "./initialState.js";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ACTION_CHANGE_NAME:
      return { ...state, name: action.payload };

    case constants.ACTION_CHANGE_DATE:
      return { ...state, name: action.payload };
      
    case constants.ACTION_GET_INITIAL_STATE:
      return initialState;
      
    default:
      return state;
  }
};

export default combineReducers({
  rootReducer: rootReducer,
});
