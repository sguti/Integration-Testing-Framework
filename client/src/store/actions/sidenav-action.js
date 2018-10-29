import {
  ADD_NEW_SIDENAV_FOLDER,
  REMOVE_SIDENAV_FOLDER,
  ADD_TEST_CASE,
  FOLDER_ICON_CLICK,
  REMOVE_TEST_CASE,
  SELECT_FOLDER,
  SELECT_TEST_CASE,
  ADD_TEST_CASE_STEP,
  REMOVE_TEST_CASE_STEP,
  EDIT_TEST_CASE_STEP,
  UPDATE_TEST_CASE_STEP,
  EDIT_TEST_CASE_NAME,
  EDIT_FOLDER_NAME,
  EDIT_TEST_CASE_STEP_NAME,
  SAVE_TEST_CASE_NAME,
  SAVE_FOLDER_NAME,
  SAVE_TEST_CASE_STEP_NAME,
  RUN_TEST_CASE,
  RUN_TEST_CASE_COMPLETE
} from "../action-types/sidenav-action.type";

export function addNewSidenavFolder(payload) {
  return {
    type: ADD_NEW_SIDENAV_FOLDER,
    payload
  };
}

export function removeSidenavFolder(payload) {
  return {
    type: REMOVE_SIDENAV_FOLDER,
    payload
  };
}

export function addTestCase(payload) {
  return {
    type: ADD_TEST_CASE,
    payload
  };
}

export function folderIconClick(payload) {
  return {
    type: FOLDER_ICON_CLICK,
    payload
  };
}

export function removeTestCase(payload) {
  return {
    type: REMOVE_TEST_CASE,
    payload
  };
}

export function selectTestCase(payload) {
  return {
    type: SELECT_TEST_CASE,
    payload
  };
}

export function selectFolder(payload) {
  return {
    type: SELECT_FOLDER,
    payload
  };
}

export function addTestCaseStep(payload) {
  return {
    type: ADD_TEST_CASE_STEP,
    payload
  };
}

export function removeTestCaseStep(payload) {
  return {
    type: REMOVE_TEST_CASE_STEP,
    payload
  };
}

export function editTestCaseStep(payload) {
  return {
    type: EDIT_TEST_CASE_STEP,
    payload
  };
}

export function updateTestCaseStep(payload) {
  return {
    type: UPDATE_TEST_CASE_STEP,
    payload
  };
}

export function editTestCaseName(payload) {
  return {
    type: EDIT_TEST_CASE_NAME,
    payload
  };
}

export function editFolderName(payload) {
  return {
    type: EDIT_FOLDER_NAME,
    payload
  };
}

export function editTestCaseStepName(payload) {
  return {
    type: EDIT_TEST_CASE_STEP_NAME,
    payload
  };
}

export function saveTestCaseName(payload) {
  return {
    type: SAVE_TEST_CASE_NAME,
    payload
  };
}

export function saveFolderName(payload) {
  return {
    type: SAVE_FOLDER_NAME,
    payload
  };
}

export function saveTestCaseStepName(payload) {
  return {
    type: SAVE_TEST_CASE_STEP_NAME,
    payload
  };
}

export function runTestCase(payload) {
  return dispatch => {
    dispatch({
      type: RUN_TEST_CASE,
      payload
    });
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
        dispatch({
          type: RUN_TEST_CASE_COMPLETE,
          payload
        });
      }, 2000);
    });
  };
}
