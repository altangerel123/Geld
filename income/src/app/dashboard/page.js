"use client";

import Header from "../../components/Header";
import Dashboard1 from "../../components/dashboard/Dashboard1";
import Dashboard2 from "../../components/dashboard/Dashboard2";
import Dashboard3 from "../../components/dashboard/Dashboard3";

export default function Home() {
  return (
    <div className="w-full h-full text-black bg-[#1F2937]">
      <Header />
      <div className="pt-[40px]">
        <Dashboard1 />
        <Dashboard2 />
        <Dashboard3 />
      </div>
    </div>
  );
}
