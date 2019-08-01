import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderTabs from "../HeaderTabs/HeaderTabs";
import Modal from "react-modal"

Modal.setAppElement('#root');

function App() {
  return (
    <div className="App">
      <HeaderTabs />
    </div>
  );
}

export default App;
