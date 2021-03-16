import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../components/utils/Modal';
import Header from '../components/Header';

const Layout = ({ children }) => (
  <>
    <div id="layout" className="min-h-screen flex flex-col">
      {children}
      <Modal />
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.instanceOf(React.ReactNode).isRequired,
};

export default Layout;
