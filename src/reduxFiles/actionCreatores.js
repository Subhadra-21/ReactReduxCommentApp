import {
  ADD_COMMENTS,
  EDIT_COMMENTS,
  DELETE_COMMENTS,
  SET_EDIT_ID
} from "./actions";

export const addComments = message => {
  return {
    type: ADD_COMMENTS,
    comment: message
  };
};

export const editComments = message => {
  return {
    type: EDIT_COMMENTS,
    comment: message
  };
};

export const deleteComments = idx => {
  return {
    type: DELETE_COMMENTS,
    idx
  };
};

export const setEditId = idx => {
  return {
    type: SET_EDIT_ID,
    idx
  };
};
