import {applyMiddleware, combineReducers, legacy_createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import {userReducer} from "./data.reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
   userReducer
})

export const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))