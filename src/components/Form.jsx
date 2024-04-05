import React from "react";
import FormInput from "./FormInput";
import Button from "./Button";

const Form = () => {
  return (
    <form className="sm:w-1/2 w-[80%] flex flex-col gap-3">
      <div className="flex justify-between">
        <FormInput width="48%" placeholder="Name" type="text" />
        <FormInput width="48%" placeholder="Email" type="text" />
      </div>
      <div>
        <FormInput width="100%" placeholder="Message" type="text" />
      </div>
      <div className="flex justify-end">
        <Button text="SEND" />
      </div>
    </form>
  );
};

export default Form;
