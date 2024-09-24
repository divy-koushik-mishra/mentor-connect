import { RiArrowRightUpLine } from "@remixicon/react";
import React from "react";

// Define the interface for props
interface CardProps {
  heading: string;
  body: string;
  image?: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl md:w-1/3 mx-4 overflow-hidden relative shadow-2xl hover:scale-110 transition">
      <img
        src={props.image || `https://cdn.pixabay.com/photo/2015/01/20/12/51/ipad-605420_640.jpg`}
        className="min-h-72 h-full"
      />
      <div className="w-full rounded-xl flex items-center justify-between bottom-4 absolute px-5">
        <div className="flex flex-col items-center rounded-full  w-full bg-white">
          <div className="flex w-full px-4 items-center justify-between">
            <div className="text-center py-4 flex justify-center">
              <h3 className="">{props.heading}</h3>
              <h1 className=" text-center">{props.body}</h1>
            </div>
            <div className="border w-16 h-12 flex justify-center items-center border-black rounded-full">
              <RiArrowRightUpLine />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
