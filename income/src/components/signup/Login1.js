"use client";

import { Money } from "../../../public/assets/Money";
import { Prame } from "../../../public/assets/Prame";

export default function Login1(props) {
  return (
    <div className="w-full h-[1024px] flex flex-col pt-[150px] items-center bg-white">
      <div className="flex justify-center items-center gap-[9px] mb-[141px]">
        <Prame />
      </div>
      <div className="max-w-[384px] flex flex-col justify-center items-center">
        <Money />
        <p className="text-[24px] font-normal mb-[24px]">
          Select base currency
        </p>
        <input className="w-full mb-[12px] border-[2px] border-[#A3A3A3] rounded-[5px] p-[16px]" />
        <p className="mb-[32px]">
          Your base currency should be the one you use most often. All
          transaction in other currencies will be calculated based on this one
        </p>
        <button
          className="w-[100%] py-[16px] rounded-[30px] bg-blue-600 text-white"
          onClick={() => {
            props.setpage(props.page + 1);
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
