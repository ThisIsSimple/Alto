import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { getUser } from '../../services/auth';

class PrivateRoute extends React.Component {
  constructor() {
    super();
    const user = getUser();
    if (!user) {
      window.location.href = '/auth/login';
    }
  }

  render() {
    const { path, children } = this.props;
    return (
      <Route key={path} path={path} exact>
        {children}
      </Route>
    );
  }
}

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.instanceOf(React.ReactNode).isRequired,
};

export default PrivateRoute;
