import React, { useState } from "react";

/* code adapted from https://www.youtube.com/watch?v=tIdNeoHniEY */
function Form(props) {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      <label htmlFor={props.name}>{label}</label>
      <div>
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
        />
        <span>{errorMessage}</span>
      </div>
    </div>
  );
}

export default Form;
