"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });
const Autcontext = createContext();

export default function RootLayout({ children }) {
  const [isLoggedId, setIsLoggedId] = useState(false);

  const sighIn = async (email, password) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3002/sign-in",
        {
          email,
          password,
        },
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IiIsImlhdCI6MTcwMzQ3Mzc1NywiZXhwIjoxNzAzNDc3MzU3fQ.EkBXWxbMfY9K86mYK4552OCKSzv1o3721Obw92ioEK8",
          },
        }
      );

      // await axios.get("url", {
      //   headers: {
      //     Authorization: "token",
      //   },
      // });

      const { token } = data;

      console.log(token);
    } catch (err) {
      console.log(err, "FFF");
    }
    // const { token } = await res.json();
    // setIsLoggedId(true);
    // localStorage.setItem("token", token);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:3002")
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    if (token) {
      setIsLoggedId(true);
    }
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Autcontext.Provider value={{ isLoggedId, setIsLoggedId, sighIn }}>
          {children}
        </Autcontext.Provider>
      </body>
    </html>
  );
}
export const useAuth = () => {
  return useContext(Autcontext);
};
