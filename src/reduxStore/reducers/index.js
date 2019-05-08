import { combineReducers } from 'redux';
import userAuth  from './userAuth';
import users  from './users';
import questions  from './questions';
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
    userAuth,
    users,
    questions,
    loadingBar: loadingBarReducer,
});
