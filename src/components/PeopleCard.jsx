import React from "react";

const PeopleCard = (props) => {
  return (
    <div className="text-center w-40 flex flex-col gap-4 ">
      <h2>{props.name}</h2>
      <img className="w-40 rounded-sm" src={props.src} alt={props.alt} />
    </div>
  );
};

export default PeopleCard;
