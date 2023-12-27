"use client";
import styles from "@/components/records/income.module.css";
import { ModalContext } from "@/app/records/page";
import { useContext, useState } from "react";

import { FaHouse, FaTractor } from "react-icons/fa6";
import { PiHouseLineFill } from "react-icons/pi";
import { PiIdentificationBadgeFill } from "react-icons/pi";
import { PiIdentificationCardFill } from "react-icons/pi";
import { PiLadderBold } from "react-icons/pi";
import { BsIntersect } from "react-icons/bs";
import { FaRegImage } from "react-icons/fa6";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";
import { SiMicrosoftexcel } from "react-icons/si";
import { PiNotepadFill } from "react-icons/pi";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { RiLeafFill } from "react-icons/ri";
import { PiNumberFiveFill } from "react-icons/pi";
import { PiNumberSevenFill } from "react-icons/pi";
import { PiRoadHorizonFill } from "react-icons/pi";
import { PiHourglassSimpleMediumFill } from "react-icons/pi";
import { RiAnchorLine } from "react-icons/ri";
import { PiBezierCurveFill } from "react-icons/pi";
import { PiExcludeFill } from "react-icons/pi";
import { MdVignette } from "react-icons/md";
import { FaBaseballBall } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { PiExamFill } from "react-icons/pi";
import { PiWatchFill } from "react-icons/pi";
import { PiGlobeFill } from "react-icons/pi";
import { PiOrangeSliceFill } from "react-icons/pi";
import { PiPeaceFill } from "react-icons/pi";
import { PiToiletPaperFill } from "react-icons/pi";
import { FaPencilAlt } from "react-icons/fa";
import { handleClientScriptLoad } from "next/script";

export default function Add() {
  const { isCategory, setIsCategory, isIcon, setIsIcon } =
    useContext(ModalContext);

  const [isOpen, setIsOpen] = useState(false);
  const Icon = [
    <FaHouse />,
    <PiHouseLineFill />,
    <PiIdentificationBadgeFill />,
    <PiIdentificationCardFill />,
    <PiLadderBold />,
    <BsIntersect />,
    <FaRegImage />,
    <FaMagnifyingGlassPlus />,
    <FaMicrophone />,
    <SiMicrosoftexcel />,

    <PiNotepadFill />,
    <MdOutlinePlaylistPlay />,
    <RiLeafFill />,
    <PiNumberFiveFill />,
    <PiNumberSevenFill />,
    <PiRoadHorizonFill />,
    <PiHourglassSimpleMediumFill />,
    <RiAnchorLine />,
    <PiBezierCurveFill />,
    <PiExcludeFill />,

    <MdVignette />,
    <FaBaseballBall />,
    <FaQuestionCircle />,
    <PiExamFill />,
    <PiWatchFill />,
    <PiGlobeFill />,
    <PiOrangeSliceFill />,
    <PiPeaceFill />,
    <PiToiletPaperFill />,
    <FaPencilAlt />,
  ];
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
      <div className="flex justify-center items-center bg-white rounded-[12px]">
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
                onClick={() => {
                  setIsIcon(false);
                }}
              >
                <p className="w-[24px] h-[24px]">{isOpen}</p>
                <img className="w-[24px] h-[24px]" src="Icon3.png" />
              </div>

              <div className="flex border-[1px] p-[16px] bg-[#F9FAFB] rounded-[8px]">
                <input type="text" placeholder="Name" />
                <img className="" src="Icon3.png" />
              </div>
              <div
                className="absolute top-[60px] left-0"
                style={{ display: isIcon ? "none" : "flex" }}
              >
                <div className="grid grid-cols-6 bg-white">
                  {Icon.map((icon, item) => {
                    return (
                      <div
                        className="p-[24px]"
                        key={item.icon}
                        onClick={() => {
                          setIsOpen(icon);
                        }}
                      >
                        {icon}
                      </div>
                    );
                  })}
                  <div className="grid grid-cols-7 gap-[40px] p-4">
                    {Color.map((item) => {
                      return (
                        <div
                          className="w-[24px] h-[24px] rounded-full border-t-[1px]"
                          key={item}
                          style={{ backgroundColor: item }}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <p className="h-[40px] rounded-[20px] bg-[#16A34A] mt-[32px]"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
