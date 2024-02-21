import { forwardRef } from "react";
import { InputLabel, TextField } from "@mui/material";

const CustomInput = forwardRef(function (
  { showLabel, inputTitle, id, type, name, value, disable = false, ...props },
  ref
) {
  let component;

  if (type !== "date") {
    component = (
      <TextField
        id={id}
        type={type}
        name={name}
        value={value}
        inputRef={ref}
        {...props}
      />
    );
  }

  return (
    <>
      {showLabel && <InputLabel htmlFor={id}>{inputTitle}</InputLabel>}
      {component}
    </>
  );
});

export default CustomInput;
