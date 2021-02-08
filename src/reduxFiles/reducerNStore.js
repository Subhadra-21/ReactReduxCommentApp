import {
  ADD_COMMENTS,
  EDIT_COMMENTS,
  DELETE_COMMENTS,
  SET_EDIT_ID
} from "./actions";

import { createStore } from "redux";

const initialState = {
  comments: [{ text: "Sample comment " }],
  editIdx: null
};

const reducerComment = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENTS:
      return {
        ...state,
        comments: [...state.comments, { text: action.comment }]
      };
    case EDIT_COMMENTS:
      const { comment } = action;
      const { editIdx: idx1 } = state;
      return {
        ...state,
        comments: [
          ...state.comments.slice(0, idx1),
          { text: comment },
          ...state.comments.slice(idx1 + 1)
        ],
        editIdx: null
      };
    case DELETE_COMMENTS:
      const { idx } = action;
      return {
        ...state,
        comments: [
          ...state.comments.slice(0, idx),
          ...state.comments.slice(idx + 1)
        ]
      };
    case SET_EDIT_ID:
      return { ...state, editIdx: action.idx };
    default:
      return state;
  }
};

const store = createStore(reducerComment);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
