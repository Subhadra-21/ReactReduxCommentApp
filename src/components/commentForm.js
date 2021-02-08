import React, { useRef, useState } from "react";
import { addComments } from "../reduxFiles/actionCreatores";
import { connect } from "react-redux";

const CommentForm = props => {
  const txtRef = useRef(null);
  const [cmnt, setCmnt] = useState("");
  return (
    <div>
      <br />
      <br />
      <h3>Write your comments here:</h3>
      <textarea
        width={200}
        height={200}
        value={cmnt}
        onChange={e => {
          setCmnt(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          console.log(cmnt);
          if (!cmnt) alert("enter a comment");
          else {
            props.addComment(cmnt);
            setCmnt("");
          }
        }}
      >
        Add Comments
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addComment: comment => dispatch(addComments(comment))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CommentForm);
