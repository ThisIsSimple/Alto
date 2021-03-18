import jwt_decode from 'jwt-decode';
import { post } from '.';

export const getToken = () => localStorage.getItem('_token');

export const refreshToken = async () => {
  const token = getToken();
  const result = await post('api-token-refresh/', {
    token,
  });

  return result;
};

export const verifyToken = async (token) => {
  const result = await post('api-token-verify/', {
    token,
  });
  return result;
};

export const authUser = async (username, password) => {
  localStorage.removeItem('_token');
  localStorage.removeItem('userInfo');

  const result = await post('api-token-auth/', {
    username,
    password,
  });

  if (result) {
    const { token } = result;
    localStorage.setItem('_token', token);

    const user = jwt_decode(token);
    const convertedUser = {
      ...user,
      userId: user.user_id,
      profileImage: user.profile_image,
    };
    localStorage.setItem('userInfo', JSON.stringify(convertedUser));

    return true;
  }

  return false;
};

export const logoutUser = () => {
  localStorage.removeItem('_token');
  localStorage.removeItem('userInfo');
};

export const getUser = () => {
  const token = getToken();
  return JSON.parse(localStorage.getItem('userInfo'));
};
