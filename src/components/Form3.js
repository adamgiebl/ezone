import React, { useState } from "react";
import TagLine from "./TagLine";

const text = {
  heading: "Elevate your performance",
  subHeading:
    "Get ahead of your competition and be the first to hear when new content is released, by signing up below.",
};

const Form3 = ({ setStep, setProgress }) => {
  return (
    <section className="form form3">
      <div className="content">
        <TagLine heading={text.heading} subHeading={text.subHeading} />
      </div>
      <div className="buttons">
        <button className="button button--primary">Sign up</button>
      </div>
    </section>
  );
};

export default Form3;
