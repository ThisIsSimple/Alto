import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { mutate } from 'swr';
import { format } from 'date-fns';
import Button from '../components/utils/Button';
import Input from '../components/utils/Input';
import Textarea from '../components/utils/Textarea';
import PriorityBadge from '../components/utils/PriorityBadge';
import UserSelect from '../components/UserSelect';
import { getUser } from '../services/auth';
import { postNewTask } from '../services/task';
import TaskDateSelect from '../components/TaskDateSelect';
import FileDrop from '../components/utils/FileDrop';
import { changeSelectedUsers } from '../reducers/userSelect';
import { closeModal } from '../reducers/modal';
import {
  changeTaskName,
  changeDescription,
  changePriority,
  changeAttachments,
  resetTask,
} from '../reducers/taskCreate';
import TaskSecretSwitch from '../components/TaskSecretSwitch';

const TaskCreateModal = () => {
  const dispatch = useDispatch();

  const taskName = useSelector(({ taskCreateReducer }) => taskCreateReducer.taskName);
  const description = useSelector(({ taskCreateReducer }) => taskCreateReducer.description);
  const priority = useSelector(({ taskCreateReducer }) => taskCreateReducer.priority);
  const startDate = useSelector(({ taskCreateReducer }) => taskCreateReducer.startDate);
  const endDate = useSelector(({ taskCreateReducer }) => taskCreateReducer.endDate);
  const attachments = useSelector(({ taskCreateReducer }) => taskCreateReducer.attachments);

  const selectedUsers = useSelector(({ userSelectReducer }) => userSelectReducer.selectedUsers);

  const [ownerId, setOwnerId] = useState(-1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await postNewTask({
      task_name: taskName,
      description,
      priority,
      start_date: startDate ? format(startDate, 'yyyy-MM-dd') : undefined,
      end_date: startDate ? format(endDate, 'yyyy-MM-dd') : undefined,
      owner: ownerId,
      attachments,
      selectedUsers: selectedUsers.map((user) => user.value),
    });

    console.log(result);
    if (result) {
      dispatch(resetTask());
      dispatch(changeSelectedUsers([]));
      dispatch(closeModal());
      // mutate('users/');
    }
  };

  useEffect(() => {
    const user = getUser();
    setOwnerId(user.userId);
  }, []);

  return (
    <>
      <Helmet>
        <title>업무 생성</title>
      </Helmet>
      <div
        className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col"
        style={{ minHeight: 700 }}
      >
        <header className="mb-10">
          <h3 className="text-2xl font-bold">업무 생성</h3>
        </header>
        <form onSubmit={handleSubmit} className="flex flex-grow flex-col">
          <TaskSecretSwitch />

          <Input
            className="w-full mb-4"
            type="text"
            placeholder="업무 이름"
            value={taskName}
            onChange={(e) => dispatch(changeTaskName(e.currentTarget.value))}
            required
          />
          <div className="mb-4 z-10">
            <TaskDateSelect />
          </div>

          <Textarea
            className="w-full mb-4"
            placeholder="업무 내용"
            onChange={(e) => dispatch(changeDescription(e.currentTarget.value))}
            value={description}
            rows={7}
            required
          />

          <div className="flex mb-4">
            <PriorityBadge
              priority={1}
              className="shadow"
              tooltipClassName="mr-2"
              selected={priority === 1}
              onClick={() => dispatch(changePriority(1))}
            />
            <PriorityBadge
              priority={2}
              className="shadow"
              tooltipClassName="mr-2"
              selected={priority === 2}
              onClick={() => dispatch(changePriority(2))}
            />
            <PriorityBadge
              priority={3}
              className="shadow"
              tooltipClassName="mr-2"
              selected={priority === 3}
              onClick={() => dispatch(changePriority(3))}
            />
            <PriorityBadge
              priority={4}
              className="shadow"
              tooltipClassName="mr-2"
              selected={priority === 4}
              onClick={() => dispatch(changePriority(4))}
            />
            <PriorityBadge
              priority={5}
              className="shadow"
              tooltipClassName="mr-2"
              selected={priority === 5}
              onClick={() => dispatch(changePriority(5))}
            />
          </div>

          <UserSelect className="mb-4" />

          <FileDrop
            attachments={attachments}
            onDrop={(files) => {
              dispatch(changeAttachments(attachments.concat([...files])));
            }}
            onDelete={(file) => {
              dispatch(changeAttachments(attachments.filter((value) => value !== file)));
            }}
            onSelect={(files) => {
              dispatch(changeAttachments(attachments.concat([...files])));
            }}
          />

          <div className="flex-grow flex justify-center items-end">
            <Button type="submit" text="업무생성" />
          </div>
        </form>
      </div>
    </>
  );
};

export default TaskCreateModal;
