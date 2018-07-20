import React, { Component } from "react";
import Form from "./Form";
import Versions from "./Versions";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Form />
        </div>
        <div>
          <Versions />
        </div>
      </div>
    );
  }
}

export default App;
