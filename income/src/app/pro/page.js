"use client";

import { useState } from "react";

export default function Home() {
  const { isPro, setIsPro } = useState(true);
  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-white"
      style={{ display: isPro ? "none" : "flex" }}
    >
      <div className="w-[600px] h-[500px] bg-slate-400">
        <p
          className="flex justify-end p-[20px]"
          onClick={() => {
            setIsPro();
          }}
        >
          X
        </p>
      </div>
    </div>
  );
}
