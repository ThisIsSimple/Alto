import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageGrid from './ImageGrid';

const DisplayAttachment = ({ attachments, className }) => {
  useEffect(() => {}, [attachments]);

  return (
    <>
      <div className={className}>
        <ImageGrid
          images={attachments
            .filter((attachment) => attachment.attachment_type.match(/image\/[a-zA-Z]+/g))
            .map((image) => image.attachment_file)}
          className="mb-4"
        />

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
};

DisplayAttachment.defaultProps = {
  attachments: [],
  className: '',
};

DisplayAttachment.propTypes = {
  attachments: PropTypes.array,
  className: PropTypes.string,
};

export default DisplayAttachment;
