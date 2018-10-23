import {
  ADD_NEW_SIDENAV_FOLDER,
  REMOVE_SIDENAV_FOLDER,
  ADD_TEST_CASE,
  FOLDER_ICON_CLICK,
  REMOVE_TEST_CASE,
  SELECT_TEST_CASE,
  SELECT_FOLDER,
  ADD_TEST_CASE_STEP,
  REMOVE_TEST_CASE_STEP,
  EDIT_TEST_CASE_STEP
} from "../action-types/sidenav-action.type";

function reducer(
  state = {
    folders: [],
    selected: {},
    currentContext: {
      type: "none",
      name: "",
      folder: null,
      testcase: null
    }
  },
  action
) {
  switch (action.type) {
    case ADD_NEW_SIDENAV_FOLDER:
      return {
        ...state,
        folders: state.folders.concat({
          id: `__folder_${state.folders.length + 1}`,
          name: `Folder ${state.folders.length + 1}`,
          open: false,
          testCases: []
        })
      };
    case REMOVE_SIDENAV_FOLDER:
      return {
        ...state,
        folders: [
          ...state.folders.filter(
            folder => folder.id !== action.payload.folderId
          )
        ]
      };
    case ADD_TEST_CASE: {
      let newState = {
        ...state,
        folders: state.folders.map(folder => {
          if (folder.id === action.payload.folderId) {
            folder.testCases = folder.testCases.concat({
              id: `${folder.id}_testcase_${folder.testCases.length + 1}`,
              name: `Test Case ${folder.testCases.length + 1}`,
              steps: [],
              history: []
            });
            folder.open = true;
          }
          return folder;
        })
      };
      if (state.currentContext.folder.id === action.payload.folderId) {
        newState = {
          ...newState,
          currentContext: {
            ...newState.currentContext,
            folder: {
              ...newState.folders.find(
                folder => folder.id === action.payload.folderId
              )
            }
          }
        };
      }
      return newState;
    }
    case ADD_TEST_CASE_STEP: {
      return state;
    }
    case REMOVE_TEST_CASE_STEP: {
      return state;
    }
    case EDIT_TEST_CASE_STEP: {
      return state;
    }
    case FOLDER_ICON_CLICK: {
      return {
        ...state,
        folders: state.folders.map(folder => {
          if (folder.id === action.payload.folderId) {
            folder.open = !folder.open;
          }
          return folder;
        })
      };
    }
    case REMOVE_TEST_CASE: {
      let newState = {
        ...state,
        folders: state.folders.map(folder => {
          if (folder.id === action.payload.folderId) {
            folder.testCases = folder.testCases.filter(
              testCase => testCase.id !== action.payload.testCaseId
            );
          }
          return folder;
        })
      };
      if (state.currentContext.folder.id === action.payload.folderId) {
        newState = {
          ...newState,
          currentContext: {
            ...newState.currentContext,
            folder: {
              ...newState.folders.find(
                folder => folder.id === action.payload.folderId
              )
            }
          }
        };
      }
      return newState;
    }
    case SELECT_TEST_CASE: {
      const currentFolder = state.folders.find(
        folder => folder.id === action.payload.folderId
      );
      const currentTestCase = currentFolder.testCases.find(
        testCase => testCase.id === action.payload.testCaseId
      );
      return {
        ...state,
        currentContext: {
          ...state.currentContext,
          type: "testcase",
          name: `${currentFolder.name}/${currentTestCase.name}`,
          folder: {
            ...currentFolder
          },
          testCase: {
            ...currentTestCase
          }
        }
      };
    }
    case SELECT_FOLDER: {
      const currentFolder = state.folders.find(
        folder => folder.id === action.payload.folderId
      );
      return {
        ...state,
        currentContext: {
          ...state.currentContext,
          type: "folder",
          name: currentFolder.name,
          folder: {
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
