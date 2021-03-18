import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import useSWR, { mutate } from 'swr';
import { useDispatch } from 'react-redux';
import Button from '../components/utils/Button';
import ProfileImage from '../components/utils/ProfileImage';
import PriorityBadge from '../components/utils/PriorityBadge';
import StatusBadge from '../components/utils/StatusBadge';
import SecretBadge from '../components/utils/SecretBadge';
import TaskDate from '../components/TaskDate';
import DisplayContent from '../components/DisplayContent';
import DisplayAttachment from '../components/DisplayAttachment';
import { getTaskAttachments, deleteTask } from '../services/task';
import { getUser } from '../services/auth';
import { closeModal } from '../reducers/modal';

const TaskViewModal = ({
  taskId,
  taskName,
  secret,
  description,
  priority,
  startDate,
  endDate,
  progresses,
}) => {
  const dispatch = useDispatch();
  const [countCompletedProgress, setCountCompletedProgress] = useState(0);
  const [taskStatus, setTaskStatus] = useState('uncompleted');
  const attachments = useSWR(`tasks/${taskId}/attachments/`, () => getTaskAttachments(taskId));

  const handleDelete = async () => {
    if (window.confirm('삭제하시겠습니까?'))
      if (attachments.data) {
        const result = await deleteTask({
          taskId,
          attachments: attachments.data,
        });

        if (result.success) {
          console.log('mutate');
          const user = getUser();
          mutate(`users/${user.userId}/tasks/received/`);
          mutate(`users/${user.userId}/tasks/ordered/`);
          mutate(`users/${user.userId}/tasks/own/`);
        }
        dispatch(closeModal());
      }
  };

  useEffect(() => {
    if (progresses.length !== 0) {
      progresses.map((progress) => {
        if (progress.status === 'completed') setCountCompletedProgress(countCompletedProgress + 1);
        return progress;
      });
    } else {
      setTaskStatus('error');
    }
  }, [progresses]);

  return (
    <>
      <Helmet>
        <title>{taskName}</title>
      </Helmet>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 w-full" style={{ minWidth: 350 }}>
        <header className="mb-5">
          <h3 className="text-3xl font-bold mb-2">{taskName}</h3>
          <span className="text-gray-500">
            <TaskDate startDate={startDate} endDate={endDate} detail />
          </span>
        </header>

        <div className="flex items-center mb-5">
          <PriorityBadge priority={priority} className="shadow" tooltipClassName="mr-2" />
          <StatusBadge status={taskStatus} className="shadow" tooltipClassName="mr-2" />
          <SecretBadge secret={secret} className="shadow" tooltipClassName="mr-2" />
        </div>

        <div className="border-t border-dashed border-gray-300 py-4 mb-5">
          <header className="mb-4">
            <h2 className="text-lg font-bold">업무 지시 흐름</h2>
          </header>
          {progresses.map((progress) => {
            const {
              ordered_to: orderedTo,
              ordered_by: orderedBy,
              status,
              created_at: createdAt,
            } = progress;
            return (
              <div
                key={`${orderedBy.id}-${orderedTo.id}-${createdAt}`}
                className="flex items-center mb-3"
              >
                <ProfileImage
                  profileImage={orderedBy.profile_image}
                  name={orderedBy.name ? orderedBy.name : ''}
                  rank={orderedBy.rank?.name ? orderedBy.rank.name : ''}
                  className="shadow"
                  tooltipClassName="mr-4"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 mr-4 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                <ProfileImage
                  profileImage={orderedTo.profile_image}
                  name={orderedTo.name ? orderedTo.name : ''}
                  rank={orderedTo.rank?.name ? orderedTo.rank.name : ''}
                  className="shadow"
                  tooltipClassName="mr-4"
                />
                <StatusBadge status={status} className="shadow" />
              </div>
            );
          })}
        </div>

        <div className="border-t border-dashed border-gray-300 py-4 mb-5">
          <header className="mb-4">
            <h2 className="text-lg font-bold">업무 내용</h2>
          </header>
          <DisplayContent content={description} />
        </div>

        {attachments.data && <DisplayAttachment attachments={attachments.data} />}

        {attachments.data && (
          <div className="flex justify-end">
            <Button text="삭제하기" onClick={handleDelete} color="red" />
          </div>
        )}
      </div>
    </>
  );
};

TaskViewModal.defaultProps = {
  progresses: [],
  startDate: undefined,
  endDate: undefined,
};

TaskViewModal.propTypes = {
  taskId: PropTypes.number.isRequired,
  taskName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  priority: PropTypes.number.isRequired,
  startDate: PropTypes.any,
  endDate: PropTypes.any,
  progresses: PropTypes.array,
};

export default TaskViewModal;
