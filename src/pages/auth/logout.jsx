import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { logoutUser } from '../../services/auth';

const AuthLogout = () => {
  const history = useHistory();

  useEffect(() => {
    logoutUser();
    history.replace('/auth/login');
  }, []);

  return (
    <>
      <Helmet>
        <title>Alto: Logout</title>
      </Helmet>
    </>
  );
};

export default AuthLogout;
