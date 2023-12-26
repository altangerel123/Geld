"use client";

import { useAuth } from "@/app/layout";
import { useState } from "react";

export const Login = () => {
  const { sighIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPaswsword] = useState("");
  return (
    <div className="w-full h-[1224px] flex bg-blue-700">
      <div className="w-1/2 h-full bg-white flex justify-center items-center">
        <div className="max-w-[384px] flex flex-col gap-[40px]">
          <div className="flex justify-center items-center gap-[9px">
            <img className="w-[23px] h-[23px]" src="Vector.png" />
            <h1 className="text-[30px] font-semibold">Geld</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-[8px]">
            <h2 className="text-[24px] font-medium">Welcome Back</h2>
            <p className="text-[16px] font-normal">
              Welcome back, Please enter your details
            </p>
          </div>
          <div className="flex flex-col gap-[16px]">
            <input
              className="border-[2px] border-[#A3A3A3] rounded-[5px] p-[16px]"
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="border-[2px] border-[#A3A3A3] rounded-[5px] p-[16px]"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPaswsword(e.target.value);
              }}
            />
            <button
              className="text-white border-[1px] bg-blue-600 rounded-[5px] p-[10px]"
              onClick={() => {
                sighIn(email, password);
              }}
            >
              {/* <a href="/login">Log in</a> */}
              Login
            </button>
          </div>
          <div className="flex justify-center items-center">
            <p>Don’t have account?</p>
            <button className="px-[12px] text-blue-600">
              <a href="/signup">Sign up</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
