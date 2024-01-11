"use client";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { AuthProvider } from "../components/providers/AuthProvider";

import { useState } from "react";
import { createContext } from "react";
import Income from "../components/records/Income";
import Add from "../components/records/Add";
import { toast } from "react-toastify";
import { api } from "./common/axios";

export const ModalContext = createContext();

export default function RootLayout({ children }) {
  const [isIncomeModalShown, setIsIncomeModalShown] = useState(false);
  const [isAddModalShown, setIsAddModalShown] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  const [isIcon, setIsIcon] = useState(true);
  const [isPro, setIsPro] = useState(false);
  const [profile, setProfile] = useState();
  const [clickProfile, setClickProfile] = useState(false);

  const Profile = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.get("/profile", {
        headers: {
          Authorization: token,
        },
      });
      const { profile } = data;
      setProfile(profile[0]);
      console.log(profile[0]);
    } catch (error) {
      // toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <html lang="en">
      <body>
        <ModalContext.Provider
          value={{
            isPro,
            setIsPro,
            isIcon,
            setIsIcon,
            isCategory,
            setIsCategory,
            isIncomeModalShown,
            setIsIncomeModalShown,
            isAddModalShown,
            setIsAddModalShown,
            Profile,
            setProfile,
            clickProfile,
            setClickProfile,
            profile,
          }}
        >
          <AuthProvider>{children}</AuthProvider>
          <ToastContainer />
          {isIncomeModalShown && <Income />}
          {isCategory && <Add />}
        </ModalContext.Provider>
      </body>
    </html>
  );
}
