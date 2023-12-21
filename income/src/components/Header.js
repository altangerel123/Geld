export default function Header() {
  return (
    <div className="flex py-[16px] px-[120px] justify-between border-[1px] mb-[40px] bg-white">
      <div className="flex gap-[24px] justify-center items-center">
        <img className="" src="Vector.png" />
        <h2 className="text-[16px] font-normal leading-[24px]"><a className="hover:font-extrabold" href="dashboard">Dashboard</a></h2>
        <p className="text-[16px] font-normal leading-[24px]">
          <a className="hover:font-extrabold" href="/records">Records</a>
        </p>
      </div>
      <div className="flex gap-[24px]">
        <button className="p-[12px] bg-blue-600 text-white rounded-[50px]">
          <a> + Records</a>
        </button>
        <img
          className=" border-[1px] border-black w-[50px] h-[50px] rounded-full"
          src="Placeholder.png"
        />
      </div>
    </div>
  );
}
