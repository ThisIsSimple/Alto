import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../Tooltip';
import * as styles from '../../../styles/Badge.module.scss';

const PriorityBadge = ({
  priority,
  className,
  style,
  position,
  selected,
  onClick,
  tooltipClassName,
}) => {
  const messageList = ['중요하지 않음', '중요도 낮음', '중요도 보통', '중요도 높음', '중요도 긴급'];
  const colorList = ['bg-gray-500', 'bg-gray-600', 'bg-green-600', 'bg-yellow-500', 'bg-red-500'];

  return (
    <>
      <Tooltip message={messageList[priority - 1]} style={position} className={tooltipClassName}>
        <div
          role="button"
          className={`p-1 text-white rounded-full ${
            selected ? colorList[priority - 1] : 'bg-gray-300'
          } ${className}`}
          style={style}
          onClick={onClick}
        >
          <div className={styles.icon}>
            {(() => {
              switch (priority) {
                case 1:
                  return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  );
                case 2:
                  return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  );
                case 3:
                  return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  );
                case 4:
                  return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  );
                case 5:
                  return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                        clipRule="evenodd"
                      />
                    </svg>
                  );
                default:
                  return <div />;
              }
            })()}
          </div>
        </div>
      </Tooltip>
    </>
  );
};

PriorityBadge.defaultProps = {
  className: '',
  style: {},
  position: {},
  selected: true,
  onClick: () => {},
  tooltipClassName: '',
};

PriorityBadge.propTypes = {
  priority: PropTypes.number.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  position: PropTypes.object,
  selected: PropTypes.bool,
  onClick: () => {},
  tooltipClassName: PropTypes.string,
};

export default PriorityBadge;
