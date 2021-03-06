import { connect, useSelector, useDispatch } from "react-redux";
import React, { useRef } from "react";
import {
  setEditId,
  deleteComments,
  editComments
} from "../reduxFiles/actionCreatores";

const CommentLi = props => {
  const inputRef = useRef(null);
  const editIdx = useSelector(state => state.editIdx);
  const dispatch = useDispatch();
  return (
    <div className="comment-li">
      {editIdx === props.idx ? (
        <div>
          <input type="text" defaultValue={props.text} ref={inputRef} />
          <button
            onClick={() => {
              console.log(inputRef.current.value);
              props.editComment(inputRef.current.value);
            }}
          >
            update
          </button>
        </div>
      ) : (
        <div>
          <span>{props.text}</span>
          <button
            onClick={() => {
              dispatch(setEditId(props.idx));
            }}
          >
            edit
          </button>
          <button onClick={props.deleteComment}>delete</button>
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // setEditId: () => dispatch(setEditId(ownProps.idx)),
    deleteComment: () => dispatch(deleteComments(ownProps.idx)),
    editComment: newcomment => dispatch(editComments(newcomment))
  };
};

// const mapStateToProps = state => {
//   return {
//     editIdx: state.editIdx
//   };
// };

export default connect(
  null,
  mapDispatchToProps
)(CommentLi);
