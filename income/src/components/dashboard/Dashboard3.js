"use client";

import { useContext, useState } from "react";
import { ModalContext } from "../../app/layout";
import * as icons from "../icons";

export default function Dashboard3() {
  const { newRecords, isReady } = useContext(ModalContext);
  return (
    <div className="bg-white mx-[120px] rounded-[18px]">
      <h2 className="px-[24px] py-[16px] text-[16px] font-bold border-b-[1px]">
        Last Records
      </h2>
      {isReady &&
        newRecords.map((item, index) => {
          const Icon = icons[item.recordIcon];
          return (
            <div
              key={index}
              className="flex px-[24px] py-[12px] justify-between bg-white rounded-[12px]"
            >
              <div className="flex leading-[24px] gap-[16px] items-center">
                <div className="w-[40px] h-[40px] p-[5px] bg-[#FF4545] rounded-full flex justify-center items-center">
                  <Icon />
                </div>
                <div className="flex flex-col">
                  <p className="text-[16px] font-narmal">{item.addCategory}</p>
                  <p className="">{item.dated}</p>
                </div>
              </div>
              <p
                className="text-[16px] font-normal leading-[24px] text-[#EAB308] flex items-center"
                style={{ color: item.expense ? "#0166FF" : "#16A34A" }}
              >
                {item.expense ? "- " : " "}
                {item.amount}₮
              </p>
            </div>
          );
        })}
    </div>
  );
}
