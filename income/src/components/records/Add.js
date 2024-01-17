"use client";
import styles from "../../components/records/income.module.css";
import { ModalContext } from "../../app/layout";
import { useContext, useState } from "react";
import * as icons from "../icons";

export default function Add() {
  const {
    isCategory,
    setIsCategory,
    isIcon,
    setIsIcon,
    clickCategory,
    category,
    setCategory,
    icon,
    setIcon,
    clickCategory1,
  } = useContext(ModalContext);

  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState("#000");

  const Color = [
    "#0166FF",
    "#01B3FF",
    "#41CC00",
    "#F9D100",
    "#FF7B01",
    "#AE01FF",
    "#FF0101",
  ];

  return (
    <div
      className={styles.icon}
      style={{ display: isCategory ? "flex" : "flex" }}
    >
      <div className="flex justify-center items-center bg-white rounded-[12px] text-black">
        <div className="border-[1px] rounded-[10px] bg-white">
          <div className="flex justify-between border-b-[1px] p-[24px]">
            <h1 className="text-[20px] font-semibold leading-[28px]">
              Add Record
            </h1>
            <button
              className="text-[20px] font-semibold leading-[28px]"
              onClick={() => {
                setIsCategory(false);
              }}
              style={{ display: isCategory ? "flex" : "none" }}
            >
              X
            </button>
          </div>
          <div className="p-[24px]">
            <div className="flex gap-[12px] relative">
              <div
                className="flex p-[16px] border-[1px] bg-[#F9FAFB] rounded-[8px] "
                onClick={() => setIsIcon(!isIcon)}
              >
                <p className="w-[24px] h-[24px]">{isOpen}</p>
                <img className="w-[24px] h-[24px]" src="Icon3.png" />
              </div>
              <div className="flex border-[1px] p-[16px] bg-[#F9FAFB] rounded-[8px]">
                <input
                  type="text"
                  placeholder="Name"
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                />
                <img className="" src="Icon3.png" />
              </div>
              <div
                className="absolute top-[60px] left-0"
                style={{ display: isIcon ? "none" : "flex" }}
              >
                <div className="grid grid-cols-6 bg-white">
                  {Object.keys(icons).map((key, index) => {
                    const Icon = icons[key];

                    return (
                      <div
                        className="p-[24px]"
                        key={index}
                        onClick={() => {
                          setIsOpen(Icon);
                          setIcon(key);
                        }}
                      >
                        <Icon />
                      </div>
                    );
                  })}
                  <div className="grid grid-cols-7 gap-[40px] p-4">
                    {Color.map((colors, index) => {
                      return (
                        <div
                          className="w-[24px] h-[24px] rounded-full border-t-[1px]"
                          key={index}
                          style={{ backgroundColor: colors }}
                          onClick={() => {
                            setColor(color);
                          }}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <p
              className="h-[40px] rounded-[20px] bg-[#16A34A] mt-[32px] flex justify-center items-center "
              onClick={async () => {
                await clickCategory(icon, category);
                await clickCategory1(category, icon);
                setIsCategory(false);
              }}
            >
              Add Category
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
