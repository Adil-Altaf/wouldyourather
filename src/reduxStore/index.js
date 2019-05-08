import { createStore, applyMiddleware } from 'redux';
import reducer from '../reduxStore/reducers'
import thunk from 'redux-thunk';

import logger from 'redux-logger';


function configureReduxStore() {
    return createStore(reducer, {}, applyMiddleware(thunk, logger));
}

const reduxStore = configureReduxStore();
export default reduxStore;
