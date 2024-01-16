"use client";
import { useContext } from "react";
import { ModalContext } from "../../app/layout";

export default function Records1() {
  const { setIsCategory, category1map, isReady } = useContext(ModalContext);

  return (
    <div className="w-1/5 flex flex-col gap-[24px] bg-white py-[24px] px-[16px] rounded-[12px] ">
      <h1 className="text-[24px] font-semibold">Records</h1>
      <button
        className="px-[12px] h-[32px] rounded-[20px] bg-blue-600 text-white"
        onClick={() => {
          setIsCategory(true);
        }}
      >
        + Add
      </button>
      <input
        className="px-[16px] rounded-[10px] text-black border-[1px]"
        placeholder="Search"
        type="search"
      ></input>
      <div className="leading-[24px]">
        <h2 className="text-[16px] font-semibold">Types</h2>
        <div className="text-[16p] font-normal">
          <div className="flex gap-[8px]">
            <input type="checkbox"></input>
            <p>All</p>
          </div>
          <div className="flex gap-[8px]">
            <input type="checkbox"></input>
            <p>Income</p>
          </div>
          <div className="flex gap-[8px]">
            <input type="checkbox"></input>
            <p>Experse</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between pb-[16px]">
          <h3 className="text-[16px] font-semibold">Category</h3>
          <p className="text-[16px] font-semibold">Clear</p>
        </div>
        <div className="flex flex-col gap-[8px] gap-[5px]">
        {category1map.map((item, index) => {
          return (
            <div key={index} className="flex justify-between">
              <div className="flex gap-[5px]">
                <img src=" Icon2.png"></img>
                <div>{item.category}</div>
              </div>
              <img src="Icon1.png"></img>
            </div>
          );
        })}
        </div>

        <button
          className="w-full h-[32px] rounded-[20px] text-white text-[16px] font-normal leading-[24px] bg-blue-600"
          onClick={() => {
            setIsCategory(true);
          }}
        >
          + Add Category
        </button>
      </div>
      <div className="flex flex-col gap-[16px]">
        <h2 className="text-[16px] font-semibold">Amount Rangess</h2>
        <div className="flex gap-[16px]">
          <textarea className="w-full " type="text" placeholder="1"></textarea>
          <textarea
            className="pl-[30px]"
            type="text"
            placeholder="100"
          ></textarea>
        </div>
        <div className="flex">
          <input type="radio"></input>
          <input className="w-full" type="range"></input>
          <input type="radio"></input>
        </div>
      </div>
    </div>
  );
}
