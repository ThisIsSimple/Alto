import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_USERNAME_INPUT = 'login/CHANGE_USERNAME_INPUT';
const CHANGE_PASSWORD_INPUT = 'loign/CHANGE_PASSWORD_INPUT';

export const changeUsernameInput = createAction(CHANGE_USERNAME_INPUT);
export const changePasswordInput = createAction(CHANGE_PASSWORD_INPUT);

const initialState = {
  username: '',
  password: '',
};

const reducer = handleActions(
  {
    [CHANGE_USERNAME_INPUT]: (state, actions) =>
      produce(state, (draftState) => {
        draftState.username = actions.payload;
      }),
    [CHANGE_PASSWORD_INPUT]: (state, actions) =>
      produce(state, (draftState) => {
        draftState.password = actions.payload;
      }),
  },
  initialState,
);

export default reducer;
