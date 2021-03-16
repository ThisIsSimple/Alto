import React from 'react';
import PropTypes from 'prop-types';

const TaskDate = ({ startDate, endDate, detail }) => (
  <>
    {!startDate && !endDate
      ? '기한 없음'
      : endDate
      ? ` ${endDate} 까지`
      : startDate
      ? `${startDate} 부터 `
      : ''}
  </>
);

TaskDate.defaultProps = {
  startDate: undefined,
  endDate: undefined,
  detail: false,
};

TaskDate.propTypes = {
  startDate: PropTypes.instanceOf(new Date()),
  endDate: PropTypes.instanceOf(new Date()),
  detail: PropTypes.bool,
};

export default TaskDate;
