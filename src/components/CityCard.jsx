import React from "react";
import Button from "./Button";

const CityCard = (props) => {
  return (
    <div className="w-[255px] min-h-96 bg-white text-black">
      <div>
        <img src={props.src} alt={props.alt} />
      </div>
      <div className="p-4  flex flex-col items-start gap-3">
        <h2 className="font-semibold">{props.city}</h2>
        <span className="text-gray-500">{props.date}</span>
        <p>{props.about}</p>
        <Button text={props.text} />
      </div>
    </div>
  );
};

export default CityCard;

