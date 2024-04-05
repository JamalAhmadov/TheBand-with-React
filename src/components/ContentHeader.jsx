import React from "react";

const ContentHeader = (props) => {
  return (
    <div className="w-full mx-auto text-center flex flex-col gap-5">
      <h1 className="text-3xl font-normal tracking-wider ">
        {props.title}
      </h1>
      <p className="italic opacity-70">
        {props.text}</p>
    </div>
  );
};

export default ContentHeader;
