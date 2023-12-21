"use client";

import { Money1 } from "@/components/assets/Money1";
import { Prame1 } from "@/components/assets/Prame1";

export default function Login2(props) {
  return (
    <div className="w-full h-[1024px] flex flex-col pt-[150px] items-center bg-white">
      <div className="flex justify-center items-center gap-[9px] mb-[141px]">
        <Prame1 />
      </div>
      <div className="max-w-[384px] flex flex-col justify-center items-center">
        <Money1 />
        <p className="text-[24px] font-normal mb-[24px]">
          Set up your cash Balance
        </p>
        <input
          className="w-full mb-[12px] border-[2px] border-[#A3A3A3] rounded-[5px] p-[16px]"
          placeholder="Email"
        />
        <p className="mb-[32px]">How much cash do you have in your wallet?</p>
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
