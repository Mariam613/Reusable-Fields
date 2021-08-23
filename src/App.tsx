import React from "react";
import "./App.css";
import { FormContainer } from "./Components/FormContainer";

export interface IApplicationProps {}
const App: React.FC<IApplicationProps> = () => {
  return (

      <div className="App">
        <FormContainer />
      </div>
  );
};

export default App;
