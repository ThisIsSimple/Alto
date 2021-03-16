import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal as ResponsiveModal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import * as styles from './Modal.module.scss';
import { closeModal } from '../../../reducers/modal';

const Modal = ({ className = '' }) => {
  const dispatch = useDispatch();

  const modalOpen = useSelector(({ modalReducer }) => modalReducer.modalOpen);
  const modalContent = useSelector(({ modalReducer }) => modalReducer.modalContent);

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <ResponsiveModal
      open={modalOpen}
      onClose={handleClose}
      center
      classNames={{
        overlay: 'customOverlay',
        modal: `${className} ${styles.modal}`,
      }}
    >
      {modalContent}
    </ResponsiveModal>
  );
};

Modal.propTypes = {
  className: PropTypes.string,
};

export default Modal;
