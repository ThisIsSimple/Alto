import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import useSWR from 'swr';
import Button from '../components/utils/Button';
import ProfileImage from '../components/utils/ProfileImage';
import PriorityBadge from '../components/utils/PriorityBadge';
import StatusBadge from '../components/utils/StatusBadge';
import SecretBadge from '../components/utils/SecretBadge';
import TaskDate from '../components/TaskDate';
import DisplayContent from '../components/DisplayContent';
import ReportWriter from '../components/ReportWriter';
import DisplayAttachment from '../components/DisplayAttachment';
import { getTaskAttachments } from '../services/task';

const ProgressViewModal = ({
  progressId,
  orderedBy,
  orderedTo,
  secret,
  status,
  taskId,
  taskName,
  description,
  priority,
  startDate,
  endDate,
}) => {
  const [openReportWriter, setOpenReportWriter] = useState(false);
  const attachments = useSWR(`tasks/${taskId}/attachments/`, () => getTaskAttachments(taskId));

  return (
    <>
      <Helmet>
        <title>{taskName}</title>
      </Helmet>
      <div className="max-w-7xl px-0 md:px-2 lg:px-6 py-3 md:py-6 w-full" style={{ minWidth: 350 }}>
        <header className="mb-5">
          <h3 className="text-3xl font-bold mb-2">{taskName}</h3>
          <span className="text-gray-500">
            <TaskDate startDate={startDate} endDate={endDate} detail />
          </span>
        </header>

        <div className="flex items-center mb-5">
          <ProfileImage
            profileImage={orderedBy.profile_image}
            name={orderedBy.name ? orderedBy.name : ''}
            rank={orderedBy.rank?.name ? orderedBy.rank.name : ''}
            className="shadow"
            tooltipClassName="mr-4"
          />
          <PriorityBadge priority={priority} className="shadow" tooltipClassName="mr-2" />
          <StatusBadge status={status} className="shadow" tooltipClassName="mr-2" />
          <SecretBadge secret={secret} className="shadow" tooltipClassName="mr-2" />
        </div>

        <div className="border-t border-dashed border-gray-300 py-4 mb-5">
          {/* <header className="mb-4">
            <h2 className="text-lg font-bold">업무 내용</h2>
          </header> */}
          <DisplayContent content={description} />
        </div>

        {attachments.data && <DisplayAttachment attachments={attachments.data} />}

        {!openReportWriter && (
          <div className="flex justify-end">
            <Button text="보고하기" onClick={() => setOpenReportWriter(true)} />
          </div>
        )}
      </div>

      {openReportWriter && (
        <>
          <div className="border-b-4 border-dotted border-gray-300" />
          <ReportWriter progressId={progressId} />
        </>
      )}
    </>
  );
};

ProgressViewModal.defaultProps = {
  startDate: undefined,
  endDate: undefined,
};

ProgressViewModal.propTypes = {
  progressId: PropTypes.number.isRequired,
  orderedBy: PropTypes.object.isRequired,
  orderedTo: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired,
  taskId: PropTypes.number.isRequired,
  taskName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  priority: PropTypes.number.isRequired,
  startDate: PropTypes.any,
  endDate: PropTypes.any,
};

export default ProgressViewModal;
