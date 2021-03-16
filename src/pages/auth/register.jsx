import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageCreator from '../../components/utils/ImageCreator';
import * as actions from '../../reducers/register';

const AuthRegister = () => {
  const dispatch = useDispatch();

  const username = useSelector(({ registerReducer }) => registerReducer.username);
  const password = useSelector(({ registerReducer }) => registerReducer.password);
  const email = useSelector(({ registerReducer }) => registerReducer.email);
  const name = useSelector(({ registerReducer }) => registerReducer.name);
  const nickname = useSelector(({ registerReducer }) => registerReducer.nickname);
  const profile = useSelector(({ registerReducer }) => registerReducer.profile);
  const profileImage = useSelector(({ registerReducer }) => registerReducer.profileImage);
  const phone = useSelector(({ registerReducer }) => registerReducer.phone);
  const enteredAt = useSelector(({ registerReducer }) => registerReducer.enteredAt);
  const rankID = useSelector(({ registerReducer }) => registerReducer.rankID);

  const handleUsername = (e) => {
    dispatch(actions.changeUsernameInput(e.currentTarget.value));
  };

  const handlePassword = (e) => {
    dispatch(actions.changePasswortInput(e.currentTarget.value));
  };

  const handleEmail = (e) => {
    dispatch(actions.changeEmailInput(e.currentTarget.value));
  };

  const handleName = (e) => {
    dispatch(actions.changeNameInput(e.currentTarget.value));
  };

  const handleNickname = (e) => {
    dispatch(actions.changeNicknameInput(e.currentTarget.value));
  };

  const handleProfile = (e) => {
    dispatch(actions.changeProfileInput(e.currentTarget.value));
  };

  const handleProfileImage = (e) => {
    dispatch(actions.selectProfileImage(e.currentTarget.value));
  };

  const handlePhone = (e) => {
    dispatch(actions.changePhoneInput(e.currentTarget.value));
  };

  const handleEnteredAt = (e) => {
    dispatch(actions.changeEnteredAtInput(e.currentTarget.value));
  };

  const handleRank = (e) => {
    dispatch(actions.selectRank(e.currentTarget.value));
  };

  return (
    <>
      <ImageCreator />
      <input type="text" onChange={handleUsername} placeholder="asdf" />
    </>
  );
};

export default AuthRegister;
