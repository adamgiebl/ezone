import React, { useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Form0 from "./form-steps/Form0";
import Form1 from "./form-steps/Form1";
import Form2 from "./form-steps/Form2";
import Form3 from "./form-steps/Form3";
import FormEnd from "./form-steps/FormEnd";

function App({ setOpen }) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  console.log("render");
  const renderForm = (step) => {
    switch (step) {
      case 0:
        return (
          <Form0
            setStep={setStep}
            setProgress={setProgress}
            previous={0}
            next={10}
          />
        );
      case 1:
        return (
          <Form1
            setStep={setStep}
            setProgress={setProgress}
            previous={10}
            next={25}
          />
        );
      case 2:
        return (
          <Form2
            setStep={setStep}
            setProgress={setProgress}
            previous={25}
            next={50}
          />
        );
      case 3:
        return (
          <Form3
            setStep={setStep}
            setProgress={setProgress}
            previous={50}
            next={100}
          />
        );
      case 4:
        return (
          <FormEnd
            setStep={setStep}
            setProgress={setProgress}
            previous={50}
            next={100}
          />
        );
      default:
        return (
          <Form0
            setStep={setStep}
            setProgress={setProgress}
            previous={0}
            next={10}
          />
        );
    }
  };
  return (
    <section className="form-section">
      <div className="form-wrapper">
        <button className="button-close" onClick={() => setOpen(false)}>
          <svg version="1.1" id="Layer_1" viewBox="0 0 492 492">
            <g>
              <g>
                <path
                  fill="var(--tint)"
                  d="M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872    c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872    c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052    L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116    c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952    c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116    c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"
                />
              </g>
            </g>
          </svg>
        </button>
        <div className="progress-circle">
          <CircularProgressbar
            value={progress}
            text={`${progress}%`}
            strokeWidth={4}
            styles={buildStyles({
              textColor: "var(--progress)",
              pathColor: "var(--progress)",
              trailColor: "#2c2c51",
              strokeLinecap: "butt",
              width: "200px",
            })}
          />
        </div>
        {renderForm(step)}
      </div>
    </section>
  );
}

export default App;
