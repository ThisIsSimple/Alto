import { getWithAuth, postWithAuth, deleteWithAuth } from '.';
import authHeader from './authHeader';

export const getAllTasks = () => getWithAuth('tasks/');

export const getAllTaskProgesses = () => getWithAuth('tasks/');

export const getUserReceivedTasks = (userId) => getWithAuth(`users/${userId}/tasks/received/`);

export const getUserOrderedTasks = (userId) => getWithAuth(`users/${userId}/tasks/ordered/`);

export const getUserOwnTasks = (userId) => getWithAuth(`users/${userId}/tasks/own/`);

export const getTaskAttachments = (taskId) => getWithAuth(`tasks/${taskId}/attachments/`);

export const postNewTask = async (data) => {
  const newTask = await postWithAuth('tasks/', {
    ...data,
  });

  if (newTask) {
    const taskId = newTask.id;

    const orderedToPromiseList = [];
    data.selectedUsers.map((value) =>
      orderedToPromiseList.push(
        postWithAuth('task_progresses/', {
          task: taskId,
          ordered_by: data.owner,
          ordered_to: value,
          status: 'unread',
        }),
      ),
    );

    const taskProgresses = await Promise.all(orderedToPromiseList);

    const attachmentPromiseList = [];
    data.attachments.map((value) => {
      const formData = new FormData();
      formData.append('attachment_name', value.name);
      formData.append('attachment_type', value.type);
      formData.append('attachment_file', value);
      formData.append('uploader', data.owner);
      formData.append('parent_type', 'task');
      formData.append('parent', taskId);

      return attachmentPromiseList.push(
        postWithAuth('attachments/', formData, {
          headers: {
            ...authHeader(),
            'Content-Type': 'multipart/form-data',
          },
        }).catch((err) => console.log(err.response)),
      );
    });

    const attachments = await Promise.all(attachmentPromiseList);

    return {
      ...newTask,
      progresses: taskProgresses,
      attachments,
    };
  }

  return false;
};

export const deleteTask = async (data) => {
  const { taskId, attachments } = data;
  const promiseList = [];

  attachments.map((attachment) =>
    promiseList.push(deleteWithAuth(`attachments/${attachment.id}/`)),
  );
  promiseList.push(deleteWithAuth(`tasks/${taskId}/`));

  await Promise.all(promiseList).catch((err) => {
    console.log(err.response);
    return { success: false, message: err.response };
  });

  return { success: true };
};
