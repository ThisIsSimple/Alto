import { getWithAuth, postWithAuth, deleteWithAuth } from '.';
import authHeader from './authHeader';

// export const getAllTasks = () => getWithAuth('tasks/');

// export const getAllTaskProgesses = () => getWithAuth('tasks/');

// export const getUserReceivedTasks = (userId) => getWithAuth(`users/${userId}/tasks/received/`);

// export const getUserOrderedTasks = (userId) => getWithAuth(`users/${userId}/tasks/ordered/`);

// export const getUserOwnTasks = (userId) => getWithAuth(`users/${userId}/tasks/own/`);

// export const getReportAttachments = (progressId) => getWithAuth(`tasks/${taskId}/attachments/`);

export const getReport = async (progressId) => {
  const reports = await getWithAuth(`task_progresses/${progressId}/report/`);
  if (reports.length !== 0) return reports[0];
  return undefined;
};

export const getReportAttachments = (reportId) => getWithAuth(`reports/${reportId}/attachments/`);

export const postNewReport = async (data) => {
  const newReport = await postWithAuth('reports/', {
    ...data,
    task_progress: data.progressId,
  });

  if (newReport) {
    const reportId = newReport.id;

    const attachmentPromiseList = [];
    data.attachments.map((value) => {
      const formData = new FormData();
      formData.append('attachment_name', value.name);
      formData.append('attachment_type', value.type);
      formData.append('attachment_file', value);
      formData.append('uploader', data.report_writer);
      formData.append('parent_type', 'report');
      formData.append('parent', reportId);

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
      ...newReport,
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
