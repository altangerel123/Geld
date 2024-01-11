"use client";

import { useState } from "react";

export default function Records2() {
  const [today, setToday] = useState([
    {
      id: 1,
      title: "Food & Drinks",
      input: "checkbox",
      time: "12:32",
      image: "House (1).png",
      description: "-1000$",
    },
  ]);
  return (
    <div className="w-full">
      <div className="flex justify-between mb-[24px]">
        <div className="flex gap-[4px] items-center text-white">
          <p className="w-[32px] h-[32px] bg-black flex justify-center items-center">
            {"<"}
          </p>
          <p className="text-white">Last 30 Days</p>
          <p className="w-[32px] h-[32px] bg-black flex justify-center items-center">
            {">"}
          </p>
        </div>
        <div className="flex px-[16px] py-[4p] bg-white rounded-[8px] items-center">
          <p className=" text-[16px] font-normal leading-[24px]">
            Newest first
          </p>
          <img
            className="w-[20px] h-[20px] flex justify-center items-center"
            src="Icon3.png"
          />
        </div>
      </div>
      <div className="flex justify-between border-[1px] bg-white px-[24px] py-[12px] rounded-[12px] mb-[24px]">
        <div className="flex gap-[16px]">
          <input type="checkbox" />
          <p>Select all</p>
        </div>
        <p>-35000$</p>
      </div>
      <div className="flex flex-col  gap-[12px]">
        <h2 className="text-[16px] font-semibold leading-[24px] text-white">
          Today
        </h2>
        {today.map((item, index) => {
          return <Today key={index} {...item} />;
        })}
      </div>
      <div className="flex flex-col  gap-[12px] mt-[24px]">
        <h2 className="text-[16px] font-semibold leading-[24px] text-white">
          Yesterday
        </h2>
        {today.map((item, index) => {
          return <Today key={index} {...item} />;
        })}
      </div>
    </div>
  );
}
export const Today = (props) => {
  return (
    <div className="flex px-[24px] py-[12px] justify-between bg-white rounded-[12px]">
      <div className="flex leading-[24px] gap-[16px] items-center">
        <input
          className="w-[20px] h-[20px] border-[1px]"
          type={props.checkbox}
        />
        <img
          className="w-[40px] h-[40px] p-[5px] bg-[#FF4545] rounded-full"
          src={props.image}
        />
        <div className="flex flex-col">
          <p className="text-[16px] font-narmal">{props.title}</p>
          <p className="">{props.time}</p>
        </div>
      </div>
      <p className="text-[16px] font-normal leading-[24px] text-[#EAB308] flex items-center">
        {props.description}
      </p>
    </div>
  );
};
