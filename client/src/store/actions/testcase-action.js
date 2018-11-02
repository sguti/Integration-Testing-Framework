import {
  ADD_TEST_CASE,
  EDIT_TEST_CASE_NAME,
  REMOVE_TEST_CASE,
  RUN_ALL_TEST_CASES,
  RUN_TEST_CASE,
  RUN_TEST_CASE_COMPLETE,
  SAVE_TEST_CASE_NAME
} from "../action-types/testcase-action.type";

export function addTestCase(payload) {
  return {
    type: ADD_TEST_CASE,
    payload
  };
}

export function removeTestCase(payload) {
  return {
    type: REMOVE_TEST_CASE,
    payload
  };
}
export function editTestCaseName(payload) {
  return {
    type: EDIT_TEST_CASE_NAME,
    payload
  };
}

export function saveTestCaseName(payload) {
  return {
    type: SAVE_TEST_CASE_NAME,
    payload
  };
}

export function runTestCase(payload) {
  return (dispatch, getState) => {
    dispatch({
      type: RUN_TEST_CASE,
      payload
    });
    return new Promise(resolve => {
      setTimeout(() => {
        const folder = getState().sidenav.folders.find(
          folder => folder.id === payload.folderId
        );
        const testCase = folder.testCases.find(
          testCase => testCase.id === payload.testCaseId
        );
        resolve();
        dispatch({
          type: RUN_TEST_CASE_COMPLETE,
          payload: {
            ...payload,
            response: testCase.steps.map(step => ({
              stepId: step.id,
              pass: true,
              startTime: +Date.now(),
              endTime: +Date.now(),
              image: step.featureId == 3 && "/sample.png"
            }))
          }
        });
      }, 2000);
    });
  };
}
