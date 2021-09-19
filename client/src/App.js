import React, { Fragment } from "react";
import InputSession from "./components/InputSession";
import ListSessions from "./components/ListSessions";
import "./css/style.css"

function App() {
  return (
    <Fragment>
      <div className = "input">
        <InputSession />
      </div>
        <ListSessions />
    </Fragment>
  );
}

export default App;
