import React from "react";
import { useState } from "react";
import ToggleSwitch from "./assets/components/ToggleSwitch";

function App() {
  const [message, setMessage] = useState("");

  const clickedButton = () => {
    setMessage("Button Clicked!");
  };

  const removeMessage = () => {
    setMessage("");
  };

  return (
    <section>
      <div className="exercise-one">
        <h2>{message}</h2>
        <button onClick={clickedButton}>Click Me</button>
        <button onClick={removeMessage}>Click Me Again</button>
      </div>
      <div className="exercise-two">
        <ToggleSwitch />
      </div>
    </section>
  );
}

export default App;
