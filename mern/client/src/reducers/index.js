import { combineReducers } from 'redux';

import posts from './posts';

//key and value are same...
export const reducers = combineReducers({ posts });