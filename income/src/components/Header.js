"use client";

import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../app/layout";
import Pro from "../components/Pro";

export default function Header() {
  const {
    clickProfile,
    profiley,
    Profile,
    setClickProfile,
    setIsIncomeModalShown,
  } = useContext(ModalContext);
  const [fontWeight1, setFontWeight1] = useState(true);
  const router = useRouter();
  const handle = () => {
    Profile(true);
    setClickProfile(!clickProfile);
  };
  useEffect(() => {
    Profile();
  });

  return (
    <>
      <div className="h-[80px] flex py-[16px] px-[120px] justify-between border-[1px]  bg-white text-black relative">
        <div className="flex gap-[24px] justify-center items-center">
          <img className="" src="Vector.png" />
          <h2
            className="text-[20px] leading-[24px] cursor-pointer "
            onClick={() => {
              router.push("/dashboard");
              setFontWeight1(true);
            }}
          >
            Dashboard
          </h2>
          <h2
            className="text-[20px] font-normal leading-[24px] cursor-pointer"
            onClick={() => {
              router.push("/records");
              setFontWeight1(false);
            }}
          >
            Records
          </h2>
        </div>
        <div className="flex justify-center items-center gap-3">
          <button
            className="p-[12px] text-white rounded-[50px]"
            style={{ backgroundColor: "rgba(53, 162, 235, 1)" }}
            onClick={() => {
              setIsIncomeModalShown(true);
              Profile;
            }}
          >
            + Records
          </button>
          <div
            className="flex justify-center items-center gap-2 rounded-[50px] p-2 bg-[#1F2937] text-white"
            onClick={handle}
          >
            {profiley.email}
          </div>
        </div>
      </div>
      <Pro />
    </>
  );
}
