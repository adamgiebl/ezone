import React, { useRef, useEffect } from "react";

const FormEnd = ({ setStep, setProgress, previous, next }) => {
  useEffect(() => {
    setProgress(previous);
  }, []);
  return (
    <section className="form formEnd">
      <div className="content">
        <h2>
          <span className="outline"></span>
          <br />
          <span>Congrats!</span>
        </h2>
        <span className="instructions">
          Welcome to Ezone. You are now a member and will receive expert news
          based on your chosen areas of performance.
        </span>
      </div>
      <div
        onMouseEnter={() => setProgress(10)}
        onMouseLeave={() => setProgress(0)}
        className="buttons"
        style={{ justifyContent: "center", marginTop: "2rem" }}
      >
        <button className="button" onClick={() => setStep(1)}>
          Finish
        </button>
      </div>
    </section>
  );
};

export default React.memo(FormEnd);
