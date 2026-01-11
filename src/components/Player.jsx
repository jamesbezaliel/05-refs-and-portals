import { useState } from "react";

// lesson 134, manage user input with two way binding (without using refs)
export default function Player() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setSubmitted(false);
    setName(event.target.value);
  }

  function handleClick() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted && name !== "" ? name : "unknown entity"}</h2>
      <p>
        <input type="text" value={name} onChange={handleChange} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
