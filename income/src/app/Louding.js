"use client";
import styles from "./louding.module.css";
export default function Loading() {
  return (
    <div className="w-full h-[1024px] flex flex-col justify-center items-center bg-white">
      <div className="flex justify-center items-center mb-[48px]">
        <Logo />
      </div>
      <div className={styles.loader}></div>
      <p className="text-[16px] font-normal mt-[16px]">
        <a href="/login1">Түр хүлээнэ үү...</a>
      </p>
    </div>
  );
}
