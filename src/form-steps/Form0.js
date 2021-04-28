import React, { useRef, useEffect } from "react";

const Form0 = ({ setStep, setProgress, previous, next }) => {
  useEffect(() => {
    setProgress(previous);
  }, []);
  return (
    <section className="form form0">
      <div className="content">
        <h2>
          <span className="outline">Welcome to</span>
          <br />
          <span>The Zone</span>
        </h2>
        <span className="instructions">
          Let us help you improve your performance with personalized content
          sent to your inbox
        </span>
      </div>
      <div
        onMouseEnter={() => setProgress(10)}
        onMouseLeave={() => setProgress(0)}
        className="buttons"
        style={{ justifyContent: "center", marginTop: "2rem" }}
      >
        <button className="button" onClick={() => setStep(1)}>
          Continue
        </button>
      </div>
    </section>
  );
};

export default React.memo(Form0);
