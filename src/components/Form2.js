import React, { useEffect, useRef } from "react";
import CheckboxTab from "./checkboxTab";
import TagLine from "./TagLine";
import FormLabel from "./FormLabel";

import { areas, areasCategories } from "../constants";

const text = {
  heading: "What areas do you want to work on?",
  subHeading: "You can select multiple.",
};

const Form2 = ({ setStep, setProgress, previous, next }) => {
  const checkboxContainer = useRef([]);

  useEffect(() => {
    setProgress(previous);
  }, []);

  const submitHandler = () => {
    const activeCheckboxes = checkboxContainer.current.querySelectorAll(
      "input:checked"
    );
    console.log(activeCheckboxes);

    if (activeCheckboxes.length > 0) {
      setStep(3);
    } else {
      console.log("error");
    }
  };

  const clickHandler = () => {
    const activeCheckboxes = checkboxContainer.current.querySelectorAll(
      "input:checked"
    );
    if (activeCheckboxes.length > 0) {
      setProgress(next);
    } else {
      setProgress(previous);
    }
  };
  return (
    <section className="form form2">
      <FormLabel text={"AREAS OF PERFORMANCE"} number={"02."} />
      <div className="content">
        <TagLine heading={text.heading} subHeading={text.subHeading} />
        <div className="areas" ref={checkboxContainer}>
          {areasCategories.map((category) => (
            <div className="area-category" key={`key-${category.id}`}>
              <h3 title={category.full}>{category.name}</h3>
              {areas.map((area) => {
                if (area.category === category.id) {
                  return (
                    <CheckboxTab
                      name={area.name}
                      text={area.name}
                      onClick={clickHandler}
                      key={`key-${area.name}`}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="buttons">
        <button className="button button--link" onClick={() => setStep(1)}>
          Go back
        </button>
        <button className="button" onClick={submitHandler}>
          Continue
        </button>
      </div>
    </section>
  );
};

export default Form2;
