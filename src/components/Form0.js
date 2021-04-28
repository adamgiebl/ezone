import React, { useRef, useEffect } from "react";

const Form0 = ({ setStep, setProgress, previous, next }) => {
  return (
    <section className="form form0">
      <h2>
        <span className="outline">Welcome to</span>
        <br />
        <span>The Zone</span>
      </h2>
      <span className="instructions">
        Let us help you improve your performance with personalized content sent
        to your inbox
      </span>
      <div className="buttons">
        <button className="button" onClick={() => setStep(1)}>
          Continue
        </button>
      </div>
    </section>
  );
};

export default Form0;
