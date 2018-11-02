import {
  ADD_FOLDER,
  REMOVE_FOLDER,
  EDIT_FOLDER_NAME,
  SAVE_FOLDER_NAME,
  TOGGLE_FOLDER_VIEW
} from "../action-types/folder-action.type";

export function addFolder(payload) {
  return {
    type: ADD_FOLDER,
    payload
  };
}
export function removeFolder(payload) {
  return {
    type: REMOVE_FOLDER,
    payload
  };
}
export function toggleFolderView(payload) {
  return {
    type: TOGGLE_FOLDER_VIEW,
    payload
  };
}
export function editFolderName(payload) {
  return {
    type: EDIT_FOLDER_NAME,
    payload
  };
}
export function saveFolderName(payload) {
  return {
    type: SAVE_FOLDER_NAME,
    payload
  };
}
