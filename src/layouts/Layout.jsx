import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../components/utils/Modal';
import SideLayout from './SideLayout';

const Layout = ({ children }) => (
  <>
    <div id="layout" className="w-screen h-screen flex">
      <SideLayout />
      <div className="main-content min-h-screen flex-1 flex flex-col">{children}</div>
      <Modal />
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.instanceOf(React.ReactNode).isRequired,
};

export default Layout;
