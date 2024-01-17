"use client";

import { useContext, useState } from "react";
import { ModalContext } from "../../app/layout";

export default function Dashboard3() {
  const { newRecords, isReady } = useContext(ModalContext);
  return (
    <div className="bg-white mx-[120px] rounded-[18px]">
      <h2 className="px-[24px] py-[16px] text-[16px] font-bold border-b-[1px]">
        Last Records
      </h2>
      {isReady &&
        newRecords.map((item, index) => {
          return (
            <div
              key={index}
              className="flex px-[24px] py-[12px] justify-between"
            >
              <div className="flex leading-[24px] gap-[16px] items-center">
                <img className="w-[40px] h-[40px] p-[5px] bg-[#FF4545] rounded-full" />
                <div className="flex flex-col">
                  <p className="text-[16px] font-narmal">{item.addCategorys}</p>
                  <p className="">{item.dated}</p>
                </div>
              </div>
              <p className="text-[16px] font-normal leading-[24px] text-[#EAB308] flex items-center">
                {item.amount}$
              </p>
            </div>
          );
        })}
    </div>
  );
}
