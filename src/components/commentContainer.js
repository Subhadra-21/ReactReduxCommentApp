import { connect } from "react-redux";
import CommentLi from "./comment.js";
import React from "react";

const CommentContainer = props => {
  return (
    <div>
      <h2>Comment Manager:</h2>
      {props.comments.length === 0 ? (
        <div>NO COMMENTS</div>
      ) : (
        props.comments.map((msg, i) => {
          return <CommentLi {...msg} key={"" + Math.random() + i} idx={i} />;
        })
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToProps)(CommentContainer);
