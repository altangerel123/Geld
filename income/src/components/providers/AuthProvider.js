"use client";

import { useRouter } from "next/navigation";
const { createContext, useState, useEffect, useContext } = require("react");
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const rounter = useRouter();

  const signIn = async (email, password) => {
    setIsLoading(true);

    try {
      const { data } = await api.post("/sign-up", {
        email,
        password,
      });
      const { token } = data;
      localStorage.setItem("token", token);
      setIsLoggedIn(true);
      rounter.push("/dashboard");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  const signOut = () => {
    localStorage.removeItem("token");

    setIsLoggedIn(false);
    rounter.push("/sign-up");
  };
  useEffect(() => {
    setIsReady(false);
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
    setIsReady(true);
  }, []);
  return (
    <AuthContext.Provider value={(signIn, signOut, isLoading, isLoggedIn)}>
      {isReady && children}
      <div className="w-full h-[1024px] flex flex-col justify-center items-center bg-white">
        <div className="flex justify-center items-center mb-[48px]"></div>

        <p className="text-[16px] font-normal mt-[16px]">
          <a href="/login1">Түр хүлээнэ үү...</a>
        </p>
      </div>
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
