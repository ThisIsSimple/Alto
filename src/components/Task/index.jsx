import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PriorityBadge from '../utils/PriorityBadge';
import StatusBadge from '../utils/StatusBadge';
import ProfileImage from '../utils/ProfileImage';
import SecretBadge from '../utils/SecretBadge';
import TaskDate from '../TaskDate';
import * as styles from '../../styles/Task.module.scss';

const Task = ({
  taskId,
  taskName,
  priority,
  startDate,
  endDate,
  progresses,
  onClick = () => {},
}) => {
  const [countCompletedProgress, setCountCompletedProgress] = useState(0);
  const [status, setStatus] = useState('uncompleted');

  useEffect(() => {
    progresses.map((progress) => {
      if (progress.status === 'completed') setCountCompletedProgress(countCompletedProgress + 1);
      return progress;
    });
    if (countCompletedProgress === progresses.length) setStatus('completed');
    if (progresses.length === 0) setStatus('error');
  }, [taskId]);

  return (
    <>
      <div
        className={`${styles.task} relative shadow-lg p-5 flex hover:shadow-2xl transition-shadow`}
        role="button"
        onClick={onClick}
      >
        {/* <ProfileImage
        profileImage={orderedBy.profile_image}
        name={orderedBy.name ? orderedBy.name : ''}
        rank={orderedBy.rank.name ? orderedBy.rank.name : ''}
        tooltipClassName="mr-4"
      /> */}
        <div className={styles.taskThumbnail}>
          <h1 className="text-lg font-bold overflow-ellipsis overflow-hidden">{taskName}</h1>
          <p className="text-sm text-gray-500">
            <TaskDate startDate={startDate} endDate={endDate} />
          </p>
        </div>
        <PriorityBadge
          priority={priority}
          className="shadow"
          position={{ position: 'absolute', bottom: -16, right: 64 }}
        />
        <StatusBadge
          status={status}
          className="shadow"
          position={{ position: 'absolute', bottom: -16, right: 24 }}
        />
        {/* <StatusBadge status="unread" className="shadow" position={{ bottom: -48, right: 24 }} />
      <StatusBadge status="working" className="shadow" position={{ bottom: -80, right: 24 }} />
      <StatusBadge status="reported" className="shadow" position={{ bottom: -112, right: 24 }} />
      <StatusBadge status="pending" className="shadow" position={{ bottom: -144, right: 24 }} />
      <StatusBadge status="rejected" className="shadow" position={{ bottom: -176, right: 24 }} />
      <StatusBadge status="completed" className="shadow" position={{ bottom: -208, right: 24 }} />
      <StatusBadge status="canceled" className="shadow" position={{ bottom: -240, right: 24 }} /> */}
      </div>
    </>
  );
};

Task.defaultProps = {
  startDate: undefined,
  endDate: undefined,
  progresses: [],
  onClick: () => {},
};

Task.propTypes = {
  taskId: PropTypes.number.isRequired,
  taskName: PropTypes.string.isRequired,
  priority: PropTypes.number.isRequired,
  startDate: PropTypes.instanceOf(new Date()),
  endDate: PropTypes.instanceOf(new Date()),
  progresses: PropTypes.array,
  onClick: () => {},
};

export default Task;
