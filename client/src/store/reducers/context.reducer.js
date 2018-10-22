import {
  SELECT_FOLDER,
  SELECT_TEST_CASE
} from "../action-types/sidenav-action.type";

function reducer(
  state = {
    context: {
      type: "none",
      name: "",
      data: null
    }
  },
  action
) {
  switch (action.type) {
    case SELECT_TEST_CASE: {
      const currentFolder = state.folders.find(
        folder => folder.id === action.payload.folderId
      );
      const currentTestCase = currentFolder.testCases.find(
        testCase => testCase.id === action.folder.testCaseId
      );
      return {
        ...state,
        context: {
          ...state.context,
          type: "testcase",
          name: `${currentFolder.name}/${currentTestCase.name}`,
          data: {
            ...currentTestCase
          }
        }
      };
    }
    case SELECT_FOLDER: {
      const currentFolder = action.payload.state.folders.find(
        folder => folder.id === action.payload.folderId
      );
      return {
        ...state,
        context: {
          ...state.context,
          type: "folder",
          name: currentFolder.name,
          data: {
            ...currentFolder
          }
        }
      };
    }
    default:
      return state;
  }
}

export default reducer;
