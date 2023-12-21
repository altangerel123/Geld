"use client";

import { Check } from "@/components/assets/Check";
import { Prame2 } from "@/components/assets/Prame2";

export default function login3(props) {
  return (
    <div className="w-full h-[1024px] flex flex-col pt-[150px] items-center bg-white">
      <div className="flex justify-center items-center gap-[9px] mb-[141px]">
        <Prame2 />
      </div>
      <div className="max-w-[384px] flex flex-col justify-center items-center">
        <Check />
        <p className="text-[24px] font-normal mb-[24px]">Good Job!</p>
        <p className="mb-[32px]">
          Your very first account has been created. Now continue to dashboard
          and start tracking
        </p>
        <button className="w-[100%] py-[16px] rounded-[30px] bg-blue-600 text-white">
          <a href="/dashboard"> Confirm</a>
        </button>
      </div>
    </div>
  );
}
