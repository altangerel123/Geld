"use client";

import { useContext } from "react";
import { Logo1 } from "../../../public/assets/Logo1";
import { ModalContext } from "../../app/layout";

export default function Dashboard1() {
  const {reduseExpense} = useContext(ModalContext);
  return (
    <div>
      <div className="w-full px-[120px] flex gap-[30px] ">
        <div className="w-1/3 bg-blue-600 text-white rounded-[18px] p-[32px] flex flex-col justify-between">
          <Logo1 />
          <div className="flex justify-between">
            <div>
              <p className="text-[16px] font-normal">Cash</p>
              <p className="text-[24px] font-semibold">10,000,00</p>
            </div>
            <img
              className="w-[40px] h-[40px]flex justify-end items-end"
              src="Logo.png"
            />
          </div>
        </div>
        <div className="w-1/3 rounded-[18px] p-[24px] flex flex-col border-[1px] border-black bg-white ">
          <p className="py-[16px] border-b-[1px]">Your Income</p>
          <div className="pb-[16px]">
            <h2 className="pt-[20px] text-[36px] font-semibold">1,200,000$</h2>
            <p className="text-[18px] font-normal text-[#64748B]">
              Your Income Amount
            </p>
          </div>
          <p>32% from last month</p>
        </div>
        <div className="w-1/3 rounded-[18px] p-[32px] border-[1px] border-black bg-white">
          <p className="py-[16px] border-b-[1px]">Total Expenses</p>
          <div className="pb-[16px]">
          <h2 className="pt-[20px] text-[36px] font-semibold">
            {/* { reduseExpense.reduce((total, item) => total + Number(item.expense === true), 0)} */}
            ₮</h2>
            <p className="text-[18px] font-normal text-[#64748B]">
              Your Income Amount
            </p>
          </div>
          <p>32% from last month</p>
        </div>
      </div>
    </div>
  );
}
