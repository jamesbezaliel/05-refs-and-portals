import { useRef, useState } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimeChallenge({ title, targetTime }) {
  // we use refs to track the timer ID so we can clear it later if needed
  // refs is used to store mutable values that does not trigger re-render when changed (when using useState)
  let timer = useRef();
  let dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  let timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    handleStopChallenge();
  }

  function resetTime() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStartChallenge() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
  }

  function handleStopChallenge() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        timeRemaining={timeRemaining}
        resetTime={resetTime}
      />
      <section className="challenge">
        <h2>{title}</h2>
        {/* <p>{isExpired ? "Time's up, you lost!" : ""}</p> */}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button
            onClick={timerIsActive ? handleStopChallenge : handleStartChallenge}
          >
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
