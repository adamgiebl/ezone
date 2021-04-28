import React, { useState, useEffect, useRef } from "react";
import TagLine from "./TagLine";
import ValidatedInput from "./ValidatedInput";

const text = {
  heading: "Elevate your performance",
  subHeading:
    "Get ahead of your competition and be the first to hear when new content is released, by signing up below.",
};

const USERS_URL = "https://ezone-ba6e.restdb.io/rest/ezone-users";
const API_KEY = "60895c4d28bf9b609975a7f1";

const Form3 = ({ setStep, setProgress, previous, next }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //api.login(email, password);
  };

  return (
    <section className="form form3">
      <div className="content">
        <form className="personal-form" onSubmit={handleSubmit}>
          <TagLine heading={text.heading} subHeading={text.subHeading} />
          <div className="inputs">
            <ValidatedInput
              label={"Full name"}
              name={"fullname"}
              type={"fullname"}
            />
            <ValidatedInput label={"Email"} name={"email"} type={"email"} />
          </div>
          <div className="buttons">
            <button className="button button--primary" type="submit">
              Sign up
            </button>
            <button className="button" onClick={() => setStep(2)}>
              Go back
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form3;
