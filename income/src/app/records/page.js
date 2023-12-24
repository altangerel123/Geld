"use client";
import Header from "@/components/Header";
import Income from "@/components/records/Income";
import Records1 from "@/components/records/Records1";
import Records2 from "@/components/records/Records2";
import { createContext, useState } from "react";

export const ModalContext = createContext();

export default function Home() {
  const [modal, setModal] = useState("flex");
  const [select, setSelect] =useState("flex");
  const [add , setAdd] = useState("flex");
  return (
    <>
      <Header />
      <ModalContext.Provider value={{ modal, setModal , select, setSelect, add, setAdd }}>
        <div className="px-[120px] flex gap-[40px] relative">
          <Records1 />
          <Records2 />
        </div> 
        <Income />
      </ModalContext.Provider>
    </>
  );
}
