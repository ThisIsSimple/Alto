import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_REPORT_NAME = 'reportCreate/CHANGE_REPORT_NAME';
const CHANGE_REPORT_CONTENT = 'reportCreate/CHANGE_REPORT_CONTENT';
const CHANGE_ATTACHMENTS = 'reportCreate/CHANGE_ATTACHMENTS';

export const changeReportName = createAction(CHANGE_REPORT_NAME);
export const changeReportContent = createAction(CHANGE_REPORT_CONTENT);
export const changeAttachments = createAction(CHANGE_ATTACHMENTS);

const initialState = {
  reports: [],
};

const reducer = handleActions(
  {
    [CHANGE_REPORT_NAME]: (state, actions) =>
      produce(state, (draftState) => {
        const result = draftState.reports.find((report) => report.id === actions.payload.id);
        if (result) {
          draftState.reports = draftState.reports.map((report) => {
            if (report.id === actions.payload.id) {
              report.taskName = actions.payload.taskName;
            }
            return report;
          });
        } else {
          draftState.reports.push({
            id: actions.payload.id,
            taskName: actions.payload.taskName,
            taskContent: '',
            attachments: [],
          });
        }
      }),
    [CHANGE_REPORT_CONTENT]: (state, actions) =>
      produce(state, (draftState) => {
        const result = draftState.reports.find((report) => report.id === actions.payload.id);
        if (result) {
          draftState.reports = draftState.reports.map((report) => {
            if (report.id === actions.payload.id) {
              report.taskContent = actions.payload.taskContent;
            }
            return report;
          });
        } else {
          draftState.reports.push({
            id: actions.payload.id,
            taskName: '',
            taskContent: actions.payload.taskContent,
            attachments: [],
          });
        }
      }),
    [CHANGE_ATTACHMENTS]: (state, actions) =>
      produce(state, (draftState) => {
        const result = draftState.reports.find((report) => report.id === actions.payload.id);
        if (result) {
          draftState.reports = draftState.reports.map((report) => {
            if (report.id === actions.payload.id) {
              report.attachments = actions.payload.attachments;
            }
            return report;
          });
        } else {
          draftState.reports.push({
            id: actions.payload.id,
            taskName: '',
            taskContent: '',
            attachments: actions.payload.attachments,
          });
        }
      }),
  },
  initialState,
);

export default reducer;
