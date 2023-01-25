import React, { useRef } from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  const inputField = useRef();

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputField}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.changeHandler}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
