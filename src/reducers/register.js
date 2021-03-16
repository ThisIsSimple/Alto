import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_USERNAME_INPUT = 'register/CHANGE_USERNAME_INPUT';
const CHANGE_PASSWORD_INPUT = 'register/CHANGE_PASSWORD_INPUT';
const CHANGE_EMAIL_INPUT = 'resiger/CHANGE_EMAIL_INPUT';
const CHANGE_NAME_INPUT = 'register/CHANGE_NAME_INPUT';
const CHANGE_NICKNAME_INPUT = 'register/CHANGE_NICKNAME_INPUT';
const CHANGE_PROFILE_INPUT = 'register/CHANGE_PROFILE_INPUT';
const SELECT_PROFILE_IMAGE = 'register/SELECT_PROFILE_IMAGE';
const CHANGE_PHONE_INPUT = 'register/CHANGE_PHONE_INPUT';
const CHANGE_ENTERED_AT_INPUT = 'register/CHANGE_ENGETERD_AT_INPUT';
const SELECT_RANK = 'register/SELECT_RANK';
const SELECT_DEPARTMENT = 'register/SELECT_DEPARTMENT';

export const changeUsernameInput = createAction(CHANGE_USERNAME_INPUT);
export const changePasswortInput = createAction(CHANGE_PASSWORD_INPUT);
export const changeEmailInput = createAction(CHANGE_EMAIL_INPUT);
export const changeNameInput = createAction(CHANGE_NAME_INPUT);
export const changeNicknameInput = createAction(CHANGE_NICKNAME_INPUT);
export const changeProfileInput = createAction(CHANGE_PROFILE_INPUT);
export const selectProfileImage = createAction(SELECT_PROFILE_IMAGE);
export const changePhoneInput = createAction(CHANGE_PHONE_INPUT);
export const changeEnteredAtInput = createAction(CHANGE_ENTERED_AT_INPUT);
export const selectRank = createAction(SELECT_RANK);
export const selectDepartment = createAction(SELECT_DEPARTMENT);

const initialState = {
  username: '',
  password: '',
  email: '',
  name: '',
  nickname: '',
  profile: '',
  profileImage: '',
  phone: '',
  enteredAt: undefined,
  rankID: -1,
  departmentID: -1,
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
    [CHANGE_EMAIL_INPUT]: (state, actions) =>
      produce(state, (draftState) => {
        draftState.email = actions.payload;
      }),
    [CHANGE_NAME_INPUT]: (state, actions) =>
      produce(state, (draftState) => {
        draftState.name = actions.payload;
      }),
    [CHANGE_NICKNAME_INPUT]: (state, actions) =>
      produce(state, (draftState) => {
        draftState.nickname = actions.payload;
      }),
    [CHANGE_PROFILE_INPUT]: (state, actions) =>
      produce(state, (draftState) => {
        draftState.profile = actions.payload;
      }),
    [SELECT_PROFILE_IMAGE]: (state, actions) =>
      produce(state, (draftState) => {
        draftState.profileImage = actions.payload;
      }),
    [CHANGE_PHONE_INPUT]: (state, actions) =>
      produce(state, (draftState) => {
        draftState.phone = actions.payload;
      }),
    [CHANGE_ENTERED_AT_INPUT]: (state, actions) =>
      produce(state, (draftState) => {
        draftState.enteredAt = actions.payload;
      }),
    [SELECT_DEPARTMENT]: (state, actions) =>
      produce(state, (draftState) => {
        draftState.departmentID = actions.payload;
      }),
    [SELECT_RANK]: (state, actions) =>
      produce(state, (draftState) => {
        draftState.rankID = actions.payload;
      }),
  },
  initialState,
);

export default reducer;
