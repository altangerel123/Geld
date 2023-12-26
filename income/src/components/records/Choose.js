"use client";
import { ModalContext } from "@/app/records/page";
import { useContext, useState } from "react";

export default function Choose() {
  const { isAddModalShown, isCategory, setIsCategory } =
    useContext(ModalContext);

  const [selects] = useState([
    {
      id: 2,
      title: "Home",
      image: "select.png",
    },
    {
      id: 3,
      title: "Gift",
      image: "select2.png",
    },
    {
      id: 4,
      title: "Food",
      image: "select3.png",
    },
    {
      id: 5,
      title: "Drink",
      image: "select4.png",
    },
    {
      id: 6,
      title: "Taxi",
      image: "select5.png",
    },
    {
      id: 7,
      title: "Shopping",
      image: "select6.png",
    },
  ]);

  return (
    <div style={{ display: isAddModalShown ? "none" : "flex" }}>
      <div className="w-full absolute top-[70px] left-0">
        <div
          className="flex w-full p-[16px] items-start gap-[12px] border-b-[1px] bg-white absolute"
          onClick={() => {
            setIsCategory("false");
          }}
        >
          <img className="w-[24px] h-[24px]" src="PlusCircle.png" />
          <p className="text-[16px] font-narmal">Add Category</p>
        </div>
        {selects.map((item) => {
          return <Select {...item} />;
        })}
      </div>{" "}
    </div>
  );
}
export const Select = (props) => {
  return (
    <div className="flex p-[16px] items-start gap-[12px]  bg-white ">
      <img className="w-[24px] h-[24px]" src={props.image} />
      <p className="text-[16px] font-narmal">{props.title}</p>
    </div>
  );
};
