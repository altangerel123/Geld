"use client";

import { ModalContext } from "../../app/layout";
import { useContext, useState } from "react";
import styles from "../../components/records/income.module.css";

export default function Income() {
  const {
    setIsCategory,
    isIncomeModalShown,
    setIsIncomeModalShown,
    setIsAddModalShown,
    isAddModalShown,
  } = useContext(ModalContext);
  const [categoryAdd, setCategoryAdd] = useState(false);

  const [expense, setExpense] = useState("#0166FF");
  const [income, setIncome] = useState("blue");
  const Clicker = () => {
    setExpense(!expense);
    setIncome(!income);
  };
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
    <div
      className={styles.container}
      style={{
        display: isIncomeModalShown ? "flex" : "none",
      }}
    >
      <div className="w-[728px] bg-white border-[1px] flex flex-col gap-[20px] text-black">
        <div className="flex justify-between px-[24px] py-[20px] border-b-[1px]">
          <h1 className="text-[20px] font-semibold leading-[28px]">
            Add Record
          </h1>
          <button
            onClick={() => {
              setIsIncomeModalShown(false);
            }}
            style={{
              display: isIncomeModalShown ? "flex" : "none",
            }}
            className="text-[20px] font-semibold leading-[28px]"
          >
            X
          </button>
        </div>
        <div className="flex">
          <div className="w-1/2 p-[24px]">
            <div className="flex border-[1px] rounded-[20px] mb-[20px] bg-[#F3F4F6]">
              <button
                className="w-1/2 px-[12px] h-[40px] border-[1px] rounded-[20px]"
                onClick={Clicker}
                style={{
                  backgroundColor: expense ? "#0166FF" : "white",
                  color: expense ? "white" : "black",
                }}
              >
                Expense
              </button>
              <button
                className="w-1/2 px-[12px] h-[40px] border-[1px] rounded-[20px]"
                onClick={Clicker}
                style={{
                  backgroundColor: expense ? "white" : "#16A34A",
                  color: expense ? "black" : "white",
                }}
              >
                Income
              </button>
            </div>
            <div className="p-[16px] h-[] rounded-[8px] mb-[20px] bg-[#F3F4F6]">
              <p className="text-[16px] font-normal leading-[24px]">Amount</p>
              <p className="">$000.00</p>
            </div>
            <div className="relative">
              <h2 className="text-[16px] font-normal leading-[24px]">
                Category
              </h2>
              <div
                className="w-full border-[1px] p-[10px] mb-[10px]"
                onClick={() => {
                  setIsAddModalShown(true);
                }}
              >
                {categoryAdd}
              </div>
              <div style={{ display: isAddModalShown ? "flex" : "none" }}>
                <div className="w-full absolute top-[70px] left-0">
                  <div
                    className="flex w-full p-[16px] items-start gap-[12px] border-b-[1px] bg-white"
                    onClick={() => {
                      setIsCategory(true);
                      setIsIncomeModalShown(false);
                    }}
                  >
                    <img className="w-[24px] h-[24px]" src="PlusCircle.png" />
                    <p className="text-[16px] font-narmal">Add Category</p>
                  </div>
                  {selects.map((item) => {
                    return (
                      <div
                        className="flex p-[16px] items-start gap-[12px]  bg-white"
                        onClick={() => {
                          setCategoryAdd(item);
                        }}
                      >
                        <img className="w-[24px] h-[24px]" src={item.image} />
                        <p className="text-[16px] font-narmal">{item.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="w-1/2 flex gap-[8px] rounded-[8px] mb-[20px]">
              <div>
                <p className="text-[16px] font-normal leading-[24px]">Date</p>
                <input
                  className="rounded-[8px] border-[1px] p-[10px] h-[48px] flex bg-[#F3F4F6]"
                  type="date"
                ></input>
              </div>
              <div>
                <p className="text-[16px] font-normal leading-[24px]">Date</p>
                <input
                  className="rounded-[8px] border-[1px] p-[10px] px-[35px] h-[48px] flex bg-[#F3F4F6]"
                  type="time"
                ></input>
              </div>
            </div>
            <button
              className="w-full h-[40px] py-[12px] rounded-[20px] flex justify-center border-[1px] items-center"
              style={{
                backgroundColor: expense ? "#0166FF" : "#16A34A",
                color: expense ? "white" : "white",
              }}
            >
              Add Record
            </button>
          </div>
          <div className="w-1/2 p-[24px]">
            <h2 className="text-[16px] font-normal leading-[24px]">Payee</h2>
            <input
              className="w-full h-[48px] p-[16px] border-[1px] rounded-[8px] bg-[#F3F4F6]"
              type="text"
              placeholder="Write here"
            ></input>
            <h2 className="text-[16px] font-normal leading-[24px]">Note</h2>
            <textarea
              className="w-full h-[70%] p-[16px] border-[1px] rounded-[8px] bg-[#F3F4F6]"
              type="text"
              placeholder="Write here"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
