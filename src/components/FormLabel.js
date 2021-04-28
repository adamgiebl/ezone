import React from "react";

const FormLabel = ({ text, number }) => {
  return (
    <div className="form-label">
      <span className="number">{number} </span>
      <span className="text">{text}</span>
    </div>
  );
};

export default FormLabel;
