"use client";
import { useState } from "react";

export default function Header() {
  const [data, setData] = useState("");
  const  handlClick = () => {
    setData(!data);
  }
    return (
    <div className="h-[80px] flex py-[16px] px-[120px] justify-between border-[1px] mb-[40px] bg-white">
      <div className="flex gap-[24px] justify-center items-center">
        <img className="" src="Vector.png" />
        <h2 className=" leading-[24px]" 
            style={{fontWeight: data ? "400" : "700"}} 
            onClick={handlClick}>
          Dashboard
        </h2>
        <p className="text-[16px] font-normal leading-[24px]">
          <a href="/records">Records</a>
        </p>
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
