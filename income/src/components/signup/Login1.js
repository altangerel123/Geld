"use client";

import { Money } from "../../../public/assets/Money";
import { Prame } from "../../../public/assets/Prame";

export default function Login1(props) {
  return (
    <div className="w-full h-screen  flex flex-col pt-[150px] items-center bg-white">
      <div className="flex justify-center items-center gap-[9px] mb-[141px]">
        <Prame />
      </div>
      <div className="max-w-[384px] flex flex-col justify-center items-center">
        <Money />
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
