import React from 'react';
import PropTypes from 'prop-types';

const DateButton = ({ text, color, onClick, className, selected }) => (
  <button
    type="button"
    className={`mr-2 inline-flex items-center px-3 py-1 border border-transparent rounded-full shadow-sm text-sm font-medium text-white ${
      selected ? `bg-${color}-500 hover:bg-${color}-600` : `bg-gray-300`
    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500 ${className}`}
    onClick={onClick}
  >
    {text}
  </button>
);

DateButton.defaultProps = {
  color: 'indigo',
  onClick: () => {},
  selected: false,
  className: '',
};

DateButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: () => {},
  className: PropTypes.string,
  selected: PropTypes.bool,
};

export default DateButton;
