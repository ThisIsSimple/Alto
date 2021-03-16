import jwt_decode from 'jwt-decode';
import { post } from '.';

export const getToken = () => localStorage.getItem('_token');

export const refreshToken = () => {
  const token = getToken();
  return post('api-token-refresh/', {
    token,
  });
};

export const verifyToken = (token) =>
  post('api-token-verify/', {
    token,
  });

export const authUser = async (username, password) => {
  try {
    localStorage.removeItem('userInfo');

    const result = await post('api-token-auth/', {
      username,
      password,
    });

    const { token } = result.data;
    localStorage.setItem('_token', token);

    const user = jwt_decode(token);
    const convertedUser = {
      ...user,
      userId: user.user_id,
      profileImage: user.profile_image,
    };
    localStorage.setItem('userInfo', JSON.stringify(convertedUser));

    return {
      success: true,
      token,
    };
  } catch (err) {
    let message = '';
    if (err.response && 'non_field_errors' in err.response.data) {
      message = '입력한 회원정보가 올바르지 않습니다.';
    } else {
      message = err.response
        ? JSON.stringify(err.response.data)
        : '알 수 없는 오류가 발생했습니다.';
    }
    return {
      success: false,
      message,
    };
  }
};

export const logoutUser = () => {
  localStorage.removeItem('_token');
  localStorage.removeItem('userInfo');
};

export const getUser = () => {
  const token = getToken();
  return JSON.parse(localStorage.getItem('userInfo'));
};
