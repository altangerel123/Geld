"use client";
import { ModalContext } from "@/app/records/page";
import { useContext } from "react";

export default function Add() {
  const { add } = useContext(ModalContext);
  return (
    <div style={{ display: add ? "flex" : "flex" }}>
      <div className="flex justify-between px-[24px] py-[20px] border-b-[1px] absolute top-0 left-0">
        <h1 className="text-[20px] font-semibold leading-[28px]">Add Record</h1>
        <button>X</button>
      </div>
    </div>
  );
}
