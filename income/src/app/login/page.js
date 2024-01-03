"use client";

import { useRouter } from "next/navigation";
import Login1 from "../../components/signup/Login1";
import Login2 from "../../components/signup/Login2";
import Login3 from "../../components/signup/Login3";
import { useEffect, useState } from "react";
import { useAuth } from "../../components/providers/AuthProvider";

export default function Home() {
  const router = useRouter();
  const { isLoggedIn } = useAuth();
  useEffect(() => {
    if (!isLoggedIn) router.push("/signup");
  }, [isLoggedIn, router]);

  if (!isLoggedIn) return null;

  const [page, setpage] = useState(1);
  if (page == 1) {
    return <Login1 page={page} setpage={setpage} />;
  } else if (page == 2) {
    return <Login2 page={page} setpage={setpage} />;
  } else if (page == 3) {
    return <Login3 page={page} setpage={setpage} />;
  }
}
