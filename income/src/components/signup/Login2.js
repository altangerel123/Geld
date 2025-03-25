"use client";

import { Money1 } from "../../../public/assets/Money1";
import { Prame1 } from "../../../public/assets/Prame1";

export default function Login2(props) {
  return (
    <div className="w-full h-screen flex flex-col pt-[150px] items-center bg-white">
      <div className="flex justify-center items-center gap-[9px] mb-[141px]">
        <Prame1 />
      </div>
      <div className="max-w-[384px] flex flex-col justify-center items-center">
        <Money1 />
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
