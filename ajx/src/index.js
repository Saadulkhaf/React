import React from "react";
import ReactDOM from "react-dom";
import ComponentDetail from "./ComponentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <ComponentDetail
        author="Sam"
        timeAgo="Today at 5:00AM"
        content="Nice blogpost"
      />
      <ComponentDetail
        author="Alex"
        timeAgo="Today at 8:00AM"
        content="Good blogpost"
      />
      <ComponentDetail
        author="Jane"
        timeAgo="Today at 1:00AM"
        content="Bad blogpost"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
