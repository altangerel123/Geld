"use client";
import { useContext } from "react";
import { ModalContext } from "../../app/layout";

export default function Records1() {
  const { setIsCategory, category1map, setSelectFilter } =
    useContext(ModalContext);

  return (
    <div className="w-1/5 flex flex-col gap-[24px] bg-white py-[24px] px-[16px] rounded-[12px] max-h-fit">
      <h1 className="text-[24px] font-semibold">Records</h1>
      <input
        className="px-[16px] rounded-[10px] text-black border-[1px]"
        placeholder="Search"
        type="search"
      ></input>
      <div className="leading-[24px]">
        <h2 className="text-[16px] font-semibold">Types</h2>
        <div className="text-[16p] font-normal">
          <div className="flex gap-[8px]">
            <input
              type="radio"
              name="type"
              defaultChecked
              onClick={() => {
                setSelectFilter("All");
              }}
            ></input>
            <p>All</p>
          </div>
          <div className="flex gap-[8px]">
            <input
              type="radio"
              name="type"
              onClick={() => {
                setSelectFilter("Income");
              }}
            ></input>
            <p>Income</p>
          </div>
          <div className="flex gap-[8px]">
            <input
              type="radio"
              name="type"
              onClick={() => {
                setSelectFilter("Expense");
              }}
            ></input>
            <p>Expense</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between pb-[16px]">
          <h3 className="text-[16px] font-semibold">Category</h3>
          <p className="text-[16px] font-semibold">Clear</p>
        </div>
        <div className="flex flex-col pb-[15px]">
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
          className="w-full h-[32px] rounded-[20px] text-white text-[16px] font-normal leading-[24px] "
          style={{ backgroundColor: "rgba(53, 162, 235, 1)" }}
          onClick={() => {
            setIsCategory(true);
          }}
        >
          + Add Category
        </button>
      </div>
    </div>
  );
}
