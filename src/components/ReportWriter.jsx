import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Textarea from './utils/Textarea';
import Button from './utils/Button';
import FileDrop from './utils/FileDrop';
import Input from './utils/Input';
import { changeReportName, changeReportContent, changeAttachments } from '../reducers/reportCreate';
import { postNewReport } from '../services/report';

const ReportWriter = ({ progressId }) => {
  const dispatch = useDispatch();
  const reportName = useSelector(({ reportCreateReducer }) =>
    reportCreateReducer.reports.find((report) => report.id === progressId)
      ? reportCreateReducer.reports.find((report) => report.id === progressId).reportName
      : '',
  );
  const reportContent = useSelector(({ reportCreateReducer }) =>
    reportCreateReducer.reports.find((report) => report.id === progressId)
      ? reportCreateReducer.reports.find((report) => report.id === progressId).reportContent
      : '',
  );
  const attachments = useSelector(({ reportCreateReducer }) =>
    reportCreateReducer.reports.find((report) => report.id === progressId)
      ? reportCreateReducer.reports.find((report) => report.id === progressId).attachments
      : [],
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await postNewReport({
      progressId,
      report_name: reportName,
      report_content: reportContent,
      attachments,
    });

    console.log(result);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 w-full">
        <header className="mb-10">
          <h3 className="text-2xl font-bold">업무 보고</h3>
        </header>

        <div className="flex flex-col justify-center">
          <form onSubmit={handleSubmit}>
            <Input
              className="w-full mb-4"
              placeholder="보고 제목"
              value={reportName}
              onChange={(e) => {
                dispatch(
                  changeReportName({
                    id: progressId,
                    reportName: e.currentTarget.value,
                  }),
                );
              }}
              required
            />

            <Textarea
              className="w-full mb-4"
              placeholder="보고 내용"
              value={reportContent}
              onChange={(e) => {
                dispatch(
                  changeReportContent({
                    id: progressId,
                    reportContent: e.currentTarget.value,
                  }),
                );
              }}
              rows={8}
              required
            />

            <FileDrop
              attachments={attachments}
              onDrop={(files) => {
                console.log(files);
                // const newFiles = [...files].filter((file) => !attachments.find(file));
                // dispatch(changeAttachments(attachments.concat(newFiles)));
                dispatch(
                  changeAttachments({
                    id: progressId,
                    attachments: attachments.concat([...files]),
                  }),
                );
              }}
              onDelete={(file) => {
                dispatch(
                  changeAttachments({
                    id: progressId,
                    attachments: attachments.filter((value) => value !== file),
                  }),
                );
              }}
              onSelect={(files) => {
                dispatch(
                  changeAttachments({
                    id: progressId,
                    attachments: attachments.concat([...files]),
                  }),
                );
              }}
            />

            <div className="flex justify-end">
              <Button type="submit" text="보고하기" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

ReportWriter.propTypes = {
  progressId: PropTypes.number.isRequired,
};

export default ReportWriter;
