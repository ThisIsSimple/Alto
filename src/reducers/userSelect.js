import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_SELECTED_USERS = 'userSelect/CHANGE_USER_SELECT';

export const changeSelectedUsers = createAction(CHANGE_SELECTED_USERS);

const initialState = {
  selectedUsers: [],
};

const reducer = handleActions(
  {
    [CHANGE_SELECTED_USERS]: (state, actions) =>
      produce(state, (draftState) => {
        draftState.selectedUsers = actions.payload;
      }),
  },
  initialState,
);

export default reducer;
