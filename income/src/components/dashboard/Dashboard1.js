"use client";

import { useContext } from "react";
import { Logo1 } from "../../../public/assets/Logo1";
import { ModalContext } from "../../app/layout";

export default function Dashboard1() {
  const { newRecords } = useContext(ModalContext);
  return (
    <div>
      <div className="w-full px-[120px] flex gap-[30px] ">
        <div
          className="w-1/3  text-white rounded-[18px] p-[32px] flex flex-col justify-between"
          style={{ backgroundColor: "rgba(53, 162, 235, 1)" }}
        >
          <Logo1 />
          <div className="flex justify-between">
            <div>
              <p className="text-[16px] font-normal">Cash</p>
              <p className="text-[24px] font-semibold">
                {Math.abs(
                  newRecords
                    .filter((item) => item.expense === false)
                    .reduce((total, item) => total + Number(item.amount), 0) -
                    newRecords
                      .filter((item) => item.expense === true)
                      .reduce((total, item) => total + Number(item.amount), 0)
                )}
                ₮
              </p>
            </div>
            <img
              className="w-[40px] h-[40px]flex justify-end items-end"
              src="Logo.png"
            />
          </div>
        </div>
        <div className="w-1/3 rounded-[18px] p-[24px] flex flex-col border-[1px] border-black bg-white ">
          <p className="py-[16px] border-b-[1px]"> Total Expenses</p>
          <div className="pb-[16px]">
            <h2
              className="pt-[20px] text-[36px] font-semibold"
              style={{ color: "rgba(255, 99, 132, 1)" }}
            >
              {newRecords
                .filter((item) => item.expense === true)
                .reduce((total, item) => total + Number(item.amount), 0)}
              ₮
            </h2>
            <p className="text-[18px] font-normal text-[#64748B]">
              Your Expenses Amount
            </p>
          </div>
        </div>
        <div className="w-1/3 rounded-[18px] p-[32px] border-[1px] border-black bg-white">
          <p className="py-[16px] border-b-[1px]">Your Income</p>
          <div className="pb-[16px]">
            <h2
              className="pt-[20px] text-[36px] font-semibold"
              style={{ color: "rgba(53, 162, 235, 1)" }}
            >
              {newRecords
                .filter((item) => item.expense === false)
                .reduce((total, item) => total + Number(item.amount), 0)}
              ₮
            </h2>
            <p className="text-[18px] font-normal text-[#64748B]">
              Your Income Amount
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
