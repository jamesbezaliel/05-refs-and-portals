import Toast from "./Toast";
import React from "react";
function App() {
  const [isShowToast, setIsShowToast] = React.useState(false);

  function handleEnrol() {
    // Todo: Show toast
    setIsShowToast(true);

    setTimeout(() => {
      setIsShowToast(false);
      // Todo: hide toast
    }, 3000);
  }

  return (
    <div id="app">
      {/* Todo: Render <Toast /> component (conditionally) here */}
      {isShowToast && <Toast message="You have successfully enrolled!" />}
      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
        <button onClick={handleEnrol}>Enrol</button>
      </article>
    </div>
  );
}

// export default App;

import ReactDOM from "react-dom";

export default function Toast({ message }) {
  return ReactDOM.createPortal(
    <aside className="toast" data-testid="toast">
      <p>{message}</p>
    </aside>,
    document.querySelector("body")
  );
}
