import React from "react";
import ActionBar from "./components/ActionBar/ActionBar";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="md:grid md:grid-cols-3">
      <ActionBar />
      <Main />
    </div>
  );
}

export default App;
