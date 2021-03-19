import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  type,
  className,
  style,
  placeholder,
  value,
  defaultValue,
  required,
  accept,
  onChange,
}) => (
  <>
    <input
      className={`border border-gray-300 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-500 ${className}`}
      style={style}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      required={required}
      accept={accept}
    />
  </>
);

Input.defaultProps = {
  type: 'text',
  className: '',
  style: {},
  placeholder: '',
  value: undefined,
  defaultValue: undefined,
  required: false,
  accept: '',
  onChange: () => {},
};

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  required: PropTypes.bool,
  accept: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
