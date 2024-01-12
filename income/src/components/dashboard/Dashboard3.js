"use client";

import { useState } from "react";

export default function Dashboard3() {
  const [card, setCard] = useState([
    {
      id: 1,
      title: "Lending & Renting",
      description: "3 hours ago",
      image: "House (1).png",
    },
  ]);
  return (
    <div className="px-[120px]">
      <h2 className="bg-white px-[24px] py-[16px] text-[16px] font-bold">
        Last Records
      </h2>
      {card.map((item, index) => {
        return (
          <div key={index} className="bg-white py-[20px]">
            <div className="flex px-[24px] gap-[16px]">
              <div>
                <img
                  className="w-[40px] h-[40px] p-[10px] bg-blue-700 rounded-full"
                  src={item.image}
                />
              </div>
              <div>
                <h3 className="text-[16px] font-normal">{item.title}</h3>
                <p className="text-[#6B7280] text-[12px] font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
