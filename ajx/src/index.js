import React from "react";
import ReactDOM from "react-dom";
import ComponentDetail from "./ComponentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <ComponentDetail author="Sam" />
      <ComponentDetail author="Alex" />
      <ComponentDetail author="Jane" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
