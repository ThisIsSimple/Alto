import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import useSWR from 'swr';
import { format } from 'date-fns';
import Button from '../utils/Button';
import ProfileImage from '../utils/ProfileImage';
import PriorityBadge from '../utils/PriorityBadge';
import StatusBadge from '../utils/StatusBadge';
import SecretBadge from '../utils/SecretBadge';
import TaskDate from '../TaskDate';
import DisplayContent from '../DisplayContent';
import ReportWriter from '../ReportWriter';
import DisplayAttachment from '../DisplayAttachment';
import ModalDivider from '../utils/ModalDivider';
import { getTaskAttachments } from '../../services/task';
import { getReport, getReportAttachments } from '../../services/report';
import DateFormat from '../utils/DateFormat';

const DisplayReport = ({ progressId }) => {
  const { data: report, error: reportError } = useSWR(`task_progresses/${progressId}/report/`, () =>
    getReport(progressId),
  );
  const { data: reportAttachments, error: reportAttachmentsError } = useSWR(
    `reports/${progressId}`,
    () => getReportAttachments(report.id),
  );

  return (
    <>
      <div className="max-w-7xl px-0 md:px-2 lg:px-6 py-3 md:py-6 w-full">
        <header className="mb-5">
          <h3 className="text-2xl font-bold mb-2">{report?.report_name}</h3>
          <span className="text-gray-500">
            {format(new Date(report?.created_at), 'yyyy-MM-dd HH:mm:ss') ===
            format(new Date(report?.updated_at), 'yyyy-MM-dd HH:mm:ss') ? (
              <>
                <DateFormat date={report?.created_at} format="yyyy-MM-dd HH:mm:s" /> 최초 작성
              </>
            ) : (
              <>
                <DateFormat date={report?.updated_at} format="yyyy-MM-dd HH:mm:s" /> 최종 수정
              </>
            )}
          </span>
        </header>
      </div>

      <DisplayContent content={report?.report_content} />

      {reportAttachments && <DisplayAttachment attachments={reportAttachments} />}
    </>
  );
};

DisplayReport.propTypes = {
  progressId: PropTypes.number.isRequired,
};

export default DisplayReport;
