"use client";
import { useState } from "react";

export default function Header() {
  const [data, setData] = useState("16px");
  const handlClick = () => {
    setData(!data);
  };
  return (
    <div className="h-[80px] flex py-[16px] px-[120px] justify-between border-[1px] mb-[40px] bg-white">
      <div className="flex gap-[24px] justify-center items-center">
        <img className="" src="Vector.png" />
        <h2
          className=" leading-[24px] "
          onClick={handlClick}
          style={{ fontSize: data ? "" : "20px" }}
        >
          <a href="/dashboard">Dashboard</a>
        </h2>
        <h2 className="text-[16px] font-normal leading-[24px]">
          <a href="/records">Records</a>
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
