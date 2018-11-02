import {
  ADD_FOLDER,
  REMOVE_FOLDER,
  EDIT_FOLDER_NAME,
  SAVE_FOLDER_NAME,
  TOGGLE_FOLDER_VIEW
} from "../action-types/folder-action.type";

function reducer(
  state = {
    folders: []
  },
  action
) {
  switch (action.type) {
    case ADD_FOLDER:
      return {
        ...state,
        folders: state.folders.concat({
          id: `f${state.folders.length + 1}`,
          name: `Folder ${state.folders.length + 1}`,
          open: false
        })
      };
    case REMOVE_FOLDER:
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
    case TOGGLE_FOLDER_VIEW: {
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
    default:
      return state;
  }
}

export default reducer;
