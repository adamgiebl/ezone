import React, { useState } from "react";

const CheckboxTab = ({ onClick, name, text, imageSrc, hasCheckbox = true }) => {
  const [isActive, setActive] = useState(false);
  return (
    <label
      className={`tab ${isActive ? "tab--active" : null}`}
      htmlFor={name}
      onClick={onClick}
    >
      {imageSrc && <img src={imageSrc} alt={""} />}
      {!imageSrc && (
        <div className={"custom-checkbox bounce"}>
          <span className={`input ${isActive && "checked"}`}></span>
          <svg viewBox="0 0 21 21">
            <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
          </svg>
        </div>
      )}
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={isActive}
        value={isActive}
        onChange={() => setActive(!isActive)}
      />
      <span>{text}</span>
    </label>
  );
};

export default CheckboxTab;
