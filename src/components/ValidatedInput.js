import React, { useState } from "react";

const ValidatedInput = ({ label, name, placeholder, type, showErrors }) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const changeHadler = (e) => {
    setIsValid(e.target.validity.valid);
    setValue(e.target.value);
  };
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={changeHadler}
      />
      <span>{showErrors && !isValid && "Error"}</span>
    </div>
  );
};

export default ValidatedInput;
