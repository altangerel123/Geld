"use client";
import Header from "../../components/Header";

import Records1 from "../../components/records/Records1";
import Records2 from "../../components/records/Records2";

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative">
        <div className="px-[120px] flex gap-[40px] relative text-black">
          <Records1 />
          <Records2 />
        </div>
      </div>
    </>
  );
}
