import axios from 'axios';
import authHeader from './authHeader';

const { REACT_APP_API_BASE_URL } = process.env;

axios.defaults.baseURL = REACT_APP_API_BASE_URL;
axios.defaults.withCredentials = true;

export const get = (url, options = {}) => {
  const req = axios.get(url, options);
  return req;
};

export const post = (url, data = {}, options = {}) => {
  const req = axios.post(url, data, options);
  return req;
};

export const getWithAuth = async (url, options = {}) => {
  console.log(`get with auth ${new Date()}`);
  try {
    const result = await axios.get(url, {
      headers: { ...authHeader },
      ...options,
    });

    return result.data;
  } catch (err) {
    return undefined;
  }
};

export const postWithAuth = (url, data = {}, options = {}) => {
  const req = axios.post(url, data, {
    headers: { ...authHeader },
    ...options,
  });
  return req;
};

export const deleteWithAuth = (url, options = {}) => {
  const req = axios.delete(url, {
    headers: { ...authHeader },
    ...options,
  });
  return req;
};
