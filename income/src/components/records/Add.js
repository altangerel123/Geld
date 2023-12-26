"use client";
import { ModalContext } from "@/app/records/page";
import { useContext, useState } from "react";
import { FaHouse } from "react-icons/fa6";
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

export default function Add() {
  const { isCategory } = useContext(ModalContext);

  return (
    <div style={{ display: isCategory ? "flex" : "none" }}>
      <div className="w-full h-screen placeholder:h-screen flex justify-center items-center border-[1px] border-black">
        <div className="border-[1px] rounded-[10px] bg-white">
          <div className="flex justify-between border-b-[1px] p-[24px]">
            <h1 className="text-[20px] font-semibold leading-[28px]">
              Add Record
            </h1>
            <button className="text-[20px] font-semibold leading-[28px]">
              X
            </button>
          </div>
          <div className="p-[24px]">
            <div className="flex gap-[12px] ">
              <div className="flex p-[16px] border-[1px] bg-[#F9FAFB] rounded-[8px]">
                <p className="w-[24px] h-[24px]">
                  <FaHouse />
                </p>
                <img className="w-[24px] h-[24px]" src="Icon3.png" />
              </div>
              <div className="flex border-[1px] p-[16px] bg-[#F9FAFB] rounded-[8px]">
                <input type="text" placeholder="Name" />
                <img className="" src="Icon3.png" />
              </div>
            </div>
            <p className="h-[40px] rounded-[20px] bg-[#16A34A] mt-[32px]"></p>
          </div>
        </div>
        <Icon />
      </div>
    </div>
  );
}
export function Icon() {
  return (
    <div className="p-[24px] bg-white rounded-[8px]">
      <div className="grid grid-cols-6 p-[24px] gap-[24px]">
        <div>
          <FaHouse />
        </div>
        <div>
          <PiHouseLineFill />
        </div>
        <div>
          <PiIdentificationBadgeFill />
        </div>
        <div>
          <PiIdentificationCardFill />
        </div>
        <div>
          <PiLadderBold />
        </div>
        <div>
          <BsIntersect />
        </div>

        <div>
          <FaRegImage />
        </div>
        <div>
          <FaMagnifyingGlassPlus />
        </div>
        <div>
          <FaMicrophone />
        </div>
        <div>
          <SiMicrosoftexcel />
        </div>
        <div>
          <PiNotepadFill />
        </div>
        <div>
          <MdOutlinePlaylistPlay />
        </div>

        <div>
          <RiLeafFill />
        </div>
        <div>
          <PiNumberFiveFill />
        </div>
        <div>
          <PiNumberSevenFill />
        </div>
        <div>
          <PiRoadHorizonFill />
        </div>
        <div>
          <PiHourglassSimpleMediumFill />
        </div>
        <div>
          <RiAnchorLine />
        </div>

        <div>
          <PiBezierCurveFill />
        </div>
        <div>
          <PiExcludeFill />
        </div>
        <div>
          <MdVignette />
        </div>
        <div>
          <FaBaseballBall />
        </div>
        <div>
          <FaQuestionCircle />
        </div>
        <div>
          <PiExamFill />
        </div>

        <div>
          <PiWatchFill />
        </div>
        <div>
          <PiGlobeFill />
        </div>
        <div>
          <PiOrangeSliceFill />
        </div>
        <div>
          <PiPeaceFill />
        </div>
        <div>
          <PiToiletPaperFill />
        </div>
        <div>
          <FaPencilAlt />
        </div>
      </div>
      <div className="flex gap-[16px] py-[24px] border-t-[1px] border-black">
        <div className="w-[24px] h-[24px] rounded-full border-[1px] bg-[#0166FF]"></div>
        <div className="w-[24px] h-[24px] rounded-full border-[1px] bg-[#01B3FF]"></div>
        <div className="w-[24px] h-[24px] rounded-full border-[1px] bg-[#41CC00]"></div>
        <div className="w-[24px] h-[24px] rounded-full border-[1px] bg-[#F9D100]"></div>
        <div className="w-[24px] h-[24px] rounded-full border-[1px] bg-[#FF7B01]"></div>
        <div className="w-[24px] h-[24px] rounded-full border-[1px] bg-[#AE01FF]"></div>
        <div className="w-[24px] h-[24px] rounded-full border-[1px] bg-[#FF0101]"></div>
      </div>
    </div>
  );
}
