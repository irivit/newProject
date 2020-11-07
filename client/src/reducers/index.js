/**
 * App Reducers
 */
import { combineReducers } from 'redux';
import settings from './settings';
import chatAppReducer from './ChatAppReducer';
import sidebarReducer from './SidebarReducer';
import authUserReducer from './AuthUserReducer';
import ecommerceReducer from './EcommerceReducer';
import usersReducer from './UserReducer';

const reducers = combineReducers({
   settings,
   chatAppReducer,
   sidebar: sidebarReducer,
   authUser: authUserReducer,
   ecommerce: ecommerceReducer,
   user: usersReducer,
});

export default reducers;
