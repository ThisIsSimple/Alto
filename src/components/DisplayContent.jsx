import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const DisplayContent = ({ content }) => (
  <>
    {content
      .replaceAll(
        /(http[s]?|ftp):\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[-a-zA-Z0-9/_?#%~=]+/g,
        (url) =>
          `<a style="color: #6366f2;" href="${url}" target="_blank" rel="noreferrer">${url}</a>`,
      )
      .split('\n')
      .map((line, index) => (
        <div key={`${line}-${index + 10}`}>
          {ReactHtmlParser(line)}
          <br />
        </div>
      ))}
  </>
);

DisplayContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default DisplayContent;
