import {createStore, compose, applyMiddleware} from 'redux';
import reduxThunkMiddleware from 'redux-thunk';
import equipmentReducer from './services/reducer';
import {combineReducers} from 'redux';
const rootReducer = combineReducers({equipment: equipmentReducer})
const middlewares = [reduxThunkMiddleware.withExtraArgument()].filter(Boolean);

const storeEnhancers = [applyMiddleware(...middlewares) && window.devToolsExtension && window.devToolsExtension()].filter(Boolean);

export default(initialState) => createStore(rootReducer, initialState, compose(...storeEnhancers),);
