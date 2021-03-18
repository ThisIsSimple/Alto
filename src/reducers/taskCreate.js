import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_TASK_NAME = 'taskCreate/CHANGE_NAME';
const CHANGE_START_DATE = 'taskCreate/CHANGE_START_DATE';
const CHANGE_END_DATE = 'taskCreate/CHANGE_END_DATE';
const CHANGE_DESCRIPTION = 'taskCreate/CHANGE_DESCRIPTION';
const CHANGE_PRIORITY = 'taskCreate/CHANGE_PRIORITY';
const CHANGE_ORDERED_TO = 'taskCreate/CHANGE_ORDERED_TO';
const CHANGE_SECRET = 'taskCreate/CHANGE_SECERT';
const CHANGE_ATTACHMENTS = 'taskCreate/CHANGE_ATTACHMENT';
const RESET_TASK = 'taskCreate/RESET_TASK';

export const changeTaskName = createAction(CHANGE_TASK_NAME);
export const changeStartDate = createAction(CHANGE_START_DATE);
export const changeEndDate = createAction(CHANGE_END_DATE);
export const changeDescription = createAction(CHANGE_DESCRIPTION);
export const changePriority = createAction(CHANGE_PRIORITY);
export const changeOrderedTo = createAction(CHANGE_ORDERED_TO);
export const changeSecret = createAction(CHANGE_SECRET);
export const changeAttachments = createAction(CHANGE_ATTACHMENTS);
export const resetTask = createAction(RESET_TASK);

const initialState = {
  taskName: '',
  startDate: undefined,
  endDate: undefined,
  description: '',
  priority: 1,
  orderedTo: [],
  secret: false,
  attachments: [],
};

const reducer = handleActions(
  {
    [CHANGE_TASK_NAME]: (state, actions) =>
      produce(state, (draftState) => {
        draftState.taskName = actions.payload;
      }),
    [CHANGE_START_DATE]: (state, actions) =>
      produce(state, (draftState) => {
        draftState.startDate = actions.payload;
      }),
    [CHANGE_END_DATE]: (state, actions) =>
      produce(state, (draftState) => {
        draftState.endDate = actions.payload;
      }),
    [CHANGE_DESCRIPTION]: (state, actions) =>
      produce(state, (draftState) => {
        draftState.description = actions.payload;
      }),
    [CHANGE_PRIORITY]: (state, actions) =>
      produce(state, (draftState) => {
        draftState.priority = actions.payload;
      }),
    [CHANGE_ORDERED_TO]: (state, actions) =>
      produce(state, (draftState) => {
        draftState.orderedTo = actions.payload;
      }),
    [CHANGE_SECRET]: (state, actions) =>
      produce(state, (draftState) => {
        draftState.secret = actions.payload;
      }),
    [CHANGE_ATTACHMENTS]: (state, actions) =>
      produce(state, (draftState) => {
        draftState.attachments = actions.payload;
      }),
    [RESET_TASK]: (state, actions) =>
      produce(state, (draftState) => {
        draftState.taskName = '';
        draftState.startDate = undefined;
        draftState.endDate = undefined;
        draftState.description = '';
        draftState.priority = 1;
        draftState.secret = false;
        draftState.attachments = [];
      }),
  },
  initialState,
);

export default reducer;
