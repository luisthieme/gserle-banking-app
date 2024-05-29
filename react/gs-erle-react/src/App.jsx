import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [text, setText] = useState("");
  const [newValue, setNewValue] = useState("");

  function updateValue(e) {
    setNewValue(e.target.value);
  }

  async function updateText() {
    setText(newValue);
  }

  return (
    <>
      <Navbar />
      <h1>{text}</h1>
      <input type="text" onChange={updateValue} />
      <button onClick={updateText}>Apply</button>
    </>
  );
}

export default App;
