import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';

const CHANGE_REPORT_NAME = 'reportCreate/CHANGE_REPORT_NAME';
const CHANGE_REPORT_CONTENT = 'reportCreate/CHANGE_REPORT_CONTENT';
const CHANGE_REPORT_WRITER = 'reportCreate/CHANGE_REPORT_WRITER';

export const changeReportName = createAction(CHANGE_REPORT_NAME);
export const changeReportContent = createAction(CHANGE_REPORT_CONTENT);
export const changeReportWriter = createAction(CHANGE_REPORT_WRITER);

const initialState = {

};

const reducer = handleActions({
  [CHANGE_REPORT_NAME]: (state, actions) => produce(state, (draftState) => {
    draftState.[actions.payload.id].reportName = actions.payload.reportName
  })
})