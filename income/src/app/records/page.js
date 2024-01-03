"use client";
import Header from "../../components/Header";
import Add from "../../components/records/Add";
import Income from "../../components/records/Income";
import Records1 from "../../components/records/Records1";
import Records2 from "../../components/records/Records2";
import { createContext, useState } from "react";

export const ModalContext = createContext();

export default function Home() {
  const [isIncomeModalShown, setIsIncomeModalShown] = useState(false);
  const [isAddModalShown, setIsAddModalShown] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  const [isIcon, setIsIcon] = useState(true);

  return (
    <>
      <Header />
      <ModalContext.Provider
        value={{
          isIcon,
          setIsIcon,
          isCategory,
          setIsCategory,
          isIncomeModalShown,
          setIsIncomeModalShown,
          isAddModalShown,
          setIsAddModalShown,
        }}
      >
        <div className="relative">
          <div className="px-[120px] flex gap-[40px] relative">
            <Records1 />
            <Records2 />
          </div>
        </div>
        {isIncomeModalShown && <Income />}
        {isCategory && <Add />}
      </ModalContext.Provider>
    </>
  );
}
