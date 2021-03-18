import { getWithAuth, post } from '.';
import { authUser } from './auth';

export const getAllUsers = () => getWithAuth('users/');

export const postNewUser = async (data) => {
  const { username, password, email, name, profileImage, enteredAt, birthday, phone, rank } = data;
  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);
  formData.append('email', email);
  formData.append('name', name);
  if (profileImage) formData.append('profile_image', profileImage);
  formData.append('entered_at', enteredAt);
  formData.append('birthday', birthday);
  formData.append('phone', phone);
  if (rank) formData.append('rank', rank);

  const result = await post('users/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  if (result) await authUser(username, password);

  return result;
};
