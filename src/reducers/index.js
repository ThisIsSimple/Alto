import { combineReducers } from 'redux';
import loginReducer from './login';
import registerReducer from './register';
import modalReducer from './modal';
import taskReducer from './task';
import taskCreateReducer from './taskCreate';
import userSelectReducer from './userSelect';
import toastReducer from './toast';

const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  modalReducer,
  taskReducer,
  taskCreateReducer,
  userSelectReducer,
  toastReducer,
});

export default rootReducer;
