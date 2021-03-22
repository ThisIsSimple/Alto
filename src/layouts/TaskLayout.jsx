import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import Layout from './Layout';
import * as styles from '../styles/Task.module.scss';
import FloatButton from '../components/utils/FloatButton';
import TaskCreateModal from '../modals/TaskCreateModal';
import { openModal, changeModal } from '../reducers/modal';

const TaskLayout = ({ children }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeModal(<TaskCreateModal />));
    dispatch(openModal());
  };
  return (
    <>
      <Layout>
        <Header />
        <div className={`${styles.taskContainer} flex-grow overflow-x-scroll`}>
          <div className="p-3 flex whitespace-nowrap">{children}</div>
        </div>
        <FloatButton onClick={handleClick} />
      </Layout>
    </>
  );
};

TaskLayout.propTypes = {
  children: PropTypes.instanceOf(React.ReactNode).isRequired,
};

export default TaskLayout;
