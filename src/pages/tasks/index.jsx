import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../services/auth';
import { getUserOwnTasks, getUserReceivedTasks } from '../../services/task';
import Task from '../../components/Task';
import styles from '../../styles/Task.module.scss';
import ProgressViewModal from '../../modals/ProgressViewModal';
import TaskViewModal from '../../modals/TaskViewModal';
import { openModal, changeModal } from '../../reducers/modal';
import Progress from '../../components/Progress';

const TaskIndex = () => {
  const dispatch = useDispatch();

  const user = getUser();
  const receivedTasks = useSWR(`tasks/${user.userId}/received/`, () =>
    getUserReceivedTasks(user.userId),
  );
  const ownTasks = useSWR(`tasks/${user.userId}/own/`, () => getUserOwnTasks(user.userId));

  const handleTaskClick = (taskData) => {
    const { task_name, description, priority, secret, start_date, end_date, progresses } = taskData;
    const taskId = taskData.id;
    dispatch(
      changeModal(
        <TaskViewModal
          key={taskId}
          taskName={task_name}
          secret={secret}
          description={description}
          priority={priority}
          startDate={start_date}
          endDate={end_date}
          taskId={taskId}
          progresses={progresses}
        />,
      ),
    );
    dispatch(openModal());
  };

  const handleProgressClick = (progressData) => {
    const { ordered_by, ordered_to, status } = progressData;
    const { task_name, description, priority, secret, start_date, end_date } = progressData.task;
    const progressId = progressData.id;
    const taskId = progressData.task.id;

    dispatch(
      changeModal(
        <ProgressViewModal
          key={progressId}
          progressId={progressId}
          taskName={task_name}
          secret={secret}
          description={description}
          priority={priority}
          startDate={start_date}
          endDate={end_date}
          orderedBy={ordered_by}
          orderedTo={ordered_to}
          status={status}
          taskId={taskId}
        />,
      ),
    );
    dispatch(openModal());
  };

  useEffect(() => {}, [user]);

  return (
    <>
      <Helmet>
        <title>업무 목록</title>
      </Helmet>
      <div className={`${styles.taskContainer} flex-grow overflow-x-scroll`}>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex whitespace-nowrap">
          <div className={styles.taskList}>
            <header
              className={`${styles.taskListHeader} bg-indigo-500 text-white relative shadow-lg px-5 py-3 flex transition-shadow`}
            >
              <h3 className="text-lg font-bold">오늘의 할 일</h3>
            </header>
            {receivedTasks.data &&
              receivedTasks.data.map((value) => {
                const { ordered_by, ordered_to, status } = value;
                const { task_name, secret, priority, start_date, end_date } = value.task;
                return (
                  <Progress
                    key={value.id}
                    progressId={value.id}
                    taskName={task_name}
                    secret={secret}
                    priority={priority}
                    startDate={start_date}
                    endDate={end_date}
                    orderedBy={ordered_by}
                    orderedTo={ordered_to}
                    status={status}
                    taskId={value.task.id}
                    onClick={() => handleProgressClick(value)}
                  />
                );
              })}
          </div>

          <div className={styles.taskList}>
            <header
              className={`${styles.taskListHeader} bg-indigo-500 text-white relative shadow-lg px-5 py-3 flex transition-shadow`}
            >
              <h3 className="text-lg font-bold">내가 지시한 업무</h3>
            </header>
            {ownTasks.data &&
              ownTasks.data.map((value) => {
                // const { ordered_by, ordered_to, status } = value;
                const { task_name, secret, priority, start_date, end_date } = value;
                return (
                  <Task
                    key={value.id}
                    taskName={task_name}
                    secret={secret}
                    priority={priority}
                    startDate={start_date}
                    endDate={end_date}
                    taskId={value.id}
                    progresses={value.progresses}
                    onClick={() => handleTaskClick(value)}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskIndex;
