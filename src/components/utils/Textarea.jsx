import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  className,
  style,
  placeholder,
  value,
  defaultValue,
  rows,
  onChange = () => {},
}) => (
  <>
    <textarea
      className={`${className} border border-gray-300 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-500`}
      style={style}
      type="text"
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      rows={rows}
    />
  </>
);

Input.defaultProps = {
  className: '',
  style: {},
  placeholder: '',
  value: undefined,
  defaultValue: undefined,
  rows: 5,
  onChange: () => {},
};

Input.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  rows: PropTypes.number,
  onChange: () => {},
};

export default Input;
