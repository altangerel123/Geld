"use client";
export default function Records2() {
  return (
    <div className="w-2/3">
      <div className="flex justify-between">
        <div className="flex">
          <p>{"<"}</p>
          <p>Last 30 Days</p>
          <p>{">"}</p>
        </div>
        <p>Newest first</p>
      </div>
      <div className="flex justify-between border-[1px] bg-white">
        <div className="flex">
          <input type="checkbox" />
          <p>Select all</p>
        </div>
        <p>-35000$</p>
      </div>
    </div>
  );
}
export const Today = (props) => {
  return (
    <div className="flex leading-[24px] gap-[8px]">
      <input type={props.checkbox} />
      <img className="w-[20px] h-[20px]" src={props.image} />
      <p className="text-[16px] font-narmal">{props.title}</p>
    </div>
  );
};
