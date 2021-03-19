import axios from 'axios';
import { toast } from 'react-toastify';
import authHeader from './authHeader';

const { REACT_APP_API_BASE_URL } = process.env;

axios.defaults.baseURL = REACT_APP_API_BASE_URL;
axios.defaults.withCredentials = true;

const toastError = (err) => {
  Object.keys(err.response.data).map((errorCode) =>
    toast.error(JSON.stringify(err.response.data[errorCode])),
  );
};

export const get = async (url, options = {}) => {
  try {
    const req = await axios.get(url, options);
    return req.data;
  } catch (err) {
    toastError(err);
    return undefined;
  }
};

export const post = async (url, data = {}, options = {}) => {
  try {
    const req = await axios.post(url, data, {
      ...options,
    });
    return req.data;
  } catch (err) {
    toastError(err);
    return undefined;
  }
};

export const getWithAuth = async (url, options = {}) => {
  try {
    const result = await axios.get(url, {
      headers: { ...authHeader() },
      ...options,
    });

    return result.data;
  } catch (err) {
    toastError(err);
    return undefined;
  }
};

export const postWithAuth = async (url, data = {}, options = {}) => {
  try {
    const result = await axios.post(url, data, {
      headers: { ...authHeader() },
      ...options,
    });
    return result.data;
  } catch (err) {
    toastError(err);
    return undefined;
  }
};

export const deleteWithAuth = async (url, options = {}) => {
  try {
    const result = await axios.delete(url, {
      headers: { ...authHeader() },
      ...options,
    });
    return result.data;
  } catch (err) {
    toastError(err);
    return undefined;
  }
};
