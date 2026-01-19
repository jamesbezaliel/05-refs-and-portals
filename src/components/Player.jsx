import { useState, useRef } from "react";

// using refs would be an alternative approach here
export default function Player() {
  const [enteredName, setEnteredName] = useState("");
  let name = useRef();

  function handleClick() {
    // setSubmitted(true);
    setEnteredName(name.current.value);
    name.current.value = "";
  }

  return (
    <section id="player">
      <h2>
        Welcome{" "}
        {enteredName && enteredName !== "" ? enteredName : "unknown entity"}
      </h2>
      <p>
        <input type="text" ref={name} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
