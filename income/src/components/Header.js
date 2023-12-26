"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [isItem, isSetItem] = useState(false);
  const router = useRouter();
  return (
    <div className="h-[80px] flex py-[16px] px-[120px] justify-between border-[1px] mb-[40px] bg-white">
      <div className="flex gap-[24px] justify-center items-center">
        <img className="" src="Vector.png" />
        <h2
          className=" leading-[24px] "
          onClick={() => {
            router.push("/dashboard");
          }}
          // style={{ fontWeight: isItem ? "800" : "400" }}
        >
          Dashboard
        </h2>
        <h2
          className="text-[16px] font-normal leading-[24px]"
          onClick={() => {
            router.push("/records");
          }}
          // style={{ fontWeight: isItem ? "800" : "400" }}
        >
          Records
        </h2>
      </div>
      <div className="flex gap-[24px]">
        <button className="p-[12px] bg-blue-600 text-white rounded-[50px]">
          <a> + Records</a>
        </button>
        <img
          className=" border-[1px] border-black w-[50px] h-[50px] rounded-full"
          src="Placeholder.png"
        />
      </div>
    </div>
  );
}
