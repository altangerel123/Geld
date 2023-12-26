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
  const [Icon] = useState([
    {title: <FaHouse /> },
    {title: <PiHouseLineFill /> },
    {title: <PiIdentificationBadgeFill /> },
    {title: <PiIdentificationCardFill /> },
    {title: <PiLadderBold /> },
    {title: <BsIntersect /> },
    {title: <FaRegImage /> },
    {title: <FaMagnifyingGlassPlus/> },
    {title: <FaMicrophone /> },
    {title: <SiMicrosoftexcel /> },

    {title: <PiNotepadFill />},
    {title: <MdOutlinePlaylistPlay />},
    {title: <RiLeafFill />},
    {title: <PiNumberFiveFill />},
    {title: <PiNumberSevenFill/>},
    {title:  <PiRoadHorizonFill/>},
    {title: <PiHourglassSimpleMediumFill />},
    {title: <RiAnchorLine />},
    {title: <PiBezierCurveFill />},
    {title: <PiExcludeFill />},

    {title: <MdVignette />},
    {title: <FaBaseballBall />},
    {title: <FaQuestionCircle />},
    {title: <PiExamFill />},
    {title: <PiWatchFill />},
    {title: <PiGlobeFill />},
    {title: <PiOrangeSliceFill />},
    {title: <PiPeaceFill />},
    {title: <PiToiletPaperFill />},
    {title: <FaPencilAlt />},
  ]);
  const [color] = useState([
    {color: "#0166FF"},
    {color: "#01B3FF"},
    {color: "#41CC00"},
    {color: "#F9D100"},
    {color: "#FF7B01"},
    {color: "#AE01FF"},
    {color: "#FF0101"},
  ]);

  return (
    <div className="absolute top-0 left-0" style={{ display: isCategory ? "flex" : "flex" }}>
      <div className="w-full h-screen flex justify-center items-center bg-white">
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
              <div className="flex p-[16px] border-[1px] bg-[#F9FAFB] rounded-[8px] relative">
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
        <div className="absolute top-0 left-0 hidden">
          {Icon.map((item) => {
            return (
              <div className="grid grid-cols-6 p-[24px] bg-white ">
                <IconProps {...item} />
              </div>
            )
          })}
          {color.map((item) => {
            return (
              <div className="grid grid-cols-6 p-[24px] bg-white ">
                <Color {...item} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export const IconProps = (props) => {
  return (
     <div className="border-[1px]">
      <p className="border-[1px]">{props.title}</p>
     </div>
  );
};
export const Color = (props) => {
  return (
    <div className="flex gap-[16px] py-[24px] border-t-[1px] border-black">
      <div className="w-[24px] h-[24px] rounded-full border-[1px]">{props.color}</div>
    </div>
  );
}
