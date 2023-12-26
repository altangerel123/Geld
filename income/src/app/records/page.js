"use client";
import Header from "@/components/Header";
import Income from "@/components/records/Income";
import Records1 from "@/components/records/Records1";
import Records2 from "@/components/records/Records2";
import { createContext, useState } from "react";

export const ModalContext = createContext();

export default function Home() {
  const [isIncomeModalShown, setIsIncomeModalShown] = useState(false);
  const [isAddModalShown, setIsAddModalShown] = useState(false);
  const [isCategory, setIsCategory] = useState(false);

  return (
    <>
      <Header />
      <ModalContext.Provider
        value={{
          isCategory,
          setIsCategory,
          isIncomeModalShown,
          setIsIncomeModalShown,
          isAddModalShown,
          setIsAddModalShown,
        }}
      >
        <div className="px-[120px] flex gap-[40px] relative">
          <Records1 />
          <Records2 />
        </div>
        {isIncomeModalShown && <Income />}
        {/* {isAddModalShown && <Choose />} */}
      </ModalContext.Provider>
    </>
  );
}
