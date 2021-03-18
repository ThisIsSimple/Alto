import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ children, className, onChange, onSelect, defaultValue }) => {
  return (
    <select
      onChange={onChange}
      onSelect={onSelect}
      defaultValue={defaultValue}
      className={`border border-gray-300 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-500 ${className}`}
    >
      {children}
    </select>
  );
};

Select.defaultProps = {
  onSelect: () => {},
  onChange: () => {},
  className: '',
  defaultValue: '',
};

Select.propTypes = {
  children: PropTypes.instanceOf(React.ReactNode).isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  defaultValue: PropTypes.string,
};

export default Select;
