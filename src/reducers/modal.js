import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const TOGGLE_MODAL = 'modal/TOGGLE_MODAL';
const OPEN_MODAL = 'modal/OPEN_MODAL';
const CLOSE_MODAL = 'modal/CLOSE_MODAL';
const CHANGE_MODAL = 'modal/CHANGE_MODAL';

export const toggleModal = createAction(TOGGLE_MODAL);
export const openModal = createAction(OPEN_MODAL);
export const closeModal = createAction(CLOSE_MODAL);
export const changeModal = createAction(CHANGE_MODAL);

const initialState = {
  modalOpen: false,
  modalContent: undefined,
};

const reducer = handleActions(
  {
    [TOGGLE_MODAL]: (state, actions) =>
      produce(state, (draftState) => {
        draftState.modalOpen = !draftState.modalOpen;
      }),
    [OPEN_MODAL]: (state, actions) =>
      produce(state, (draftState) => {
        draftState.modalOpen = true;
      }),
    [CLOSE_MODAL]: (state, actions) =>
      produce(state, (draftState) => {
        draftState.modalOpen = false;
      }),
    [CHANGE_MODAL]: (state, actions) =>
      produce(state, (draftState) => {
        draftState.modalContent = actions.payload;
      }),
  },
  initialState,
);

export default reducer;
