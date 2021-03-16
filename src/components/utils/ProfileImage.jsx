import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from './Tooltip';

const ProfileImage = ({ profileImage, name, rank, size, className, tooltipClassName }) => (
  <>
    {name ? (
      <Tooltip message={`${name} ${rank}`} className={tooltipClassName}>
        <img
          src={profileImage || '/static/images/profile_blank.jpg'}
          alt={`${name} ${rank}`}
          style={{
            width: size,
            height: size,
            objectFit: 'cover',
            borderRadius: size / 2,
          }}
          className={`flex ${className}`}
        />
      </Tooltip>
    ) : (
      <img
        src={profileImage || '/static/images/profile_blank.jpg'}
        alt="Profile"
        style={{
          width: size,
          height: size,
          objectFit: 'cover',
          borderRadius: size / 2,
        }}
        className={`flex ${className}`}
      />
    )}
  </>
);

ProfileImage.defaultProps = {
  profileImage: '/static/images/profile_blank.jpg',
  name: '',
  rank: '',
  size: 45,
  className: '',
  tooltipClassName: '',
};

ProfileImage.propTypes = {
  profileImage: PropTypes.string,
  name: PropTypes.string,
  rank: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
  tooltipClassName: PropTypes.string,
};

export default ProfileImage;
