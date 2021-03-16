import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const TOGGLE_MODAL = 'task/TOGGLE_MODAL';
const CHANGE_TASK = 'task/CHANGE_TASK';

export const toggleModal = createAction(TOGGLE_MODAL);
export const changeTask = createAction(CHANGE_TASK);

const initialState = {
  modalOpen: false,
  task: undefined,
};

const reducer = handleActions(
  {
    [TOGGLE_MODAL]: (state, actions) =>
      produce(state, (draftState) => {
        draftState.modalOpen = !draftState.modalOpen;
      }),
    [CHANGE_TASK]: (state, actions) =>
      produce(state, (draftState) => {
        draftState = actions.payload;
      }),
  },
  initialState,
);

export default reducer;
