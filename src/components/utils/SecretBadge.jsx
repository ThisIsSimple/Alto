import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from './Tooltip';
import * as styles from '../../styles/Badge.module.scss';

const SecretBadge = ({ className, secret, style, position, tooltipClassName }) =>
  secret && (
    <Tooltip message="비밀업무" style={position} className={tooltipClassName}>
      <div className={`p-1 text-white bg-gray-400 ${styles.badge} ${className}`} style={style}>
        <div className={styles.icon}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </Tooltip>
  );

SecretBadge.defaultProps = {
  className: '',
  secret: false,
  style: {},
  position: {},
  tooltipClassName: '',
};

SecretBadge.propTypes = {
  className: PropTypes.string,
  secret: PropTypes.bool,
  style: PropTypes.object,
  position: PropTypes.object,
  tooltipClassName: PropTypes.string,
};

export default SecretBadge;
