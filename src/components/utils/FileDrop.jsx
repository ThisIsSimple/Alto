import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FileDrop as ReactFileDrop } from 'react-file-drop';

const FileDrop = ({ className, attachments, onDrop, onDelete, onSelect }) => {
  const [onOver, setOnOver] = useState(false);

  // const handleFileDrop = (files, e) => {
  //   // console.log(files);

  //   setOnOver(false);

  //   // const fileList = [];
  //   // for (let i = 0; i < files.length; i += 1) {
  //   //   fileList.push(files[i]);
  //   // }
  //   // dispatch(changeAttachments(attachments.concat(fileList)));
  //   const fileList = new Set(attachments.concat([...files]));
  //   console.log(attachments);
  //   console.log(fileList);
  //   dispatch(changeAttachments([...fileList]));
  // };

  // const handleFileDelete = (fileName) => {
  //   dispatch(changeAttachments(attachments.filter((file) => file.name !== fileName)));
  // };

  return (
    <div
      className={`w-full mb-4 border-2 border-dashed text-gray-500 border-gray-300 py-5 px-4 rounded-lg ${
        onOver && 'outline-none ring-2 ring-offset-2 ring-offset-white ring-indigo-500'
      } ${className}`}
    >
      <ReactFileDrop
        // onFrameDragEnter={(e) => conso}
        // onFrameDragLeave={(e) => conso}
        // onFrameDrop={(e) => }
        onDragOver={(e) => setOnOver(true)}
        onDragLeave={(e) => setOnOver(false)}
        onDrop={(files) => {
          setOnOver(false);
          onDrop(files);
        }}
      >
        {attachments.length !== 0 ? (
          <>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-3">첨부파일 목록</h3>
              {attachments.map((file) => (
                <div key={file.name} className="flex items-center">
                  <p className="m-0 mr-2">{file.name}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 cursor-pointer"
                    onClick={() => onDelete(file)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="w-full flex flex-col py-7 px-3 rounded-lg transition-all">
              <div className="w-10 m-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
              <h3 className="text-lg self-center font-semibold">파일 업로드</h3>
              <p className="text-center">
                파일을 이곳에 드래그 혹은{' '}
                <label htmlFor="file-input" className="text-indigo-500 cursor-pointer">
                  클릭해서 선택
                  <input
                    id="file-input"
                    type="file"
                    className="hidden"
                    multiple
                    onChange={(e) => onSelect(e.currentTarget.files)}
                  />
                </label>
              </p>
            </div>
          </>
        )}
      </ReactFileDrop>
    </div>
  );
};

FileDrop.defaultProps = {
  attachments: [],
  onDrop: () => {},
  onDelete: () => {},
  onSelect: () => {},
  className: '',
};

FileDrop.propTypes = {
  attachments: PropTypes.array,
  onDrop: PropTypes.func,
  onDelete: PropTypes.func,
  onSelect: PropTypes.func,
  className: PropTypes.string,
};

export default FileDrop;
