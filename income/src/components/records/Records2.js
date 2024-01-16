"use client";

import { useContext } from "react";
import { ModalContext } from "../../app/layout";

export default function Records2() {
  const { newRecords, isReady } = useContext(ModalContext);
  return (
    <div className="w-full">
      <div className="flex justify-between mb-[24px]">
        <div className="flex gap-[4px] items-center text-white">
          <p className="w-[32px] h-[32px] bg-[#E5E7EB] flex justify-center items-center text-black">
            {"<"}
          </p>
          <p className="text-black">Last 30 Days</p>
          <p className="w-[32px] h-[32px] bg-[#E5E7EB] flex justify-center items-center text-black">
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
        <h2 className="text-[16px] font-semibold leading-[24px]">Today</h2>
        {isReady &&
          newRecords.map((item, index) => {
            return (
              <div
                key={index}
                className="flex px-[24px] py-[12px] justify-between bg-white rounded-[12px]"
              >
                <div className="flex leading-[24px] gap-[16px] items-center">
                  <input
                    className="w-[20px] h-[20px] border-[1px]"
                    type="checkbox"
                  />
                  <img className="w-[40px] h-[40px] p-[5px] bg-[#FF4545] rounded-full" />
                  <div className="flex flex-col">
                    <p className="text-[16px] font-narmal">
                      {item.addCategorys}
                    </p>
                    <p className="">{item.dated}</p>
                  </div>
                </div>
                <p className="text-[16px] font-normal leading-[24px] text-[#EAB308] flex items-center">
                  {item.amount}
                 
                </p>
              </div>
            );
          })}
      </div>
      <div className="flex flex-col  gap-[12px] mt-[24px]">
        <h2 className="text-[16px] font-semibold leading-[24px]">Yesterday</h2>
      </div>
    </div>
  );
}
