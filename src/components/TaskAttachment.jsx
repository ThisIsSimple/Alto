import React from 'react';
import PropTypes from 'prop-types';

const TaskAttachment = ({ attachments, className }) => (
  <>
    <div className={className}>
      {attachments
        .filter((attachment) => attachment.attachment_type.match(/image\/[a-zA-Z]+/g))
        .map((image) => {
          const {
            attachment_name: attachmentName,
            attachment_type: attachmentType,
            attachment_file: attachmentFile,
            uploader,
            created_at,
            updated_at,
          } = image;

          return (
            <a key={attachmentName} href={attachmentFile} target="_blank" rel="noreferrer">
              <img
                src={attachmentFile}
                alt={attachmentName}
                className="rounded overflow-hidden mb-4"
              />
            </a>
          );
        })}

      {attachments
        .filter((attachment) => !attachment.attachment_type.match(/image\/[a-zA-Z]+/g))
        .map((file) => {
          const {
            attachment_name: attachmentName,
            attachment_type: attachmentType,
            attachment_file: attachmentFile,
            uploader,
            created_at,
            updated_at,
          } = file;

          return (
            <a key={attachmentName} href={attachmentFile} target="_blank" rel="noreferrer">
              <div className="flex justify-between items-center border rounded text-gray-800 hover:text-black p-3 mb-3">
                {attachmentName}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </a>
          );
        })}
    </div>
  </>
);

TaskAttachment.defaultProps = {
  attachments: [],
  className: '',
};

TaskAttachment.propTypes = {
  attachments: PropTypes.array,
  className: PropTypes.string,
};

export default TaskAttachment;