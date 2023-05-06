import React from "react";
import { useState } from "react";

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(true);
  const [isStatus, setIsStatus] = useState("Off");
  const handleToggle = () => {
    setIsOn(true);
    if (isOn === true) {
      setIsStatus("On");
    }
  };

  const repeatToggle = () => {
    setIsOn(!isOn);
    if (isOn === false) {
      setIsStatus("Off");
    }
    console.log(isOn);
  };
  return (
    <div>
      <label className="switch">
        <input type="checkbox" onClick={handleToggle} onChange={repeatToggle} />
        <span className="slider round"></span>
      </label>
      <h2>The Switch is {isStatus}</h2>
    </div>
  );
}

export default ToggleSwitch;
