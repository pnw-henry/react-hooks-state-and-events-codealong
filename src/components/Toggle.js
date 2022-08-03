import React, { useState } from "react";

function Toggle() {
  const [status, setState] = useState(false);
  const color = status ? "red" : "white";

  function handleClick() {
    setState((status) => !status);
  }
  return (
    <button onClick={handleClick} style={{ background: color }}>
      {status ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
