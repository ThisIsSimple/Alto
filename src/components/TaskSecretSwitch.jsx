import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
import { useDispatch, useSelector } from 'react-redux';
import { changeSecret } from '../reducers/taskCreate';
import Tooltip from './utils/Tooltip';

const TaskSecretSwitch = ({ className }) => {
  const dispatch = useDispatch();

  const secret = useSelector(({ taskCreateReducer }) => taskCreateReducer.secret);

  return (
    <Tooltip message={`${secret ? '비밀업무' : '일반업무'}`} className="flex w-min mb-4">
      <Switch
        className={className}
        onChange={() => {
          dispatch(changeSecret(!secret));
        }}
        checked={secret}
        uncheckedIcon={<></>}
        checkedIcon={<></>}
        uncheckedHandleIcon={
          <div className="flex justify-center items-center h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-gray-500 w-5"
            >
              <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
            </svg>
          </div>
        }
        checkedHandleIcon={
          <div className="flex justify-center items-center h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-gray-500 w-5"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        }
      />
    </Tooltip>
  );
};

TaskSecretSwitch.defaultProps = {
  className: '',
};

TaskSecretSwitch.propTypes = {
  className: PropTypes.string,
};

export default TaskSecretSwitch;
