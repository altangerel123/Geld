"use client";
import { ModalContext } from "@/app/records/page";
import { useContext, useState } from "react";


export default function Choose () {
  const {select} = useContext(ModalContext); 
  const {add, setAdd} = useContext(ModalContext);
  const addClick = () => {
    setAdd(!add);
  }
  
    const[selects, setSelects] = useState([
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
  
    return(
      <div style={{display: select ? "none" : "flex"}}>
         <div className="w-full absolute top-[80px] left-0 ">
          <div className="flex p-[16px] items-start gap-[12px] border-[1px] bg-white" onClick={addClick}>
            <img className="w-[24px] h-[24px]" src="PlusCircle.png"/>
            <p className="text-[16px] font-narmal">Add Category</p>
          </div>
          {selects.map((item) => {
            return (
              <Select {...item}/>
            );
          })}
        </div>
      </div>
    )
}
export const Select = (props) => {
    return (
     <div className="flex p-[16px] items-start gap-[12px] border-[1px] bg-white ">
          <img className="w-[24px] h-[24px]" src={props.image} />
          <p className="text-[16px] font-narmal">{props.title}</p>
     </div>
    );
  };