import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '../../styles/Util.module.scss';

const FloatButton = ({ onClick = () => {} }) => (
  <>
    <button
      type="button"
      onClick={onClick}
      className={`${styles.floatButton} z-50 fixed bg-indigo-500 p-1 rounded-full text-white shadow-lg transform scale-100 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-indigo-500 transition-transform`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="45">
        <path
          fillRule="evenodd"
          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </>
);

FloatButton.defaultProps = {
  onClick: () => {},
};

FloatButton.propTypes = {
  onClick: PropTypes.func,
};

export default FloatButton;
