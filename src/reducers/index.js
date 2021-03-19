import { combineReducers } from 'redux';
import loginReducer from './login';
import modalReducer from './modal';
import taskReducer from './task';
import taskCreateReducer from './taskCreate';
import userSelectReducer from './userSelect';
import toastReducer from './toast';
import reportCreateReducer from './reportCreate';

const rootReducer = combineReducers({
  loginReducer,
  modalReducer,
  taskReducer,
  taskCreateReducer,
  userSelectReducer,
  toastReducer,
  reportCreateReducer,
});

export default rootReducer;
