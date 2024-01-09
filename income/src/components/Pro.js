"use client";

import { useContext } from "react";
import { ModalContext } from "../app/layout";

export default function Pro() {
  const { clickProfile } = useContext(ModalContext);
  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-white absolute top-0 left-0"
      style={{ display: clickProfile ? "flex" : "flex" }}
    >
      <div>{profile && profile.email}</div>
      <div>{profile && profile.password}</div>
      <div className="w-[600px] h-[500px] bg-slate-400">
        <p className="flex justify-end p-[20px]">X</p>
      </div>
    </div>
  );
}
