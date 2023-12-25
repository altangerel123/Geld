"use client";
import { useContext, useState } from "react";
import { ModalContext } from "@/app/records/page";

export default function Records1() {
  const { modal, setModal } = useContext(ModalContext);
  const handllick = () => {
    setModal(!modal);
  };
  const [category, setCategory] = useState([
    {
      id: 1,
      title: "Food & Drinks",
      image: "Icon2.png",
      img: "Icon1.png",
    },
    {
      id: 2,
      title: "Shopping",
      image: "Icon2.png",
      img: "Icon1.png",
    },
    {
      id: 3,
      title: "Housing",
      image: "Icon2.png",
      img: "Icon1.png",
    },
    {
      id: 4,
      title: "Transportation",
      image: "Icon2.png",
      img: "Icon1.png",
    },
    {
      id: 5,
      title: "Vehicle",
      image: "Icon2.png",
      img: "Icon1.png",
    },
    {
      id: 6,
      title: "Life & Entertainment",
      image: "Icon2.png",
      img: "Icon1.png",
    },
    {
      id: 7,
      title: "Communication, PC",
      image: "Icon2.png",
      img: "Icon1.png",
    },
    {
      id: 8,
      title: "Financial expenses",
      image: "Icon2.png",
      img: "Icon1.png",
    },
    {
      id: 9,
      title: "Investments",
      image: "Icon2.png",
      img: "Icon1.png",
    },
    {
      id: 10,
      title: "Income",
      image: "Icon2.png",
      img: "Icon1.png",
    },
    {
      id: 11,
      title: "Others",
      image: "Icon2.png",
      img: "Icon1.png",
    },
  ]);
  return (
    <div className="w-1/4 flex flex-col gap-[24px] bg-white py-[24px] px-[16px] rounded-[12px] ">
      <h1 className="text-[24px] font-semibold">Records</h1>
      <button
        className="px-[12px] h-[32px] rounded-[20px] bg-blue-600 text-white"
        onClick={handllick}
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
        <div className="flex flex-col gap-[8px]">
          {category.map((item) => {
            return <Category {...item} />;
          })}
        </div>
        <button className="text-[16px] font-normal leading-[24px]">
          + Add Category
        </button>
      </div>
      <div className="flex flex-col gap-[16px]">
        <h2 className="text-[16px] font-semibold">Amount Rangess</h2>
        <div className="flex gap-[16px]">
          <input
            className="h-[48px] border-[2px] rounded-[15px]"
            type="text"
            placeholder="1"
          ></input>
          <input
            className="h-[48px] border-[2px] rounded-[16px]"
            type="text"
            placeholder="100"
          ></input>
        </div>
        <div className="flex">
          <input type="radio"></input>
          <input type="range"></input>
          <input type="radio"></input>
        </div>
      </div>
    </div>
  );
}
export const Category = (props) => {
  return (
    <div className="flex justify-between">
      <div className="flex leading-[24px] gap-[8px]">
        <img className="w-[20px] h-[20px]" src={props.image} />
        <p className="text-[16px] font-narmal">{props.title}</p>
      </div>
      <img className="w-[20px] h-[20px]" src={props.img} />
    </div>
  );
};
