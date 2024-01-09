"use client";
import styles from "./loading.module.css";
export default function Loading() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-white text-black">
      <div className="flex justify-center items-center gap-[9px]">
        <img className="w-[23px] h-[23px]" src="Vector.png" />
        <h1 className="text-[30px] font-semibold">Geld</h1>
      </div>
      <div className="flex justify-center items-center mb-[48px]"></div>
      <div className={styles.loader}></div>
      <p className="text-[16px] font-normal mt-[16px]">
        <a href="/login1">Түр хүлээнэ үү...</a>
      </p>
    </div>
  );
}
