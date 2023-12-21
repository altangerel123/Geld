"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { createContext, useContext, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const Autcontext = createContext();

export default function RootLayout({ children }) {
  const [isLoggedId, setIsLoggedId] = useState(false);

  const sighIn = async (email, password) => {
    try {
      const res = await fetch("http://localhost:3002/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (res.status !== 200) {
        throw new Error("Invalid credentials");
      }

      const data = await res.json();
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
