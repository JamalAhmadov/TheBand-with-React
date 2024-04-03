import React from "react";

const FormInput = (props) => {
  return (
    <input
      className="h-10 border border-gray-700 p-2"
      style={{ width: props.width }}
      placeholder={props.placeholder}
      type={props.type}
    />
  );
};

export default FormInput;
