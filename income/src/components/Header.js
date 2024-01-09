"use client";

import { useRouter } from "next/navigation";

import { useContext, useState } from "react";
import { ModalContext } from "../app/layout";

export default function Header() {
  const { isIncomeModalShown, setIsIncomeModalShown } =
    useContext(ModalContext);

  const [fontWeight1, setFontWeight1] = useState(true);
  const router = useRouter();
  const { Profile, setClickProfile } = useContext(ModalContext);
  const handle = () => {
    Profile();
    setClickProfile(false);
  };

  return (
    <div className="h-[80px] flex py-[16px] px-[120px] justify-between border-[1px] mb-[40px] bg-white text-black relative">
      <Profile />

      <div className="flex gap-[24px] justify-center items-center">
        <img className="" src="Vector.png" />
        <h2
          className="text-[16px] font-normal leading-[24px] cursor-pointer "
          onClick={() => {
            router.push("/dashboard");
            setFontWeight1(!fontWeight1);
          }}
          style={{
            fontWeight: fontWeight1 ? "700" : "",
            fontSize: fontWeight1 ? "20px" : "",
          }}
        >
          Dashboard
        </h2>
        <h2
          className="text-[16px] font-normal leading-[24px] cursor-pointer"
          onClick={() => {
            router.push("/records");
            setFontWeight1(!fontWeight1);
          }}
          style={{
            fontWeight: fontWeight1 ? "" : "700",
            fontSize: fontWeight1 ? "" : "20px",
          }}
        >
          Records
        </h2>
      </div>
      <div className="flex gap-[24px]">
        <button
          className="p-[12px] bg-blue-600 text-white rounded-[50px]"
          onClick={() => {
            setIsIncomeModalShown(true);
          }}
        >
          + Records
        </button>
        <img
          className=" border-[1px] border-black w-[50px] h-[50px] rounded-full"
          src="Placeholder.png"
          onClick={handle}
        ></img>
      </div>
    </div>
  );
}
