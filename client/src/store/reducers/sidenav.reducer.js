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
  EDIT_TEST_CASE_STEP,
  UPDATE_TEST_CASE_STEP,
  EDIT_FOLDER_NAME,
  SAVE_FOLDER_NAME,
  EDIT_TEST_CASE_NAME,
  SAVE_TEST_CASE_NAME,
  RUN_TEST_CASE,
  RUN_TEST_CASE_COMPLETE
} from "../action-types/sidenav-action.type";

function reducer(
  state = {
    folders: [],
    selected: {},
    currentContext: {
      type: "none",
      name: "",
      folder: {},
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
    case EDIT_FOLDER_NAME: {
      return {
        ...state,
        folders: state.folders.map(folder => {
          if (folder.id === action.payload.folderId) {
            folder.editable = true;
          }
          return folder;
        })
      };
    }
    case SAVE_FOLDER_NAME: {
      return {
        ...state,
        folders: state.folders.map(folder => {
          if (folder.id === action.payload.folderId) {
            folder.editable = !action.payload.blur;
            folder.name = action.payload.folderName;
          }
          return folder;
        })
      };
    }
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
      const folderIndex = state.folders.findIndex(
        folder => folder.id === action.payload.folderId
      );
      const testCaseIndex = state.folders[folderIndex].testCases.findIndex(
        testCase => testCase.id === action.payload.testCaseId
      );
      state.folders[folderIndex].testCases[testCaseIndex].steps = [
        ...state.folders[folderIndex].testCases[testCaseIndex].steps,
        {
          id: `${state.folders[folderIndex].id}_testcase_${
            state.folders[folderIndex].testCases[testCaseIndex].id
          }_step_${state.folders[folderIndex].testCases[testCaseIndex].steps
            .length + 1}`,
          name: `Step ${state.folders[folderIndex].testCases[testCaseIndex]
            .steps.length + 1}`,
          featureId: 1,
          data: ""
        }
      ];
      state.folders[folderIndex].testCases = [
        ...state.folders[folderIndex].testCases
      ];
      return {
        ...state,
        folders: [...state.folders],
        currentContext: {
          ...state.currentContext,
          testCase: {
            ...state.folders[folderIndex].testCases[testCaseIndex]
          }
        }
      };
    }
    case EDIT_TEST_CASE_NAME: {
      const folderIndex = state.folders.findIndex(
        folder => folder.id === action.payload.folderId
      );
      const testCaseIndex = state.folders[folderIndex].testCases.findIndex(
        testCase => testCase.id === action.payload.testCaseId
      );
      state.folders[folderIndex].testCases[testCaseIndex] = {
        ...state.folders[folderIndex].testCases[testCaseIndex],
        nameEditable: true
      };
      state.folders[folderIndex].testCases = [
        ...state.folders[folderIndex].testCases
      ];
      return {
        ...state,
        folders: [...state.folders],
        currentContext: {
          ...state.currentContext,
          testCase: {
            ...state.folders[folderIndex].testCases[testCaseIndex]
          }
        }
      };
    }
    case SAVE_TEST_CASE_NAME: {
      const folderIndex = state.folders.findIndex(
        folder => folder.id === action.payload.folderId
      );
      const testCaseIndex = state.folders[folderIndex].testCases.findIndex(
        testCase => testCase.id === action.payload.testCaseId
      );
      state.folders[folderIndex].testCases[testCaseIndex] = {
        ...state.folders[folderIndex].testCases[testCaseIndex],
        nameEditable: !action.payload.blur,
        name: action.payload.testCaseName
      };
      state.folders[folderIndex].testCases = [
        ...state.folders[folderIndex].testCases
      ];
      return {
        ...state,
        folders: [...state.folders],
        currentContext: {
          ...state.currentContext,
          testCase: {
            ...state.folders[folderIndex].testCases[testCaseIndex]
          },
          name: `${state.folders[folderIndex].name}/${
            state.folders[folderIndex].testCases[testCaseIndex].name
          }`
        }
      };
    }
    case RUN_TEST_CASE: {
      const folderIndex = state.folders.findIndex(
        folder => folder.id === action.payload.folderId
      );
      const testCaseIndex = state.folders[folderIndex].testCases.findIndex(
        testCase => testCase.id === action.payload.testCaseId
      );
      state.folders[folderIndex].testCases[testCaseIndex] = {
        ...state.folders[folderIndex].testCases[testCaseIndex],
        isRunning: true
      };
      state.folders[folderIndex].testCases = [
        ...state.folders[folderIndex].testCases
      ];
      return {
        ...state,
        folders: [...state.folders],
        currentContext: {
          ...state.currentContext,
          testCase: {
            ...state.folders[folderIndex].testCases[testCaseIndex]
          }
        }
      };
    }
    case RUN_TEST_CASE_COMPLETE: {
      const folderIndex = state.folders.findIndex(
        folder => folder.id === action.payload.folderId
      );
      const testCaseIndex = state.folders[folderIndex].testCases.findIndex(
        testCase => testCase.id === action.payload.testCaseId
      );
      state.folders[folderIndex].testCases[testCaseIndex] = {
        ...state.folders[folderIndex].testCases[testCaseIndex],
        isRunning: false
      };
      state.folders[folderIndex].testCases = [
        ...state.folders[folderIndex].testCases
      ];
      return {
        ...state,
        folders: [...state.folders],
        currentContext: {
          ...state.currentContext,
          testCase: {
            ...state.folders[folderIndex].testCases[testCaseIndex]
          }
        }
      };
    }
    case UPDATE_TEST_CASE_STEP: {
      const folderIndex = state.folders.findIndex(
        folder => folder.id === action.payload.folderId
      );
      const testCaseIndex = state.folders[folderIndex].testCases.findIndex(
        testCase => testCase.id === action.payload.testCaseId
      );
      const stepIndex = state.folders[folderIndex].testCases[
        testCaseIndex
      ].steps.findIndex(step => step.id === action.payload.stepId);
      state.folders[folderIndex].testCases[testCaseIndex].steps[stepIndex] = {
        ...state.folders[folderIndex].testCases[testCaseIndex].steps[stepIndex],
        ...action.payload.delta
      };

      state.folders[folderIndex].testCases = [
        ...state.folders[folderIndex].testCases
      ];
      state.folders[folderIndex].testCases[testCaseIndex].steps = [
        ...state.folders[folderIndex].testCases[testCaseIndex].steps
      ];
      state.folders[folderIndex].testCases = [
        ...state.folders[folderIndex].testCases
      ];
      return {
        ...state,
        folders: [...state.folders],
        currentContext: {
          ...state.currentContext,
          testCase: {
            ...state.folders[folderIndex].testCases[testCaseIndex]
          }
        }
      };
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
