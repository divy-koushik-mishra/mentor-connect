import { RiArrowRightUpLine } from "@remixicon/react";
import React from "react";

interface CardProps {
  heading: string;
  body: string;
  image?: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl w-full md:w-1/3 md:mx-4 overflow-hidden relative shadow-2xl hover:scale-105 transition duration-300">
      <div className="aspect-w-16 aspect-h-9 w-full">
        <img
          src={props.image || `https://cdn.pixabay.com/photo/2015/01/20/12/51/ipad-605420_640.jpg`}
          className="w-full h-full object-cover"
          alt={props.heading}
        />
      </div>
      <div className="w-full rounded-xl flex items-center justify-between absolute bottom-4 px-5">
        <div className="flex flex-col items-center rounded-full w-full bg-white bg-opacity-90">
          <div className="flex w-full px-4 py-3 items-center justify-between">
            <div className="flex flex-col items-start">
              <h3 className="font-semibold text-lg">{props.heading}</h3>
              <p className="text-sm text-gray-600">{props.body}</p>
            </div>
            <div className="border w-10 h-10 flex justify-center items-center border-black rounded-full ml-2 flex-shrink-0">
              <RiArrowRightUpLine className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;