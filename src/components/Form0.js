import React, { useRef, useEffect } from "react";
import FormLabel from "./FormLabel";

const Form0 = ({ setStep, setProgress, previous, next }) => {
  return (
    <section className="form form0">
      <FormLabel text={"AREAS OF PERFORMANCE"} number={"02."} />
      hello
      <div className="buttons">
        <button className="button" onClick={() => setStep(1)}>
          Continue
        </button>
      </div>
    </section>
  );
};

export default Form0;
