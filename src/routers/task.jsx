import React from 'react';
import TaskLayout from '../layouts/TaskLayout';
import Task from '../pages/tasks';

const TaskRouter = [
  {
    path: '/tasks',
    component: (
      <TaskLayout>
        <Task />
      </TaskLayout>
    ),
  },
  {
    path: '/tasks/:task_id',
    component: (
      <TaskLayout>
        <Task />
      </TaskLayout>
    ),
  },
];

export default TaskRouter;
