import { useState } from "react";

export default function Dashboard2() {
  const [card, setCard] = useState([
    {
      id: 1,
      title: "Income - Expense",
    },
    {
      id: 1,
      title: "Income - Expense",
    },
  ]);
  return (
    <div className="w-full flex gap-[30px] px-[120px] py-[30px] ">
      {card.map((item, index) => {
        return (
          <div key={index} className="w-1/2 h-[284px] rounded-[12px] bg-white">
            <h2 className="px-[24px] py-[16px] tect-[16px] font-normal border-b-[1px] border-black">
              {item.title}
            </h2>
          </div>
        );
      })}
    </div>
  );
}
