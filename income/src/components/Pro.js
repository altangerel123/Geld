"use client";

import { useContext, useState } from "react";
import { ModalContext } from "../app/layout";
import styles from "../components/records/income.module.css";
import { useAuth } from "./providers/AuthProvider";

export default function Pro() {
  const { clickProfile, setClickProfile, profiley } = useContext(ModalContext);
  const { signOut } = useAuth();
  return (
    <div
      className={styles.pro}
      style={{ display: clickProfile ? "flex" : "none" }}
    >
      <div className=" w-[700px] h-[600px] bg-white border-[1px] text-black flex flex-col gap-[20px]">
        <p
          className="flex justify-end p-[20px]"
          onClick={() => {
            setClickProfile(!clickProfile);
          }}
        >
          X
        </p>
        <div className="w-full flex items-center pl-[70px] gap-[20px] ">
          <img
            className=" border-black w-[100px] h-[100px] rounded-full border-[1px]"
            src="Pro.jpeg"
          ></img>
          <div className="text-black">
            <div>Email:{profiley && profiley.email}</div>
            <div>Password:{profiley && profiley.password}</div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <p
            className="bg-blue-600 text-white max-w-fit px-[30px] py-[5px] rounded-[10px]"
            onClick={signOut}
          >
            Log Out
          </p>
        </div>
      </div>
    </div>
  );
}
