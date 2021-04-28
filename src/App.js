import React, { useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Form0 from "./components/Form0";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";

//import csgoSrc from "./images/games/csgo.png";

function App() {
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
            previous={0}
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
      <div className="rec"></div>
    </section>
  );
}

export default App;
