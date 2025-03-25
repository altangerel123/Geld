"use client";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { AuthProvider } from "../components/providers/AuthProvider";

import { useEffect, useState } from "react";
import { createContext } from "react";
import Income from "../components/records/Income";
import Add from "../components/dashboard/Add";
import { toast } from "react-toastify";
import { api } from "./common/axios";

export const ModalContext = createContext();

export default function RootLayout({ children }) {
  const [isIncomeModalShown, setIsIncomeModalShown] = useState(false);
  const [isAddModalShown, setIsAddModalShown] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  const [isIcon, setIsIcon] = useState(true);
  const [isPro, setIsPro] = useState(false);
  const [profiley, setProfiley] = useState("");
  const [clickProfile, setClickProfile] = useState(false);
  const [color, setColor] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [category1map, setCategory1map] = useState([]);
  const [category, setCategory] = useState("");
  const [icon, setIcon] = useState("");
  const [isReady, setIsReady] = useState(false);

  const [expense, setExpense] = useState(true);
  const [addCategory, setAddCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [dated, setDated] = useState("");

  const [newRecords, setNewRecords] = useState([]);
  const [reduseExpense, setReduseExpense] = useState([]);
  const [selectFilter, setSelectFilter] = useState("All");

  const Profile = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.get("/profile", {
        headers: {
          Authorization: token,
        },
      });
      const { profile } = data;
      setProfiley(profile[0]);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const clickCategory = async (icon, category) => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.post(
        "/category",
        {
          icon,
          category,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
    } catch (error) {
      toast.error(error.message);
    }
  };
  const clickCategory1 = async () => {
    setIsReady(false);
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.get("/clickCategory1", {
        headers: {
          Authorization: token,
        },
      });
      console.log("data", data, typeof data);

      setCategory1map(data);
      setIsReady(true);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const records = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.post(
        "/records",
        {
          expense,
          addCategory,
          amount,
          dated,
          recordIcon,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
    } catch (error) {
      toast.error(error.message);
    }
  };
  const [recordIcon, setRecordIcon] = useState("");
  const recordsGet = async () => {
    setIsReady(false);
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.get("/recordsGet", {
        headers: {
          Authorization: token,
        },
      });
      console.log("records", data, typeof data);
      setNewRecords(data);
      setIsReady(true);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    clickCategory1();
    recordsGet();
  }, [setCategory1map]);
  return (
    <html lang="en">
      <body>
        <ModalContext.Provider
          value={{
            recordIcon,
            setRecordIcon,
            category1map,
            setCategory1map,
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
            clickProfile,
            setClickProfile,
            isReady,
            profiley,
            clickCategory,
            category,
            setCategory,
            icon,
            setIcon,
            clickCategory1,
            records,
            recordsGet,
            addCategory,
            setAddCategory,
            amount,
            setAmount,
            dated,
            setDated,
            expense,
            setExpense,
            newRecords,
            selectFilter,
            setSelectFilter,
            recordIcon,
            reduseExpense,
            setReduseExpense,
            color,
            setColor,
            isOpen,
            setIsOpen,
            color,
            setColor,
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
