"use client";
export default function Home() {
  return (
    <div className="w-full h-[1024px] flex bg-blue-600">
      <div className="w-1/2 h-full bg-white flex justify-center items-center">
        <div className="max-w-[384px] flex flex-col gap-[40px]">
          <div className="flex justify-center items-center gap-[9px">
            <img className="w-[23px] h-[23px]" src="Vector.png" />
            <h1 className="text-[30px] font-semibold">Geld</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-[8px]">
            <h2 className="text-[24px] font-medium">Create Geld account</h2>
            <p className="text-[16px] font-normal">
              Sign up below to create your Wallet account
            </p>
          </div>
          <div className="flex flex-col gap-[16px]">
            <input
              className="border-[2px] border-[#A3A3A3] rounded-[5px] p-[16px]"
              type="text"
              placeholder="Name"
            />
            <input
              className="border-[2px] border-[#A3A3A3] rounded-[5px] p-[16px]"
              type="email"
              placeholder="Email"
            />
            <input
              className="border-[2px] border-[#A3A3A3] rounded-[5px] p-[16px]"
              type="password"
              placeholder="Password"
            />
            <input
              className="border-[2px] border-[#A3A3A3] rounded-[5px] p-[16px]"
              type="password"
              placeholder="Re-assword"
            />
            <button className="text-white border-[1px] bg-blue-600 rounded-[5px] p-[10px]">
              Sign up
            </button>
          </div>
          <div className="flex justify-center items-center">
            <p>Already have account?</p>
            <button className="px-[12px] text-blue-600">
              <a href="/">Login in</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
