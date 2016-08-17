import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import { userRate } from './modules/post/reducer';

const mainReducer = combineReducers({ routing, userRate });

export default mainReducer;
