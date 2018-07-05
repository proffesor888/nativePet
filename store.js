import {createStore, combineReducers} from 'redux';
import userReducer from './src/reducers';

const rootReducers = combineReducers({
	creds: userReducer,
})

export const store = createStore(rootReducers);