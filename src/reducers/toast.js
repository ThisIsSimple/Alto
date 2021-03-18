import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const TOAST_MESSAGE = 'toast/TOAST_MESSAGE';

export const toastMessage = createAction(TOAST_MESSAGE);

const initialState = {
  type: '',
  message: '',
};

const reducer = handleActions(
  {
    [TOAST_MESSAGE]: (state, actions) =>
      produce(state, (draftState) => {
        draftState = actions.payload;
      }),
  },
  initialState,
);

export default reducer;
