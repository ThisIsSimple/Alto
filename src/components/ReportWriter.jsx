import React from 'react';
import PropTypes from 'prop-types';
import Textarea from './utils/Textarea';
import Button from './utils/Button';
import Editor from './utils/Editor';

const ReportWriter = ({ taskId }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 w-full">
        <header className="mb-10">
          <h3 className="text-2xl font-bold">업무 보고</h3>
        </header>

        <div className="flex flex-col justify-center">
          <form onSubmit={handleSubmit}>
            <Textarea className="w-full mb-4" placeholder="보고 내용" />
            {/* <Editor /> */}

            <div className="flex justify-end">
              <Button text="보고하기" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

ReportWriter.propTypes = {
  taskId: PropTypes.number.isRequired,
};

export default ReportWriter;
