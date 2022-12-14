import React from "react";
import "./App.css";
import { data } from "./data";
import ProfilCard from "./components/ProfilCard";
import { v4 as uuidv4 } from "uuid";

function App() {
  return (
    <div className="App">
      <h1>Personal Digital Assistant</h1>
      {data.map((el) => (
        <ProfilCard key={uuidv4()} el={el} />
      ))}
    </div>
  );
}

export default App;
