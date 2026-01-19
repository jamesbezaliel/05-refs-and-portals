import { useImperativeHandle, useRef } from "react";

// to use portal, first, we need to import createPortal from react-dom
// then we define the createPortal inside the return statement, and then we specify
// the JSX we want to render and the target DOM node where we want to render it
// in this case, we will render the dialog into document.getElementById("modal")
import { createPortal } from "react-dom";


// this method is only available in React 19+
export default function ResultModal(props) {
  const { targetTime, timeRemaining, resetTime } = props;
  const ref = props.ref;
  const dialogRef = useRef();
  const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2);
  const userLost = timeRemaining <= 0;
  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);
  // useImperativeHandle to expose specific methods to parent components (to be able to call dialog.open() from parent)
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog className="result-modal" ref={dialogRef} onClose={resetTime}>
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time is {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        You stopped with <strong>{formattedTimeRemaining} seconds left</strong>
      </p>
      <form method="dialog">
        <button onClick={resetTime}>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}

// older method for React versions below 19:
// import { forwardRef, useImperativeHandle, useRef } from "react";

// const ResultModal = forwardRef(function ResultModal(
//   { targetTime, result },
//   ref
// ) {
//   const dialogRef = useRef();
//   // useImperativeHandle to expose specific methods to parent components (to be able to call dialog.open() from parent)
//   useImperativeHandle(ref, () => {
//     return {
//       open() {
//         dialogRef.current.showModal();
//       },
//     };
//   });

//   return (
//     <dialog className="result-modal" ref={dialogRef}>
//       <h2>You {result}</h2>
//       <p>
//         The target time is {targetTime} second{targetTime > 1 ? "s" : ""}
//       </p>
//       <p>
//         You stopped with <strong>X seconds left</strong>
//       </p>
//       <form method="dialog">
//         <button>Close</button>
//       </form>
//     </dialog>
//   );
// });

// export default ResultModal;
