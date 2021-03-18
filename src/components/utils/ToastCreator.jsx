import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { toastMessage } from '../../reducers/toast';

const ToastCreator = () => {
  const dispatch = useDispatch();
  const type = useSelector(({ toastReducer }) => toastReducer.type);
  const message = useSelector(({ toastReducer }) => toastReducer.message);

  useEffect(() => {
    toast.error('asdf');
  }, [message]);

  return (
    <>
      {type} {message}
    </>
  );
};

export default ToastCreator;
