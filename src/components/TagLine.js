import React from "react";

const TagLine = ({ heading, subHeading }) => {
  return (
    <div className="tag-line">
      <h3>{heading}</h3>
      <span>{subHeading}</span>
    </div>
  );
};

export default TagLine;
