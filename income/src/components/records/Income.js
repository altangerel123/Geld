export default function Income() {
  return (
    <dialog id="Income">
      <div className="w-full flex justify-center">
        <div className="w-[728px] bg-white border-[1px] border-black">
          <div className="flex justify-between px-[24px] py-[20px] border-b-[1px]">
            <h1 className="text-[20px] font-semibold leading-[28px]">
              Add Record
            </h1>
            <button>X</button>
          </div>
          <div className="w-1/2 border-[1px] border-black">
            <div className=" flex border-[1px] rounded-[12px] gap-[4px]">
              <button className="px-[12px] h-[40px] border-[1px] border-black rounded-[20px]">
                Expense
              </button>
              <button className="px-[12px] h-[40px] border-[1px] border-black rounded-[20px]">
                Income
              </button>
            </div>
            <div>
              <p>Amount</p>
              <p>$000.00</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
