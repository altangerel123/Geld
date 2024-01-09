"use client";

import { useRouter } from "next/navigation";
const { createContext, useState, useEffect, useContext } = require("react");
import Loading from "../../app/loading";
import { toast } from "react-toastify";
import { api } from "../../app/common/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const signUp = async (email, password) => {
    setIsLoading(true);

    try {
      const { data } = await api.post("/sign-up", {
        email,
        password,
      });

      const { token } = data;

      localStorage.setItem("token", token);

      setIsLoggedIn(true);

      router.push("/login");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };
  const login = async (email, password) => {
    setIsLoading(true);

    try {
      const { data } = await api.post("/login", {
        email,
        password,
      });

      const { token } = data;

      localStorage.setItem("token", token);

      setIsLoggedIn(true);

      router.push("/login");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsReady(false);

    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }

    setIsReady(true);
  });

  return (
    <AuthContext.Provider value={{ signUp, isLoading, login, isLoggedIn }}>
      {isReady && children}
      {!isReady && <Loading />}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
