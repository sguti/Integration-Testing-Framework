import {
  ADD_TEST_CASE,
  EDIT_TEST_CASE_NAME,
  REMOVE_TEST_CASE,
  RUN_ALL_TEST_CASES,
  RUN_TEST_CASE,
  RUN_TEST_CASE_COMPLETE,
  SAVE_TEST_CASE_NAME
} from "../action-types/testcase-action.type";

function reducer(
  state = {
    testCasesByFolder: []
  },
  action
) {
  switch (action.type) {
    case ADD_TEST_CASE: {
      let testCasesByFolder = [...state.testCasesByFolder];
      if (
        !state.testCasesByFolder.find(
          item => item.folderId === action.payload.folderId
        )
      ) {
        testCasesByFolder.push({
          folderId: action.payload.folderId,
          testCases: []
        });
      }
      return {
        ...state,
        testCasesByFolder: testCasesByFolder.map(item => {
          if (item.folderId === action.payload.folderId) {
            item.testCases = item.testCases.concat({
              id: `${item.folderId}t${item.testCases.length + 1}`,
              name: `Test Case ${item.testCases.length + 1}`
            });
          }
          return item;
        })
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
        isRunning: false,
        // history: state.folders[folderIndex].testCases[testCaseIndex].history.concat([action.payload.response])
        history: [
          action.payload.response,
          ...state.folders[folderIndex].testCases[testCaseIndex].history
        ]
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
    default:
      return state;
  }
}

export default reducer;
