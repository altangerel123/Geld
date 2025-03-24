"use client";
import Header from "../../components/Header";

import Records1 from "../../components/records/Records1";
import Records2 from "../../components/records/Records2";

export default function Home() {
  return (
    <>
      <div className="relative h-screen">
        <Header />
        <div className="h-full px-[120px] flex gap-[40px] pt-[40px] relative text-black bg-[#1F2937]">
          <Records1 />
          <Records2 />
        </div>
      </div>
    </>
  );
}
