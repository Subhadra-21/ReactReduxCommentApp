import React from "react";
import "./style.css";
import CommentContainer from "./components/commentContainer";
import { Provider } from "react-redux";
import store from "./reduxFiles/reducerNStore";
import CommentForm from "./components/commentForm";

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <CommentContainer />
        <br />
        <CommentForm />
      </Provider>
    </div>
  );
}
