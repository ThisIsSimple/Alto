import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

const DateFormat = ({ date, format: customFormat, className }) => (
  <span className={className}>{format(new Date(date), customFormat)}</span>
);

DateFormat.defaultProps = {
  date: undefined,
  format: 'yyyy-mm-dd',
  className: '',
};

DateFormat.propTypes = {
  date: PropTypes.instanceOf(new Date()),
  format: PropTypes.string,
  className: PropTypes.string,
};

export default DateFormat;
