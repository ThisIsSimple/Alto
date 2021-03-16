import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import * as styles from '../styles/Auth.module.css';

const AuthLayout = ({ children }) => (
  <>
    <div className="flex min-h-screen justify-center items-center">
      <div className="w-30">{children}</div>
    </div>
  </>
);

AuthLayout.propTypes = {
  children: PropTypes.instanceOf(React.ReactNode).isRequired,
};

export default AuthLayout;
