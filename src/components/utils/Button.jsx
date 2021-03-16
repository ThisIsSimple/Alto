import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, color, type, onClick, style, className }) => (
  <button
    type={type}
    className={`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-${color}-600 hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500 ${className}`}
    onClick={onClick}
    style={style}
  >
    {text}
  </button>
);

Button.defaultProps = {
  color: 'indigo',
  type: 'button',
  onClick: () => {},
  style: {},
  className: '',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  type: PropTypes.string,
  onClick: () => {},
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Button;
