"use client";

import { ModalContext } from "../../app/layout";
import { useContext } from "react";
import styles from "../../components/records/income.module.css";
import * as icons from "../icons";

export default function Income() {
  const {
    setIsCategory,
    isIncomeModalShown,
    setIsIncomeModalShown,
    setIsAddModalShown,
    isAddModalShown,
    records,
    recordsGet,
    addCategory,
    setAddCategory,
    amount,
    setAmount,
    dated,
    setDated,
    isReady,
    category1map,
    expense,
    setExpense,
    setRecordIcon,
  } = useContext(ModalContext);

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
                onClick={() => {
                  setExpense(true);
                }}
                style={{
                  backgroundColor: expense ? "#0166FF" : "white",
                  color: expense ? "white" : "black",
                }}
              >
                Expense
              </button>
              <button
                className="w-1/2 px-[12px] h-[40px] border-[1px] rounded-[20px]"
                onClick={() => {
                  setExpense(false);
                }}
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
              <input
                type="number"
                placeholder="$ 000.00"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              ></input>
            </div>
            <div className="relative">
              <h2 className="text-[16px] font-normal leading-[24px]">
                Category
              </h2>
              <div
                className="w-full h-[50px] gap-[10px] items-center border-[1px] px-[15px] flex"
                onClick={() => {
                  setIsAddModalShown(!isAddModalShown);
                }}
              >
                {/* {recordIcon} */}
                {addCategory}
              </div>
              <div style={{ display: isAddModalShown ? "flex" : "none" }}>
                <div className="w-full absolute top-[60px] left-0 bg-white">
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
                  {isReady &&
                    category1map.map((item, index) => {
                      const Icon = icons[item.icon];
                      console.log(Icon, item.icon);
                      return (
                        <div
                          className="p-[16px] gap-[12px] flex items-center"
                          key={index}
                          onClick={() => {
                            setIsAddModalShown(!isAddModalShown);
                            setAddCategory(item.category);
                            setRecordIcon(item.icon);
                          }}
                        >
                          <Icon />
                          {item.category}
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
                  onChange={(e) => {
                    setDated(e.target.value);
                  }}
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
              onClick={() => {
                records(addCategory, amount, dated);
                recordsGet(addCategory, amount, dated);
                setIsIncomeModalShown(false);
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
